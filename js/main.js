/* ==========================================
   Julian Carrion Portfolio - Main Logic (i18n & Theme)
   ========================================== */

// Translation Dictionary for English and Spanish
const translations = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navResumes: "Resumes",
    navContact: "Contact",
    navCta: "Get in touch",

    heroBadge: "CS & Business Admin Student @ UGR",
    heroTitle: "The exact software your business needs",
    heroTagline: "Always learning",
    heroBio: "I'm <strong>Julian Carrión</strong> (jxliian), a 21-year-old double-degree student in Computer Science and Business Administration at the University of Granada. Passionate about software engineering, systems programming, and data analysis.",
    btnViewProjects: "View Projects",
    btnCopyEmail: "Copy Email",
    btnEmailCopied: "✓ Email Copied!",

    statAgeLabel: "Years Old",
    statDegree: "Double Degree",
    statDegreeLabel: "CS + Business",
    statLocation: "Granada",
    statLocationLabel: "Location, Spain",

    aboutSubtitle: "Background & Vision",
    aboutTitle: "About Me",
    aboutDesc: "Combining software engineering capabilities with strategic business thinking.",
    aboutBadgeText: "<strong>Julian Carrión</strong> · University of Granada",
    aboutP1: "I'm a 21-year-old double-degree student combining <strong>Computer Science and Business Administration</strong> at the University of Granada. I'm passionate about building software that solves real problems — from low-level systems programming to web applications and automation tools.",
    aboutP2: "My background spans multiple programming paradigms, and I'm constantly expanding my skill set at the intersection of technology and business strategy.",

    highlight1Title: "Full-Spectrum Dev",
    highlight1Desc: "From C & C++ memory management to Python simulations & modern web platforms.",
    highlight2Title: "Business & Tech",
    highlight2Desc: "Bridging algorithmic efficiency with strategic market and product vision.",

    projectsSubtitle: "Portfolio Highlights",
    projectsTitle: "Featured Projects",
    projectsDesc: "Key projects spanning high-performance mobile apps, web platforms, compiler parsers, simulations, testing tools, and OOP game engines.",

    projectFitTrackerTitle: "FitTracker",
    projectFitTrackerDesc: "High-performance, local-first mobile application engineered for resistance training tracking, progressive overload automation, and strength analytics. Built with React Native (SDK 54), TypeScript, and embedded SQLite.",

    project1Title: "repasaYA",
    project1Desc: "A collaborative platform where I share structured university notes, interactive flashcards, and exam practice questions to support the academic student community.",

    project2Title: "ABM Income & Happiness Simulation",
    project2Desc: "Agent-Based Modeling (ABM) computational simulation analyzing how income distribution dynamics and interpersonal relationship networks impact collective happiness.",

    project3Title: "Markdown to HTML Lex Parser",
    project3Desc: "Lexical compiler tool built in Lex/Flex and C/C++ to parse Markdown syntax rules and convert them into clean, structured HTML.",

    project4Title: "SSDBot",
    project4Desc: "Customizable, modular Discord Bot built for community server management, API integrations, and event automation.",

    project5Title: "AutoQuickTest",
    project5Desc: "Automated software testing utility designed to streamline compilation, execution, and validation of test suites against expected outputs.",

    project6Title: "Irrgarten Engine",
    project6Desc: "Object-oriented maze game engine implemented in Java and Ruby applying OOP principles, inheritance, and state machines.",

    skillsSubtitle: "Core Stack",
    skillsTitle: "Essential Technologies",
    skillsDesc: "Practical languages, systems, and tools I use daily for software development.",

    catCoreLanguages: "<span>Core</span> Languages & Paradigms",
    catToolsSystems: "<span>Tools</span> & Systems",

    cvSubtitle: "Curriculum Vitae",
    cvTitle: "Download My Resumes",
    cvDesc: "Two tailored versions adapted for specific job profiles and application targets.",
    cvTechBadge: "LaTeX · English · ATS-Friendly",
    cvTechTitle: "Tech / Software Engineer Resume",
    cvTechDesc: "International standard 1-page format optimized for ATS screeners and tech companies. Focused on software engineering, systems programming, data analysis, and academic background. No photo.",
    cvCasualBadge: "Visual · Spanish · With Photo",
    cvCasualTitle: "Student & Summer Jobs Resume",
    cvCasualDesc: "Modern, visual Canva-style layout featuring profile photograph. Geared towards customer-facing roles, C1 English fluency, summer jobs, internships, and hospitality.",
    btnDownload: "Download CV",
    badgeInDev: "In development",
    floatingWorkText: "Open to work! Contact me",

    contactTitle: "Contact Me",
    contactText: "Feel free to reach out directly using the form below or drop an email!",
    labelName: "Your Name",
    labelEmail: "Your Email",
    labelSubject: "Subject",
    labelMessage: "Message",
    btnSendMessage: "Send Message",
    btnMessageSent: "✓ Message Sent!",

    // Placeholders
    placeholderName: "Your name...",
    placeholderEmail: "your@email.com",
    placeholderSubject: "Subject...",
    placeholderMessage: "Write your message here...",

    preloaderStatus: "Initialising portfolio...",
    footerText: "© 2026 Julian Carrión (jxliian)"
  },

  es: {
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navResumes: "Curriculum",
    navContact: "Contacto",
    navCta: "Contactar",

    heroBadge: "Estudiante de Doble Grado Informática + ADE @ UGR",
    heroTitle: "El software exacto que tu negocio necesita",
    heroTagline: "Siempre aprendiendo",
    heroBio: "Soy <strong>Julian Carrión</strong> (jxliian), estudiante de 21 años del doble grado en Ingeniería Informática y Administración de Empresas en la Universidad de Granada. Apasionado por la ingeniería de software, la programación de sistemas y el análisis de datos.",
    btnViewProjects: "Ver Proyectos",
    btnCopyEmail: "Copiar Email",
    btnEmailCopied: "✓ ¡Email Copiado!",

    statAgeLabel: "Años de Edad",
    statDegree: "Doble Grado",
    statDegreeLabel: "Informática + ADE",
    statLocation: "Granada",
    statLocationLabel: "Ubicación, España",

    aboutSubtitle: "Trayectoria y Visión",
    aboutTitle: "Sobre mí",
    aboutDesc: "Combinando la capacidad analítica del desarrollo con la visión estratégica de negocio.",
    aboutBadgeText: "<strong>Julian Carrión</strong> · Universidad de Granada",
    aboutP1: "Tengo 21 años y estudio el doble grado de <strong>Ingeniería Informática y Administración y Dirección de Empresas</strong> en la Universidad de Granada. Me apasiona construir software que resuelva problemas reales, desde la programación de sistemas hasta aplicaciones web y herramientas de automatización.",
    aboutP2: "Mi experiencia abarca múltiples paradigmas de programación, y estoy constantemente ampliando mis habilidades en el punto de encuentro entre la tecnología y la estrategia empresarial.",

    highlight1Title: "Desarrollador Versátil",
    highlight1Desc: "Desde gestión de memoria en C & C++ hasta simulaciones en Python y plataformas web modernas.",
    highlight2Title: "Tecnología & Negocios",
    highlight2Desc: "Conectando la eficiencia algorítmica con la visión estratégica de mercado y producto.",

    projectsSubtitle: "Proyectos Destacados",
    projectsTitle: "Proyectos Destacados",
    projectsDesc: "Proyectos clave en aplicaciones móviles de alto rendimiento, desarrollo web, compiladores, simulaciones, herramientas de test y motores OOP.",

    projectFitTrackerTitle: "FitTracker",
    projectFitTrackerDesc: "Aplicación móvil local-first de alto rendimiento para el seguimiento de entrenamiento de fuerza, automatización de sobrecarga progresiva y analíticas con React Native (SDK 54), TypeScript y SQLite embebido.",

    project1Title: "repasaYA",
    project1Desc: "Plataforma colaborativa donde comparto apuntes universitarios estructurados, tarjetas de estudio (flashcards) y preguntas de práctica para la comunidad estudiantil.",

    project2Title: "Simulación ABM Ingresos & Felicidad",
    project2Desc: "Simulación computacional mediante Modelado Basado en Agentes (ABM) que analiza cómo la dinámica de ingresos y las relaciones interpersonales impactan en la felicidad.",

    project3Title: "Parser Markdown a HTML (Lex)",
    project3Desc: "Herramienta de análisis léxico creada en Lex/Flex y C/C++ para parsear sintaxis Markdown y generar código HTML estructurado.",

    project4Title: "SSDBot",
    project4Desc: "Bot de Discord modular y personalizable diseñado para la gestión de comunidades, integración de APIs y automatización de eventos.",

    project5Title: "AutoQuickTest",
    project5Desc: "Herramienta de automatización de pruebas para compilar, ejecutar y validar conjuntos de test frente a salidas esperadas.",

    project6Title: "Motor de Juego Irrgarten",
    project6Desc: "Motor de juego orientado a objetos implementado en Java y Ruby aplicando principios POO, herencia y máquinas de estados.",

    skillsSubtitle: "Toolkit Esencial",
    skillsTitle: "Habilidades y Tecnologías Clave",
    skillsDesc: "Lenguajes, sistemas y herramientas de uso diario en el desarrollo de software profesional.",

    catCoreLanguages: "<span>Lenguajes</span> Principales",
    catToolsSystems: "<span>Herramientas</span> y Sistemas",

    cvSubtitle: "Curriculum Vitae",
    cvTitle: "Descargar mi CV",
    cvDesc: "Dos versiones adaptadas y actualizadas según el perfil profesional y tipo de vacante.",
    cvTechBadge: "LaTeX · English · ATS-Friendly",
    cvTechTitle: "Tech / Software Engineer Resume",
    cvTechDesc: "Formato estándar internacional optimizado para filtros ATS y empresas tecnológicas. Redactado en inglés, centrado en ingeniería de software, arquitectura de sistemas y análisis de datos. Sin fotografías.",
    cvCasualBadge: "Visual · Español · Con Fotografía",
    cvCasualTitle: "CV Estudiante / Trabajos de Verano",
    cvCasualDesc: "Diseño moderno y visual con fotografía personal. Encaminado a puestos de atención al público (inglés C1), hostelería, comercio, prácticas y ofertas para estudiantes de verano.",
    btnDownload: "Descargar CV",
    badgeInDev: "En desarrollo",
    floatingWorkText: "¡Buscando trabajo! Contacta conmigo",

    contactTitle: "Contacto",
    contactText: "Puedes enviarme un mensaje directamente usando el formulario o copiar mi email:",
    labelName: "Tu Nombre",
    labelEmail: "Tu Email",
    labelSubject: "Asunto",
    labelMessage: "Mensaje",
    btnSendMessage: "Enviar Mensaje",
    btnMessageSent: "✓ ¡Mensaje Enviado!",

    // Placeholders
    placeholderName: "Tu nombre...",
    placeholderEmail: "tu@email.com",
    placeholderSubject: "Asunto...",
    placeholderMessage: "Escribe tu mensaje aquí...",

    preloaderStatus: "Cargando portafolio...",
    footerText: "© 2026 Julian Carrión (jxliian)"
  }
};

