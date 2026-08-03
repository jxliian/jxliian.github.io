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
    heroTitle: "Computer Science & Business Administration",
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
    projectsDesc: "Key projects spanning web platforms, compiler parsers, simulations, testing tools, and OOP game engines.",
    
    // 6 Projects
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
    btnDownload: "Download",

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
    heroTitle: "Ingeniería Informática y Administración de Empresas",
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
    projectsDesc: "Proyectos clave en desarrollo web, análisis léxico/compiladores, simulaciones, herramientas de test y motores OOP.",
    
    // 6 Projects
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
    btnDownload: "Descargar",

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
    
    footerText: "© 2026 Julian Carrión (jxliian)"
  }
};

// Current State variables
let currentLang = localStorage.getItem('portfolio_lang') || 'es';
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initCopyEmail();
  initSmoothScroll();
  initContactForm();
  initMatrixRain();
});

/**
 * Initialize and toggle Theme (Dark / Light)
 */
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButton();

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('portfolio_theme', currentTheme);
      updateThemeButton();
    });
  }
}

function updateThemeButton() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'dark' ? 'Dark' : 'Light';
  }
}

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
 * Background Hacker Matrix Digital Rain Effect
 */
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const chars = '0123456789ABCDEF01010101アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  let drops = Array(columns).fill(1);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(1);
  });

  function draw() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    ctx.fillStyle = theme === 'dark' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = theme === 'dark' ? '#10b981' : '#0f172a';
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 35);
}
