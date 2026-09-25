// Hover reveals details; buttons also support keyboard and touch interaction.
document.querySelectorAll('.career-card').forEach(function (card) {
    var button = card.querySelector('.career-logo');
    var detail = card.querySelector('.career-detail');
    var pinned = false;

    function reveal(open) {
        button.setAttribute('aria-expanded', String(open));
        detail.hidden = !open;
        card.classList.toggle('is-open', open);
    }

    card.addEventListener('pointerenter', function (event) {
        if (event.pointerType === 'mouse') reveal(true);
    });
    card.addEventListener('pointerleave', function (event) {
        if (event.pointerType === 'mouse' && !pinned && !card.contains(document.activeElement)) reveal(false);
    });
    button.addEventListener('focus', function () {
        if (button.matches(':focus-visible')) reveal(true);
    });
    button.addEventListener('click', function () {
        pinned = !pinned;
        reveal(pinned);
    });
    card.addEventListener('focusout', function (event) {
        if (!card.contains(event.relatedTarget)) {
            pinned = false;
            reveal(false);
        }
    });
    card.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (document.activeElement !== button) button.focus();
            pinned = false;
            reveal(false);
            event.stopPropagation();
        }
    });
    document.addEventListener('pointerdown', function (event) {
        if (!card.contains(event.target)) {
            pinned = false;
            reveal(false);
        }
    });
});

// Keep the shared time scale and connectors attached as cards expand or resize.
(function () {
    var board = document.querySelector('.career-board');
    if (!board) return;
    var svg = board.querySelector('.career-connectors');
    var axis = board.querySelector('.career-axis');
    var cards = Array.from(board.querySelectorAll('.career-card'));
    var namespace = 'http://www.w3.org/2000/svg';
    var scheduled = false;

    function element(tag, attributes, parent) {
        var node = document.createElementNS(namespace, tag);
        Object.keys(attributes).forEach(function (key) {
            node.setAttribute(key, attributes[key]);
        });
        (parent || svg).appendChild(node);
        return node;
    }

    function draw() {
        scheduled = false;
        var bounds = board.getBoundingClientRect();
        var axisBounds = axis.getBoundingClientRect();
        var width = bounds.width;
        var y = axisBounds.top - bounds.top + axisBounds.height / 2;
        var present = Date.now();
        // Resume dates have month precision. Include the entire final month.
        function monthBoundary(value, includeEndMonth) {
            if (value === 'present') return present;
            var parts = value.split('-').map(Number);
            return Date.UTC(parts[0], parts[1] - 1 + (includeEndMonth ? 1 : 0), 1);
        }
        var latest = Math.max(present, ...cards.map(function (card) {
            return monthBoundary(card.dataset.end, true);
        }));
        var earliestDateObj = cards.reduce(function(min, card) {
            var d = monthBoundary(card.dataset.start, false);
            return d < min ? d : min;
        }, Date.now());
        var startYear = new Date(earliestDateObj).getUTCFullYear();
        var earliest = Date.UTC(startYear, 0, 1);
        var left = 30;
        var right = width - 38;
        function x(date) {
            return left + (date - earliest) / (latest - earliest) * (right - left);
        }
        svg.replaceChildren();
        svg.setAttribute('viewBox', '0 0 ' + width + ' ' + bounds.height);

        cards.forEach(function (card) {
            var box = card.getBoundingClientRect();
            var above = card.closest('.career-row').getAttribute('aria-labelledby') === 'experience-heading';
            var cardY = (above ? box.bottom : box.top) - bounds.top;
            var center = box.left - bounds.left + box.width / 2;
            var start = x(monthBoundary(card.dataset.start, false));
            var end = x(monthBoundary(card.dataset.end, true));
            var color = getComputedStyle(card).getPropertyValue('--career-accent').trim();
            var group = element('g', {});
            // A cone narrows to the actual year or date interval on the axis.
            element('path', {
                d: 'M ' + (center - 22) + ' ' + cardY + ' L ' + (center + 22) + ' ' + cardY +
                    ' L ' + Math.max(end, start + 2) + ' ' + y + ' L ' + start + ' ' + y + ' Z',
                fill: color, 'fill-opacity': '.10', stroke: color, 'stroke-opacity': '.28',
                'stroke-width': '1',
                class: 'career-connector' + (card.classList.contains('is-open') ? ' is-active' : '')
            }, group);
            // Separate upper and lower range strokes so concurrent entries remain visible.
            var rangeY = y + (above ? -4 : 4);
            element('line', {x1: start, x2: end, y1: rangeY, y2: rangeY,
                stroke: color, 'stroke-width': '4', 'stroke-linecap': 'round'}, group);
            element('circle', {cx: start, cy: rangeY, r: '3', fill: color}, group);
            if (end > start) element('circle', {cx: end, cy: rangeY, r: '3', fill: color}, group);
        });
        element('line', {x1: left, x2: width - 16, y1: y, y2: y, stroke: '#000', 'stroke-width': '3'});
        element('path', {d: 'M ' + (width - 25) + ' ' + (y - 7) + ' L ' + (width - 16) + ' ' + y +
            ' L ' + (width - 25) + ' ' + (y + 7), fill: 'none', stroke: '#000', 'stroke-width': '3'});
        var endYear = new Date(latest).getUTCFullYear();
        var ticks = [];
        for (var yr = startYear; yr <= endYear; yr++) {
            ticks.push(yr);
        }
        ticks.push('latest');
        ticks.forEach(function (date) {
            var isLatest = date === 'latest';
            var tickX = x(isLatest ? latest : Date.UTC(date, 0, 1));
            var label = element('text', {x: tickX, y: y + 26, 'text-anchor': 'middle',
                fill: '#52606b', 'font-size': '12', 'font-family': 'inherit'});
            label.textContent = isLatest ? 'Present' : String(date);
        });
    }

    function schedule() {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(draw);
        }
    }
    var resize = new ResizeObserver(schedule);
    resize.observe(board);
    cards.forEach(function (card) { resize.observe(card); });
    new MutationObserver(schedule).observe(board, {
        attributes: true, attributeFilter: ['class', 'hidden'], subtree: true
    });
    window.addEventListener('resize', schedule);
    if (document.fonts) document.fonts.ready.then(schedule);
    schedule();
}());