// Current State variables
let currentLang = localStorage.getItem('portfolio_lang') || 'es';

document.addEventListener('DOMContentLoaded', () => {
  // Ensure any old local storage theme preference is cleared
  localStorage.removeItem('portfolio_theme');
  document.documentElement.setAttribute('data-theme', 'light');

  initPreloader();
  initLanguage();
  initCopyEmail();
  initSmoothScroll();
  initContactForm();
  initInteractiveParticles();
  initInteractiveCharacterVideo();
  initHeroLayoutScrollToggle();
  // Typewriter MUST init after language is set, with a small delay
  // to let the DOM settle after setLanguage writes innerHTML
  setTimeout(() => {
    initScrollTypewriter();
  }, 50);
  initCardReveal();
  initMobileMenu();
});

/**
 * Initialize and toggle Language (English / Spanish)
 */
function initLanguage() {
  setLanguage(currentLang);

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      setLanguage(currentLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerHTML = lang === 'en' ? 'EN' : 'ES';
  }

  // Update text for all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Reset typewriter elements so they re-animate on next scroll
  document.querySelectorAll('[data-typewrite]').forEach(el => {
    delete el.dataset.typewritingDone;
  });
  // Re-init typewriter observers after a tick so DOM is settled
  setTimeout(() => { initScrollTypewriter(); }, 60);

  // Update placeholder attributes for form inputs with data-i18n-placeholder
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

/**
 * Copy email to clipboard with notification button feedback
 */
function initCopyEmail() {
  const emailButtons = document.querySelectorAll('.js-copy-email');

  emailButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = 'carrionjuliann@gmail.com';
      const isEnglish = currentLang === 'en';
      const copiedMsg = isEnglish ? '✓ Email Copied!' : '✓ ¡Email Copiado!';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        const textSpan = btn.querySelector('span') || btn;
        const originalHtml = textSpan.innerHTML;
        textSpan.innerHTML = copiedMsg;
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

        setTimeout(() => {
          textSpan.innerHTML = originalHtml;
          btn.style.background = '';
        }, 2500);

      } catch (err) {
        console.error('Copy failed:', err);
      }
    });
  });
}

