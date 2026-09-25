(function () {
    var SPRITE_PATH = "images/jolteon/jolteon.gif";
    var POKEBALL_PATH = "images/jolteon/pokeball.png";

    var jolteonEl = null;
    var jolteonImg = null;
    var sparksEl = null;

    var posX = 0;
    var posY = 0;
    var targetX = 0;
    var targetY = 0;

    var hasMoved = false;
    var isMoving = false;
    var animFrameId = null;
    var activePokeball = null;

    function initElements() {
        jolteonEl = document.getElementById("site-jolteon");
        if (!jolteonEl) {
            jolteonEl = document.createElement("div");
            jolteonEl.id = "site-jolteon";
            jolteonEl.className = "face-left is-ready";
            jolteonEl.setAttribute("aria-label", "Jolteon the Pokémon");

            var container = document.createElement("div");
            container.className = "jolteon-sprite-container";
            container.title = "¡Soy Jolteon! Haz clic en la pantalla para lanzarme una Pokéball ⚡";

            jolteonImg = document.createElement("img");
            jolteonImg.src = SPRITE_PATH;
            jolteonImg.alt = "Jolteon";
            jolteonImg.className = "jolteon-sprite-img";

            container.appendChild(jolteonImg);
            jolteonEl.appendChild(container);
            document.body.appendChild(jolteonEl);
        } else {
            jolteonImg = jolteonEl.querySelector(".jolteon-sprite-img");
            if (!jolteonImg) {
                var container = jolteonEl.querySelector(".jolteon-sprite-container");
                if (!container) {
                    container = document.createElement("div");
                    container.className = "jolteon-sprite-container";
                    container.title = "¡Soy Jolteon! Haz clic en la pantalla para lanzarme una Pokéball ⚡";
                    jolteonEl.appendChild(container);
                }
                jolteonImg = document.createElement("img");
                jolteonImg.src = SPRITE_PATH;
                jolteonImg.alt = "Jolteon";
                jolteonImg.className = "jolteon-sprite-img";
                container.appendChild(jolteonImg);
            }
        }

        sparksEl = document.getElementById("site-jolteon-sparks");
        if (!sparksEl) {
            sparksEl = document.createElement("div");
            sparksEl.id = "site-jolteon-sparks";
            sparksEl.setAttribute("aria-hidden", "true");
            document.body.appendChild(sparksEl);
        }

        // Click directly on Jolteon
        jolteonEl.addEventListener("click", function (e) {
            e.stopPropagation();
            jumpJolteon();
        });

        // Click anywhere on document to throw a Pokeball
        document.addEventListener("click", function (e) {
            var target = e.target;
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest("input") ||
                target.closest("textarea") ||
                target.closest(".navbar") ||
                target.closest("#site-jolteon") ||
                target.closest("#preloader")
            ) {
                return;
            }

            var clickX = e.clientX;
            var clickY = e.clientY;
            throwPokeball(clickX, clickY);
        });

        window.addEventListener("resize", function () {
            if (!hasMoved) return; // stays perfectly anchored in bottom-right by CSS
            var w = window.innerWidth;
            var h = window.innerHeight;
            if (posX > w - 85) posX = w - 90;
            if (posY > h - 85) posY = h - 90;
            setPosition(posX, posY);
        });
    }

    function ensureCoordinates() {
        if (!hasMoved && jolteonEl) {
            var rect = jolteonEl.getBoundingClientRect();
            posX = rect.left;
            posY = rect.top;
            jolteonEl.style.bottom = "auto";
            jolteonEl.style.right = "auto";
            jolteonEl.style.left = "0px";
            jolteonEl.style.top = "0px";
            jolteonEl.style.transform = "translate3d(" + posX + "px, " + posY + "px, 0)";
            hasMoved = true;
        }
    }

    function spawnSparks(x, y, count) {
        if (!sparksEl) return;
        var symbols = ["⚡", "✨", "✦"];
        for (var i = 0; i < (count || 4); i++) {
            var spark = document.createElement("div");
            spark.className = "electric-spark";
            spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            spark.style.left = (x + (Math.random() * 24 - 12)) + "px";
            spark.style.top = (y + (Math.random() * 24 - 12)) + "px";
            var tx = (Math.random() * 60 - 30) + "px";
            var ty = (-Math.random() * 45 - 10) + "px";
            spark.style.setProperty("--tx", tx);
            spark.style.setProperty("--ty", ty);
            sparksEl.appendChild(spark);

            (function (el) {
                setTimeout(function () {
                    if (el && el.parentNode) el.parentNode.removeChild(el);
                }, 600);
            })(spark);
        }
    }

    function setPosition(x, y) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        posX = Math.max(10, Math.min(x, w - 85));
        posY = Math.max(65, Math.min(y, h - 85));
        if (jolteonEl) {
            jolteonEl.style.transform = "translate3d(" + posX + "px, " + posY + "px, 0)";
            jolteonEl.style.left = "0px";
            jolteonEl.style.top = "0px";
            jolteonEl.style.bottom = "auto";
            jolteonEl.style.right = "auto";
        }
    }

    function jumpJolteon() {
        if (!jolteonEl) return;
        ensureCoordinates();
        jolteonEl.classList.add("is-jumping");
        spawnSparks(posX + 40, posY + 35, 6);
        setTimeout(function () {
            if (jolteonEl) jolteonEl.classList.remove("is-jumping");
        }, 500);
    }

    function throwPokeball(targetXPos, targetYPos) {
        ensureCoordinates();

        if (activePokeball && activePokeball.parentNode) {
            activePokeball.parentNode.removeChild(activePokeball);
        }

        var ball = document.createElement("div");
        ball.className = "jolteon-pokeball";
        ball.style.left = targetXPos + "px";
        ball.style.top = targetYPos + "px";
        document.body.appendChild(ball);
        activePokeball = ball;

        spawnSparks(targetXPos, targetYPos, 3);
        dashTowards(targetXPos - 35, targetYPos - 35);
    }

    function dashTowards(tx, ty) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        targetX = Math.max(10, Math.min(tx, w - 85));
        targetY = Math.max(65, Math.min(ty, h - 85));

        // Facing direction
        if (targetX < posX) {
            jolteonEl.classList.remove("face-right");
            jolteonEl.classList.add("face-left");
        } else {
            jolteonEl.classList.remove("face-left");
            jolteonEl.classList.add("face-right");
        }

        jolteonEl.classList.add("is-dashing");
        isMoving = true;

        if (animFrameId) cancelAnimationFrame(animFrameId);

        var speed = 14;
        function step() {
            var dx = targetX - posX;
            var dy = targetY - posY;
            var dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < speed) {
                setPosition(targetX, targetY);
                isMoving = false;
                jolteonEl.classList.remove("is-dashing");
                jumpJolteon();

                if (activePokeball) {
                    spawnSparks(targetX + 35, targetY + 35, 8);
                    if (activePokeball.parentNode) {
                        activePokeball.parentNode.removeChild(activePokeball);
                    }
                    activePokeball = null;
                }
                return;
            }

            var vx = (dx / dist) * speed;
            var vy = (dy / dist) * speed;
            setPosition(posX + vx, posY + vy);

            if (Math.random() < 0.3) {
                spawnSparks(posX + 35, posY + 35, 1);
            }

            animFrameId = requestAnimationFrame(step);
        }

        animFrameId = requestAnimationFrame(step);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initElements);
    } else {
        initElements();
    }
})();