/**
 * Contact Form Submission Handler
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.contact-submit-btn');
    const isEnglish = currentLang === 'en';
    const sentText = isEnglish ? '✓ Message Sent!' : '✓ ¡Mensaje Enviado!';

    if (submitBtn) {
      const btnSpan = submitBtn.querySelector('span') || submitBtn;
      const originalText = btnSpan.innerHTML;

      btnSpan.innerHTML = sentText;
      submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

      form.reset();

      setTimeout(() => {
        btnSpan.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 3000);
    }
  });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Initial Preloader Screen Handler
 */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const hasVisited = sessionStorage.getItem('portfolio_visited');

  if (hasVisited) {
    preloader.style.display = 'none';
    document.body.classList.remove('preloader-active');
  } else {
    document.body.classList.add('preloader-active');

    setTimeout(() => {
      preloader.classList.add('fade-out');
      document.body.classList.remove('preloader-active');
      sessionStorage.setItem('portfolio_visited', 'true');

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 650);
    }, 1300);
  }
}

/**
 * Google Antigravity – Ultra-Fluid Physics & Google Palette
 * ──────────────────────────────────────────────────────────
 * Physics: Needle particles have a home position. A soft spring pulls them back,
 * high liquid damping smooths motion. Cursor repels gracefully (no abrupt snaps).
 * Palette: Iconic Google quad-colors (Blue, Red, Yellow, Green) blended with Indigo.
 */
function initInteractiveParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Disable particle canvas background in hero section, enable when scrolling down
  function updateParticleVisibility() {
    if (window.scrollY < window.innerHeight * 0.7) {
      canvas.style.opacity = '0';
    } else {
      canvas.style.opacity = '0.65';
    }
  }
  window.addEventListener('scroll', updateParticleVisibility, { passive: true });
  updateParticleVisibility();

  const dpr = window.devicePixelRatio || 1;
  let W, H;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', () => { resize(); createParticles(); });

  // Iconic Google Colors (Blue, Red, Yellow, Green) + Indigo accents
  const PALETTE_DARK = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#60a5fa', '#818cf8', '#38bdf8'];
  const PALETTE_LIGHT = ['#1a73e8', '#d93025', '#f9ab00', '#1e8e3e', '#4f46e5', '#0284c7'];

  const mouse = { x: W / 2, y: H / 2, active: false };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
  window.addEventListener('mouseleave', () => { mouse.active = false; });
  window.addEventListener('touchmove', e => {
    if (e.touches.length) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; mouse.active = true; }
  }, { passive: true });

  // Ultra-fluid physical tuning (Ultra slow & serene)
  const R_INNER = 140;   // Repulsion inner core (pushes away)
  const R_OUTER = 320;   // Attraction outer shell (pulls towards)
  const SPRING = 0.003; // Ultra-soft spring pull back home
  const DAMP = 0.955; // Silky liquid damping
  const WAVE_SPD = 0.0004; // Super slow radial breathing wave
  const WAVE_AMP = 8;     // Breathing displacement

  const cloudCenter = { x: W / 2, y: H / 2 };
  const LERP_SPEED = 0.015; // Soft, subtle weightless trailing follow speed

  let particles = [];

  function createParticles() {
    particles = [];
    const count = 680; // Spaced out for airy readability
    const minR = Math.min(W, H) * 0.16; // Clear central hero area
    const maxR = Math.min(W, H) * 0.68; // Expands to cover ~98% of viewport
    const cx = cloudCenter.x, cy = cloudCenter.y;

    for (let i = 0; i < count; i++) {
      // Angle around circle with slight organic jitter
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.14;

      // Multi-harmonic sinusoidal noise for irregular circular cloud
      const deform = Math.sin(angle * 3) * 45 + Math.cos(angle * 5) * 30 + (Math.random() - 0.5) * 40;
      const radius = Math.max(minR * 0.8, Math.min(maxR * 1.08, minR + Math.random() * (maxR - minR) + deform));

      // Group Google colors in angular sectors around circle
      const sectorAngle = (angle + Math.PI * 2) % (Math.PI * 2);
      const colorIdx = Math.floor((sectorAngle / (Math.PI * 2)) * PALETTE_DARK.length);

      particles.push({
        baseAngle: angle,
        baseRadius: radius,
        orbitSpeed: (i % 2 === 0 ? 1 : -1) * (0.00004 + Math.random() * 0.00004), // Ultra-slow revolving drift
        hx: cx + Math.cos(angle) * radius,
        hy: cy + Math.sin(angle) * radius,
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        vx: 0, vy: 0,
        len: 8 + Math.random() * 12, // Slightly larger needles
        w: 1.6 + Math.random() * 2.0, // Crisp, punchy strokes
        ang: angle + Math.PI / 2,
        ci: colorIdx,
        ph: Math.random() * Math.PI * 2
      });
    }
  }
  createParticles();

  let t = 0;

  function frame() {
    t++;
    const pal = PALETTE_LIGHT;
    const baseA = 0.65;

    // Soft, subtle parallax follow coefficient (0.35) so cloud doesn't jump exaggeratingly
    const targetCenterX = mouse.active ? (W / 2 + (mouse.x - W / 2) * 0.35) : W / 2;
    const targetCenterY = mouse.active ? (H / 2 + (mouse.y - H / 2) * 0.35) : H / 2;
    cloudCenter.x += (targetCenterX - cloudCenter.x) * LERP_SPEED;
    cloudCenter.y += (targetCenterY - cloudCenter.y) * LERP_SPEED;

    const cx = cloudCenter.x;
    const cy = cloudCenter.y;

    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // 1. Ultra-slow organic revolution
      p.baseAngle += p.orbitSpeed;

      // 2. Dynamic home orbit position
      p.hx = cx + Math.cos(p.baseAngle) * p.baseRadius;
      p.hy = cy + Math.sin(p.baseAngle) * p.baseRadius;

      // 3. Breathing radial wave pulse expanding from cursor
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const wp = dm * 0.004 - t * WAVE_SPD * 60 + p.ph;
      const bo = Math.sin(wp) * WAVE_AMP;
      const dx0 = dm > 1 ? (p.x - mouse.x) / dm : 0;
      const dy0 = dm > 1 ? (p.y - mouse.y) / dm : 0;

      // Target position = home orbit + breathing wave
      const tx = p.hx + dx0 * bo;
      const ty = p.hy + dy0 * bo;

      // 4. Soft spring acceleration back to home orbit
      p.vx += (tx - p.x) * SPRING;
      p.vy += (ty - p.y) * SPRING;

      // 5. Dual Cursor Interaction: Attraction (Outer ring) + Repulsion (Inner core)
      if (mouse.active && dm < R_OUTER && dm > 2) {
        const ux = (mouse.x - p.x) / dm;
        const uy = (mouse.y - p.y) / dm;

        let force = 0;
        if (dm < R_INNER) {
          // Inner core: Repulsion (pushes AWAY from cursor)
          const ratio = 1 - (dm / R_INNER);
          force = -ratio * ratio * 0.35;
        } else {
          // Outer shell: Attraction (pulls TOWARDS cursor)
          const ratio = Math.sin(((dm - R_INNER) / (R_OUTER - R_INNER)) * Math.PI);
          force = ratio * 0.15;
        }

        // Add slow pulsating breathing oscillation
        const cycle = Math.sin(t * 0.008 + dm * 0.005);
        force += cycle * 0.04;

        p.vx += ux * force;
        p.vy += uy * force;
      }

      // 6. Liquid damping & position integration
      p.vx *= DAMP;
      p.vy *= DAMP;
      p.x += p.vx;
      p.y += p.vy;

      // 7. Smooth needle orientation
      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 0.15) {
        const ta = Math.atan2(p.vy, p.vx);
        let d = ta - p.ang;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        p.ang += d * 0.035;
      } else {
        // Tangential orientation along circular cloud
        const ra = Math.atan2(p.y - cy, p.x - cx) + Math.PI / 2;
        let d = ra - p.ang;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        p.ang += d * 0.015;
      }

      // 8. Draw needle segment
      const hl = p.len / 2;
      const ca = Math.cos(p.ang), sa = Math.sin(p.ang);
      const x1 = p.x - ca * hl, y1 = p.y - sa * hl;
      const x2 = p.x + ca * hl, y2 = p.y + sa * hl;

      // Center fade for hero readability
      const dc = Math.hypot(p.x - cx, p.y - cy);
      const cf = Math.min(1, dc / (Math.min(W, H) * 0.15));

      ctx.globalAlpha = baseA * (0.35 + cf * 0.65);
      ctx.strokeStyle = pal[p.ci % pal.length];
      ctx.lineWidth = p.w;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  frame();
}

/**
 * Scroll Typewriter Effect — triggers typing animation when elements
 * scroll into view. Each call creates a fresh observer so it works
 * correctly after language switches.
 */
let _twObserver = null;

function initScrollTypewriter() {
  const elements = document.querySelectorAll('[data-typewrite]');
  if (!elements.length) return;

  if (_twObserver) {
    _twObserver.disconnect();
  }

  _twObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.typewritingDone) {
          typewriteElement(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    if (el.dataset.typewritingDone) {
      el.classList.add('typewriting-ready');
    } else {
      _twObserver.observe(el);
    }
  });
}

function typewriteElement(el) {
  // Make element immediately visible when typewriting starts
  el.classList.add('typewriting-ready');

  // Guard against double-firing
  if (el.dataset.typewritingDone) return;
  el.dataset.typewritingDone = 'true';
  if (_twObserver) _twObserver.unobserve(el);

  // Capture current rendered HTML and extract plain text
  const fullHtml = el.innerHTML;
  const tmp = document.createElement('div');
  tmp.innerHTML = fullHtml;
  const fullText = tmp.textContent || '';

  if (!fullText.trim()) return;

  // --- Phase 1: type character by character ---
  const typingSpan = document.createElement('span');
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';

  el.textContent = '';          // clear visible text
  el.appendChild(typingSpan);   // span for typing
  el.appendChild(cursor);       // blinking cursor

  let i = 0;
  const speed = fullText.length > 80 ? 15 : 25;

  function tick() {
    i++;
    typingSpan.textContent = fullText.slice(0, i);

    if (i < fullText.length) {
      setTimeout(tick, speed);
    } else {
      // --- Phase 2: restore original HTML (with <strong> etc.) ---
      el.innerHTML = fullHtml;
      const endCursor = document.createElement('span');
      endCursor.className = 'typewriter-cursor';
      el.appendChild(endCursor);
      setTimeout(() => {
        if (endCursor.parentNode) endCursor.remove();
      }, 1200);
    }
  }

  tick();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/**
 * Card Scroll Reveal Fade-In Animation Handler
 */
function initCardReveal() {
  const cards = document.querySelectorAll(
    '.project-card, .cv-card, .skill-category, .about-content-card, .about-photo-wrapper, .contact-card, .hero-avatar-card'
  );

  if (!cards.length) return;

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.02, rootMargin: '0px 0px 50px 0px' }
  );

  cards.forEach((card) => {
    card.classList.add('scroll-reveal-card', 'revealed');
    cardObserver.observe(card);
  });
}

/**
 * Smooth Hero Avatar Dissolve & Parallax on Scroll
 */
function initHeroScrollParallax() {
  const heroAvatar = document.querySelector('.hero-atlas-avatar-img');
  const heroLoad = document.querySelector('.hero-supported-load');

  if (!heroAvatar) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.85;

    if (scrollY <= heroHeight) {
      const progress = scrollY / heroHeight;
      const translateY = progress * 140;
      const opacity = Math.max(0, 1 - progress * 1.5);

      heroAvatar.style.transform = `translateY(${translateY}px)`;
      heroAvatar.style.opacity = opacity;

      if (heroLoad) {
        heroLoad.style.transform = `translateY(${progress * -40}px)`;
        heroLoad.style.opacity = opacity;
      }
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroScrollParallax();
});

/**
 * High-Performance Interactive Character Video / Canvas Controller
 * Pre-caches 120 high-fidelity WebP frames extracted from video.mp4 (360° gaze trajectory)
 * Uses physics-based LERP interpolation with velocity clamping for ultra-fluid, natural tracking
 */
function initInteractiveCharacterVideo() {
  const canvas = document.getElementById('hero-character-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  const TOTAL_FRAMES = 120;
  const frames = new Array(TOTAL_FRAMES);

  // High-performance canvas resolution
  canvas.width = 1920;
  canvas.height = 1080;

  let framesLoaded = 0;
  let currentRenderedIndex = -1;

  // LERP and physics tracking state
  let currentU = 0;
  let currentV = 0;
  let targetU = 0;
  let targetV = 0;
  const POINTER_LERP = 0.12;

  // Displayed frame with circular velocity limiting (prevents acceleration / wild spins)
  let displayedFrame = 0.0;
  const MAX_FRAME_SPEED = 1.6; // Max 1.6 frames per 16ms tick (~96 fps rotation pace)

  // Idle and blinking state
  let lastMouseMoveTime = Date.now();
  let isBlinking = false;
  let blinkStartTime = 0;
  let nextBlinkTime = Date.now() + 3500;

  // Helper: Draw frame with zero-flicker nearest-frame fallback
  function drawFrame(idx) {
    if (idx === currentRenderedIndex && !isBlinking) return;

    let img = frames[idx];
    if (!img || !img.complete) {
      // Find closest already-loaded frame to prevent any blank flashes
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = (idx - offset + TOTAL_FRAMES) % TOTAL_FRAMES;
        if (frames[prev] && frames[prev].complete) {
          img = frames[prev];
          break;
        }
        const next = (idx + offset) % TOTAL_FRAMES;
        if (frames[next] && frames[next].complete) {
          img = frames[next];
          break;
        }
      }
    }

    if (img && img.complete) {
      ctx.clearRect(0, 0, 1920, 1080);
      ctx.drawImage(img, 0, 0, 1920, 1080);
      currentRenderedIndex = idx;
    }
  }

  // Preload frame 0 (frame_001.webp) immediately for zero perceived latency
  const firstFrame = new Image();
  firstFrame.src = 'imgs/character_frames/frame_001.webp';
  firstFrame.onload = () => {
    frames[0] = firstFrame;
    framesLoaded++;
    drawFrame(0);

    // Asynchronously preload remaining 119 frames in background
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const padIndex = String(i + 1).padStart(3, '0');
      img.src = `imgs/character_frames/frame_${padIndex}.webp`;
      img.onload = () => {
        frames[i] = img;
        framesLoaded++;
      };
    }
  };

  // State variables for Center (Neutral) vs Orbital tracking
  let inCenterZone = true;
  const R_ENTER_CENTER = 0.20; // Hysteresis inner threshold: enter neutral center
  const R_EXIT_CENTER = 0.28;  // Hysteresis outer threshold: exit to orbital tracking

  // Convert 360-degree angle to perimeter frame along video's circular sweep
  function getPerimeterFrame(deg) {
    if (deg <= 225) {
      // 0° (Right: frame 84) -> 225° (Up-Left: frame 21)
      // Smooth continuous sweep: 84 -> 72 (Down-Right) -> 60 (Down) -> 48 (Down-Left) -> 36 (Left) -> 21 (Up-Left)
      return 84 - (deg / 225) * (84 - 21);
    } else if (deg >= 270) {
      // 270° (Up: frame 108) -> 360° (Right: frame 84)
      // Smooth continuous sweep: 108 (Up) -> 96 (Up-Right) -> 84 (Right)
      return 108 - ((deg - 270) / 90) * (108 - 84);
    } else {
      // 225° to 270° (Up-Left to Up)
      // Bypasses blink frames (12-13) and transitions seamlessly across upper arc
      const t = (deg - 225) / 45;
      if (t < 0.5) {
        return 21 - (t * 2) * (21 - 16);
      } else {
        return 114 - ((t - 0.5) * 2) * (114 - 108);
      }
    }
  }

  // Pointer position update
  function updatePointer(clientX, clientY) {
    lastMouseMoveTime = Date.now();
    const isDesktop = window.innerWidth > 768;
    const faceX = window.innerWidth / 2 + (isDesktop ? Math.min(320, Math.max(160, window.innerWidth * 0.20)) : 0);
    const faceY = window.innerHeight * 0.32;

    targetU = (clientX - faceX) / (window.innerWidth * 0.46);
    targetV = (clientY - faceY) / (window.innerHeight * 0.46);

    // Clamp normalized bounds
    targetU = Math.max(-1.3, Math.min(1.3, targetU));
    targetV = Math.max(-1.3, Math.min(1.3, targetV));
  }

  window.addEventListener('mousemove', (e) => {
    updatePointer(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener('mousemove', (e) => {
    updatePointer(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // When cursor leaves viewport, smoothly return gaze to user
  window.addEventListener('mouseleave', () => {
    targetU = 0;
    targetV = 0;
  });

  // Pause loop when scrolled offscreen for battery/GPU efficiency
  let isVisible = true;
  function handleScrollVisibility() {
    isVisible = window.scrollY < window.innerHeight * 1.1;
  }
  window.addEventListener('scroll', handleScrollVisibility, { passive: true });

  // Main 60 FPS animation render loop with dual-mode decoupled gaze tracking
  function renderLoop() {
    if (isVisible) {
      const now = Date.now();

      // Idle gaze return if no mouse movement for 3.2 seconds
      if (now - lastMouseMoveTime > 3200) {
        targetU += (0 - targetU) * 0.04;
        targetV += (0 - targetV) * 0.04;

        // Periodic natural blink when idle looking at user
        if (!isBlinking && now > nextBlinkTime) {
          const dist = Math.sqrt(currentU * currentU + currentV * currentV);
          if (dist < 0.16) {
            isBlinking = true;
            blinkStartTime = now;
          }
        }
      }

      // Physics LERP on pointer coordinates
      currentU += (targetU - currentU) * POINTER_LERP;
      currentV += (targetV - currentV) * POINTER_LERP;

      const dist = Math.sqrt(currentU * currentU + currentV * currentV);

      // Decoupled Mode Switching with Hysteresis (prevents any boundary flicker)
      if (inCenterZone) {
        if (dist > R_EXIT_CENTER) {
          inCenterZone = false;
        }
      } else {
        if (dist < R_ENTER_CENTER) {
          inCenterZone = true;
        }
      }

      let finalDrawIndex = 0;

      if (inCenterZone) {
        // --- 1. NEUTRAL CENTER MODE ---
        // Character looks directly forward at user (Frame 0).
        // Complete decoupling from atan2: eliminates 100% of the 180° singularity
        // and completely prevents traversing bottom (60) or top (108) frames when crossing horizontally.
        finalDrawIndex = 0;

        // Pre-synchronize displayedFrame to the current radial angle
        // so that when exiting the center zone, motion begins instantly with zero lag or spin
        if (dist > 0.04) {
          let deg = Math.atan2(currentV, currentU) * (180 / Math.PI);
          if (deg < 0) deg += 360;
          displayedFrame = getPerimeterFrame(deg);
        }
      } else {
        // --- 2. ORBITAL PERIMETER MODE ---
        // Away from the center singularity: calculate polar angle safely
        let deg = Math.atan2(currentV, currentU) * (180 / Math.PI);
        if (deg < 0) deg += 360;

        const targetPerim = getPerimeterFrame(deg);

        // Shortest circular difference along the perimeter loop [-60, +60]
        let diff = targetPerim - displayedFrame;
        diff = ((diff + 60.0) % 120.0 + 120.0) % 120.0 - 60.0;

        // Natural velocity limiter along perimeter arc
        const step = Math.sign(diff) * Math.min(Math.abs(diff) * 0.22, MAX_FRAME_SPEED);
        displayedFrame = (displayedFrame + step + 120.0) % 120.0;

        finalDrawIndex = Math.round(displayedFrame) % TOTAL_FRAMES;
      }

      // Gentle natural blink animation (only when facing user in center mode)
      if (isBlinking && inCenterZone) {
        const elapsed = now - blinkStartTime;
        if (elapsed < 60) {
          finalDrawIndex = 12;
        } else if (elapsed < 140) {
          finalDrawIndex = 13;
        } else if (elapsed < 200) {
          finalDrawIndex = 12;
        } else {
          isBlinking = false;
          nextBlinkTime = now + 4000 + Math.random() * 3000;
        }
      }

      drawFrame(finalDrawIndex);
    }

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
}

/**
 * Hero Layout Scroll Toggle
 * Toggles 'hero-mode' class on <body>:
 * - At Hero section: Navbar at BOTTOM, Work Badge at TOP RIGHT
 * - Past Hero section: Navbar at TOP, Work Badge at BOTTOM LEFT
 */
function initHeroLayoutScrollToggle() {
  function checkHeroScroll() {
    const heroThreshold = window.innerHeight * 0.6;
    if (window.scrollY < heroThreshold) {
      document.body.classList.add('hero-mode');
    } else {
      document.body.classList.remove('hero-mode');
    }
  }

  window.addEventListener('scroll', checkHeroScroll, { passive: true });
  checkHeroScroll();
}

