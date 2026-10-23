/* ========================================================
   i18n & Theme Controller (Clean, No Emojis)
   ======================================================== */

const translations = {
    en: {
        page_title: "jcartov's Homepage",
        theme_dark: "Dark",
        theme_light: "Light",

        // Navigation
        nav_home: "Home",
        nav_news: "News",
        nav_timeline: "Timeline",
        nav_papers: "Papers",
        nav_projects: "Projects",
        nav_collab: "Collaborative",
        nav_opensource: "Open Source",
        nav_skills: "Skills",
        nav_resumes: "Curriculums",
        nav_others: "Others",

        // Profile Sidebar
        profile_job: "Double Degree Student, University of Granada",
        profile_degree: "Computer Science &amp; Business Administration (ADE)",
        profile_loc: "Granada, Spain",
        profile_resume_tech: "Tech Resume",
        profile_resume_casual: "Student CV",
        profile_ack: "<b>Acknowledgements</b> Many thanks to <a href=\"https://chenliu-1996.github.io/\" target=\"_blank\">Chen Liu</a> for kindly providing this website template, which was adapted from <a href=\"https://zhec.github.io/\" target=\"_blank\">Zhe Cao</a>'s website.",

        // Bio Section
        about_lead: "I am a double-degree student in <b>Computer Science and Business Administration (ADE)</b> at the <b><a href=\"https://www.ugr.es/\" target=\"_blank\">University of Granada (UGR)</a></b>. My academic and technical trajectory bridges low-level software engineering, systems programming, and high-performance algorithms with quantitative business modeling and product architecture.",
        about_honors_heading: "Academic Honors &amp; Distinctions",
        about_honors_text: "Awarded university <b>Course Honors (Matrículas de Honor)</b> in Quantitative Techniques (9.8/10) and User Interface Design (9.4/10). High school GPA of 9.9/10 (Honors Distinction) and EBAU score of 13.005/14.000 (Top 1%).",
        about_systems_heading: "Software Engineering &amp; Systems",
        about_systems_text: "Engineering projects across software systems, web platforms, and computational modeling:<br>• <a href=\"https://repasaya.juliancarrion.dev/\" target=\"_blank\"><b>repasaYA</b></a>: Collaborative university knowledge portal with lecture notes, flashcards, and exam modules.<br>• <a href=\"#paper-abm\"><b>ABM Dynamics</b></a>: Agent-based simulation in Python (Mesa) analyzing income inequality and social networks.<br>• <a href=\"#markdown-lex\"><b>LexDown</b></a>: C++ lexical scanner and parser built with Lex/Flex for Markdown compilation.",
        about_lang_heading: "Languages &amp; Certifications",
        about_lang_list: "• <b>Spanish:</b> Native language (C2 proficiency).<br>• <b>English:</b> Advanced operational fluency (<a href=\"cv/julian_carrion_tech_resume.pdf\" target=\"_blank\"><b>C1 Cambridge Certified</b></a>).<br>• <b>French:</b> Basic reading comprehension (understanding basic texts).",

        // News Section
        news_title: "News",
        news_item_1: "[10/2026] Actively seeking Software Engineering Internships for Summer 2027.",

        // Timeline Section
        timeline_exp_heading: "Projects &amp; Engineering Experience",
        timeline_edu_heading: "Education &amp; Credentials",
        timeline_exp1_title: "Systems &amp; Compilers",
        timeline_exp1_role: "Compiler Developer",
        timeline_exp1_date: "Sep 2023 - Mar 2024",
        timeline_exp1_desc: "Constructed Lex/Flex lexical analyzer for Markdown parsing in C++ and Bash.",
        timeline_exp2_title: "repasaYA Platform",
        timeline_exp2_role: "Creator &amp; Frontend Architect",
        timeline_exp2_date: "May 2026",
        timeline_exp2_desc: "Designed and built a collaborative web platform providing university lecture summaries, interactive flashcards, and exam practice modules.",
        timeline_exp3_title: "ABM Dynamics",
        timeline_exp3_role: "Simulation &amp; Data Modeler",
        timeline_exp3_date: "May 2024 - Nov 2024",
        timeline_exp3_desc: "Agent-based computational simulation in Python analyzing income inequality dynamics and interpersonal social network density impact on collective happiness.",
        timeline_edu1_title: "I.E.S. José Martín Recuerda",
        timeline_edu1_role: "High School Diploma (Social Sciences &amp; Math)",
        timeline_edu1_date: "Sep 2020 - Jun 2022",
        timeline_edu1_desc: "GPA: 9.9 / 10 (Awarded Academic Excellence Distinction). Selectividad (EBAU): 13.005 / 14.000.",
        timeline_edu2_title: "Cambridge Assessment English",
        timeline_edu2_role: "C1 Advanced Certification",
        timeline_edu2_date: "Jul 2022",
        timeline_edu2_desc: "Certified operational fluency in professional, technical, and academic English for international environments.",
        timeline_edu3_title: "University of Granada (ETSIIT)",
        timeline_edu3_role: "B.S. in Computer Science",
        timeline_edu3_date: "Sep 2022 - Present",
        timeline_edu3_desc: "Data Structures, Systems Programming, Compilers, Operating Systems, Relational Databases. Course Honors in UI Design (9.4/10).",
        timeline_edu4_title: "University of Granada (Faculty of Economics &amp; Business)",
        timeline_edu4_role: "B.A. in Business Administration (ADE)",
        timeline_edu4_date: "Sep 2022 - Present",
        timeline_edu4_desc: "Financial Management, Business Modeling, Quantitative Methods. Course Honors in Quantitative Techniques (9.8/10).",

        // Papers Section
        papers_title: "Papers &amp; Academic Publications",
        paper_diu_title: "UX Portfolio &amp; Case Study: EcoMercado UGR Digital Usability Resolution",
        paper_diu_desc: "Comprehensive UX research and design systems case study evaluating EcoMercado UGR. Includes heuristic expert evaluation, competitive benchmarking, user personas, journey maps, information architecture, interactive Figma prototypes, and usability testing protocols.",
        paper_diu_role: "<b>Julián Carrión Tovar</b> (UX Researcher &amp; Designer)",
        paper_diu_meta: "User Interface Design (DIU) · ETSIIT, University of Granada · Course Honors (9.4/10)",

        paper_rrhh_title: "Comprehensive Diagnosis of Human Resource Management at CaixaBank",
        paper_rrhh_desc: "Exhaustive academic diagnostic report on human resource architecture at CaixaBank. Analyzes recruitment funnels, talent retention, competency-based appraisal models, incentive frameworks, and labor restructuring across the Spanish financial sector.",
        paper_rrhh_role: "José Ángel Carretero Montes, David Bacas Posadas, <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>, Jesús Rodríguez González, Ismael Sallami Moreno (Group Contribution)",
        paper_rrhh_meta: "Human Resource Management I · Double Degree ADE &amp; CS, UGR · LaTeX",

        paper_abm_title: "Dynamics of Socioeconomic Segregation and Emotional Contagion in Social Networks (ABM Dynamics)",
        paper_abm_desc: "Computational research paper formulating an agent-based simulation (Mesa) to evaluate how income inequality dynamics and social network density impact collective happiness. Calibrated with Spanish CIS survey microdata and spatial neighborhood matrices.",
        paper_abm_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Lead Modeler &amp; Author)",
        paper_abm_meta: "Python · Mesa · NumPy · Econometrics · Computational Social Science",

        paper_org_title: "Strategic Diagnostic Report: Organizational Structure Analysis of CaixaBank",
        paper_org_desc: "Strategic corporate diagnosis examining formal organizational design, contingency parameters, departmental grouping, and decision decentralization within CaixaBank branch offices. Integrates structured managerial interviews and organizational contingency modeling.",
        paper_org_role: "Jose Ángel Carretero Montes, David Bacas Posadas, Jesús Rodríguez González, <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>, Ismael Sallami Moreno (Group Contribution)",
        paper_org_meta: "Business Organization (GIADE) · Faculty of Economics &amp; Business, UGR · LaTeX",

        paper_dsd_title: "Integration of Generative AI in Distributed System Architectures",
        paper_dsd_desc: "Academic survey paper in Springer LLNCS format examining the deployment and horizontal scaling of Generative AI models across distributed clusters. Investigates the memory wall, PagedAttention optimizations, network latency, straggler node penalties (up to 42.5%), and Kubernetes / Ray orchestration.",
        paper_dsd_role: "David Bacas Posadas, <span class=\"author-self\"><b>Julian Carrión Tovar</b></span>, Minerva Cebrián Marín, Miguel Ángel Luque Gómez, Pablo Hernández Ibáñez",
        paper_dsd_meta: "Distributed Systems Design (DSD) · Springer LLNCS · ETSIIT, University of Granada",

        // Projects Section
        projects_title: "Featured Software Projects &amp; Systems",
        proj_repasaya_title: "repasaYA: Collaborative University Knowledge Sharing &amp; Active Recall Platform",
        proj_repasaya_desc: "Architected a collaborative study platform providing structured university lecture notes, interactive flashcards, and exam practice modules for university students. Engineered client-side state handling, dynamic search filtering, and responsive mobile-first interfaces.",
        proj_repasaya_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Creator &amp; Frontend Architect)",

        proj_qarmita_title: "La Qarmita - Cultura y Café: Cultural Experiences &amp; Local Commerce Platform",
        proj_qarmita_desc: "Comprehensive UX Case Study and digital platform connecting specialty coffee consumption with local cultural events and customer loyalty programs. Built user personas, competitive benchmarking, interactive Figma prototypes, and a deployed web interface.",
        proj_qarmita_role: "<span class=\"author-self\"><b>Julian Carrion Tovar</b></span> (UX &amp; Web Developer · DIU2.Errores404)",

        proj_lex_title: "LexDown: Lexical Scanner &amp; Syntax Parser for Markdown-to-HTML Compilation",
        proj_lex_desc: "Constructed a lexical scanner and syntax parser in C++ using Lex/Flex to translate Markdown syntax rules into clean, validated HTML documents. Implemented token recognition, nested block handling, code fence extraction, and lexical error recovery routines.",
        proj_lex_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Systems Programmer)",

        proj_irrgarten_title: "Irrgarten: Multi-Language Object-Oriented Maze Game Engine",
        proj_irrgarten_desc: "Programmed an object-oriented maze game engine implementing inheritance hierarchies, state machines, and OOP design patterns across Java and Ruby, focusing on clean separation of concerns and extensible game mechanics.",
        proj_irrgarten_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Software Architect)",

        // Collaborative Section
        collab_title: "Collaborative Projects",
        proj_casino_title: "Casino Online (Lasaña Team): Fullstack Decoupled Gaming Platform",
        proj_casino_desc: "Fullstack online casino system developed collaboratively using a decoupled headless architecture: Python Django backend with Oracle Database (UGR) managing transactions, user sessions, and game engines (Blackjack, Roulette, Slots), integrated with a React + Vite frontend.",
        proj_casino_role: "<b>Lasaña Team</b> · Collaborative Contribution: <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",

        // Talks, Courses & Interests Section
        cert_title: "Talks, Courses &amp; Interests",
        cert_badge_course: "Online Course",
        cert_badge_workshop: "Workshop",
        cert_badge_ai: "AI Development",
        cert_badge_hacking: "Ethical Hacking",
        cert_badge_hours: "4 Hours",
        cert_badge_hours_6: "6 Hours",
        cert_badge_upcoming: "In Progress",
        cert_hacking_title: "Ethical Hacking Workshop: From 0 to Hacking Applications",
        cert_hacking_desc: "Certificate of attendance for the practical workshop on Ethical Hacking: 'From 0 to Hacking Applications' conducted by BIG school, led by Romuald Fons and Mario Álvarez. Covered offensive cybersecurity fundamentals, web application security, vulnerability identification, and practical penetration testing methodologies.",
        cert_hacking_role: "<b>BIG school</b> · Awarded to: <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",
        cert_hacking_meta: "<b>Issued by Mario Álvarez &amp; Romuald Fons · Duration: 6 Hours · October 23, 2026</b>",
        cert_ia_title: "AI Development Initiation Course: The New Programmer",
        cert_ia_desc: "Certificate of attendance and completion for the AI Development Initiation Course ('El Nuevo Programador'), conducted by Brais Moure and Romuald Fons. Focused on integrating LLMs and generative AI tools into software engineering workflows, AI code assistants, and modern programming practices.",
        cert_ia_role: "<b>mouredev &amp; BIG school</b> · Awarded to: <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",
        cert_ia_meta: "<b>Issued by Brais Moure &amp; Romuald Fons · Duration: 4 Hours · October 2, 2026</b>",
        cert_upcoming_title: "Continuous Learning &amp; Technical Interests",
        cert_upcoming_desc: "Continuously exploring advanced concepts in Cloud Architecture, Distributed Systems, and Cybersecurity. New workshops, talks, and practical self-learning milestones will be documented here as I continue expanding my technical toolkit.",
        cert_upcoming_role: "<b>Continuous Learning &amp; Exploration</b> · <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",
        cert_upcoming_meta: "<b>In Progress · Continuous Learning</b>",

        // Open Source Section
        opensource_title: "Open Source Contributions",
        opensource_subtitle: "Coming soon, currently working on it...",
        opensource_desc: "Actively working on contributions to open-source developer tooling, system utilities, and community projects. Watch this space!",

        // Skills Section
        skills_title: "Technical Skills &amp; Competencies",
        skills_grp_prog: "Programming Languages",
        skills_grp_mobile: "Mobile &amp; Web Engineering",
        skills_grp_sys: "Systems &amp; Developer Tools",
        skills_grp_quant: "Quantitative &amp; Business Competencies",

        // Resumes Section
        resumes_title: "Curriculums &amp; Documents",
        resume_tech_title: "Tech Software Engineering Resume",
        resume_tech_desc: "Technical software engineering resume in English, focused on mobile architecture, systems programming, and product engineering.",
        resume_casual_title: "Academic &amp; Student Resume",
        resume_casual_desc: "Academic &amp; student curriculum in Spanish, detailing Double Degree coursework, course honors, and achievements.",
        btn_view_pdf: "View PDF",
        btn_download_pdf: "Download",

        // Others Section
        others_title: "Others &amp; Personal Notes",
        others_avail_label: "Professional Availability",
        others_avail_text: "Immediate availability for software engineering internships, part-time technical roles, and business-technology strategy projects.",
        others_lang_label: "Languages",
        others_lang_text: "Native Spanish (C2), Certified Advanced English (C1 Cambridge English Assessment), and French (understanding basic texts).",
        others_fact1_label: "Fun fact 1",
        others_fact1_text: "Passionate about resistance training, biomechanics, and sports performance.",
        others_fact2_label: "Fun fact 2",
        others_fact2_text: "I love traveling, exploring new cultures, and dream of traveling across Asia someday (especially Japan)."
    },
    es: {
        page_title: "jcartov's Homepage",
        theme_dark: "Oscuro",
        theme_light: "Claro",

        // Navigation
        nav_home: "Inicio",
        nav_news: "Noticias",
        nav_timeline: "Cronología",
        nav_papers: "Papers",
        nav_projects: "Proyectos",
        nav_collab: "Colaborativos",
        nav_opensource: "Código Abierto",
        nav_skills: "Habilidades",
        nav_resumes: "Currículums",
        nav_others: "Otros",

        // Profile Sidebar
        profile_job: "Estudiante de Doble Grado, Universidad de Granada",
        profile_degree: "Ingeniería Informática y Administración de Empresas (ADE)",
        profile_loc: "Granada, España",
        profile_resume_tech: "CV Tecnológico",
        profile_resume_casual: "CV Académico",
        profile_ack: "<b>Agradecimientos</b> Muchas gracias a <a href=\"https://chenliu-1996.github.io/\" target=\"_blank\">Chen Liu</a> por facilitar amablemente esta plantilla web, adaptada del sitio de <a href=\"https://zhec.github.io/\" target=\"_blank\">Zhe Cao</a>.",

        // Bio Section
        about_lead: "Soy estudiante del doble grado en <b>Ingeniería Informática y Administración y Dirección de Empresas (ADE)</b> en la <b><a href=\"https://www.ugr.es/\" target=\"_blank\">Universidad de Granada (UGR)</a></b>. Mi trayectoria académica y técnica une la ingeniería de software de bajo nivel, la programación de sistemas y los algoritmos de alto rendimiento con el modelado cuantitativo empresarial y el diseño de producto.",
        about_honors_heading: "Honores Académicos y Distinciones",
        about_honors_text: "<b>Matrículas de Honor</b> universitarias en Técnicas Cuantitativas (9,8/10) y Diseño de Interfaces de Usuario (9,4/10). Bachillerato con 9,9/10 (Matrícula de Honor) y nota EBAU de 13,005/14,000 (Top 1% de Andalucía).",
        about_systems_heading: "Ingeniería de Software y Sistemas",
        about_systems_text: "Proyectos de ingeniería de software, plataformas web y modelado computacional:<br>• <a href=\"https://repasaya.juliancarrion.dev/\" target=\"_blank\"><b>repasaYA</b></a>: Portal colaborativo de estudio universitario con apuntes, flashcards y exámenes interactivos.<br>• <a href=\"#paper-abm\"><b>ABM Dynamics</b></a>: Simulación computacional en Python (Mesa) sobre desigualdad económica y redes sociales.<br>• <a href=\"#markdown-lex\"><b>LexDown</b></a>: Escáner léxico y parser en C++ con Lex/Flex para compilación de Markdown a HTML.",
        about_lang_heading: "Idiomas y Certificaciones",
        about_lang_list: "• <b>Español:</b> Lengua materna (competencia C2).<br>• <b>Inglés:</b> Dominio operativo fluido (<a href=\"cv/julian_carrion_tech_resume.pdf\" target=\"_blank\"><b>Certificación C1 Cambridge</b></a>).<br>• <b>Francés:</b> Comprensión de textos básicos.",

        // News Section
        news_title: "Noticias",
        news_item_1: "[10/2026] En búsqueda activa de prácticas de ingeniería de software para el verano de 2027.",

        // Timeline Section
        timeline_exp_heading: "Experiencia y Proyectos de Ingeniería",
        timeline_edu_heading: "Formación Académica y Acreditaciones",
        timeline_exp1_title: "Sistemas y Compiladores",
        timeline_exp1_role: "Desarrollador de Compiladores",
        timeline_exp1_date: "Sep 2023 - Mar 2024",
        timeline_exp1_desc: "Desarrollo de escáner léxico en Lex/Flex para Markdown en C++ y Bash.",
        timeline_exp2_title: "Plataforma repasaYA",
        timeline_exp2_role: "Creador y Arquitecto Frontend",
        timeline_exp2_date: "Mayo 2026",
        timeline_exp2_desc: "Diseño y arquitectura de plataforma web de apuntes universitarios colaborativos, flashcards interactivas y preparación de exámenes.",
        timeline_exp3_title: "Simulación ABM",
        timeline_exp3_role: "Modelador de Simulación y Datos",
        timeline_exp3_date: "Mayo 2024 - Nov 2024",
        timeline_exp3_desc: "Simulación computacional basada en agentes en Python analizando la desigualdad de ingresos y la densidad de redes sociales en la felicidad colectiva.",
        timeline_edu1_title: "I.E.S. José Martín Recuerda",
        timeline_edu1_role: "Bachillerato de Ciencias Sociales y Matemáticas",
        timeline_edu1_date: "Sep 2020 - Jun 2022",
        timeline_edu1_desc: "Nota Media: 9,9 / 10 (Premio Extraordinario / Matrícula de Honor). Selectividad (EBAU): 13,005 / 14,000.",
        timeline_edu2_title: "Cambridge Assessment English",
        timeline_edu2_role: "Certificación C1 Advanced",
        timeline_edu2_date: "Julio 2022",
        timeline_edu2_desc: "Certificación oficial de dominio operativo fluido en entornos profesionales, técnicos y académicos internacionales.",
        timeline_edu3_title: "Universidad de Granada (ETSIIT)",
        timeline_edu3_role: "Grado en Ingeniería Informática",
        timeline_edu3_date: "Sep 2022 - Actualidad",
        timeline_edu3_desc: "Estructuras de Datos, Programación de Sistemas, Compiladores, Sistemas Operativos, Bases de Datos. Matrícula de Honor en Diseño de Interfaces (9.4/10).",
        timeline_edu4_title: "Universidad de Granada (Facultad de CC. Económicas)",
        timeline_edu4_role: "Grado en Administración y Dirección de Empresas (ADE)",
        timeline_edu4_date: "Sep 2022 - Actualidad",
        timeline_edu4_desc: "Dirección Financiera, Modelado Estratégico, Técnicas Cuantitativas. Matrícula de Honor en Técnicas Cuantitativas (9.8/10).",

        // Papers Section
        papers_title: "Papers y Publicaciones Académicas",
        paper_diu_title: "Portfolio UX y Supuesto Práctico: Caso de Estudio EcoMercado UGR",
        paper_diu_desc: "Investigación exhaustiva de UX y sistema de diseño evaluando EcoMercado UGR. Incluye evaluación heurística de expertos, benchmarking competitivo, user personas, mapas de experiencia, arquitectura de información, prototipos interactivos en Figma y pruebas de usabilidad.",
        paper_diu_role: "<b>Julián Carrión Tovar</b> (Investigador UX y Diseñador)",
        paper_diu_meta: "Diseño de Interfaces de Usuario (DIU) · ETSIIT, Universidad de Granada · Matrícula de Honor (9.4/10)",

        paper_rrhh_title: "Análisis Integral de la Gestión de Recursos Humanos en CaixaBank (Portafolio Final)",
        paper_rrhh_desc: "Informe diagnóstico académico sobre la gestión de recursos humanos en CaixaBank. Analiza procesos de selección, retención de talento, evaluación por competencias, políticas retributivas y reestructuración laboral en el sector financiero.",
        paper_rrhh_role: "José Ángel Carretero Montes, David Bacas Posadas, <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>, Jesús Rodríguez González, Ismael Sallami Moreno (Contribución grupal)",
        paper_rrhh_meta: "Dirección de Recursos Humanos I · Doble Grado ADE-Ingenierías, UGR · LaTeX",

        paper_abm_title: "Dinámicas de Segregación Socioeconómica y Contagio Emocional en Redes Sociales (ABM Dynamics)",
        paper_abm_desc: "Investigación computacional mediante simulación basada en agentes (Mesa) que evalúa el impacto de la desigualdad económica y la estructura de redes sociales en la felicidad colectiva. Calibrado con microdatos del CIS y matrices espaciales.",
        paper_abm_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Modelador Principal y Autor)",
        paper_abm_meta: "Python · Mesa · NumPy · Econometría · Ciencias Sociales Computacionales",

        paper_org_title: "Informe-Diagnóstico: Análisis de la Estructura Organizativa de CaixaBank",
        paper_org_desc: "Diagnóstico estratégico sobre el diseño organizativo formal, factores de contingencia, departamentalización y descentralización en oficinas de CaixaBank. Integra entrevistas a directivos y modelado de contingencia organizativa.",
        paper_org_role: "Jose Ángel Carretero Montes, David Bacas Posadas, Jesús Rodríguez González, <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>, Ismael Sallami Moreno (Contribución grupal)",
        paper_org_meta: "Organización de Empresas (GIADE) · Facultad de CC. Económicas, UGR · LaTeX",

        paper_dsd_title: "Integración de la IA Generativa en Sistemas Distribuidos",
        paper_dsd_desc: "Artículo académico en formato Springer LLNCS que analiza el despliegue y escalado horizontal de modelos de IA Generativa en clústeres distribuidos. Examina el muro de la memoria, vLLM/PagedAttention, latencia de red, impacto de nodos lentos y orquestación con Kubernetes y Ray.",
        paper_dsd_role: "David Bacas Posadas, <span class=\"author-self\"><b>Julian Carrión Tovar</b></span>, Minerva Cebrián Marín, Miguel Ángel Luque Gómez, Pablo Hernández Ibáñez",
        paper_dsd_meta: "Diseño de Sistemas Distribuidos (DSD) · Springer LLNCS · ETSIIT, Universidad de Granada",

        // Projects Section
        projects_title: "Proyectos de Software y Sistemas Destacados",
        proj_repasaya_title: "repasaYA: Plataforma Web Colaborativa de Apuntes y Recuerdo Activo Universitario",
        proj_repasaya_desc: "Arquitectura de plataforma web colaborativa para estudiantes universitarios con apuntes estructurados, flashcards interactivas y preparación de exámenes. Gestión de estado en cliente, filtrado dinámico y diseño responsive mobile-first enfocado a la máxima productividad.",
        proj_repasaya_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Creador y Arquitecto Frontend)",

        proj_qarmita_title: "La Qarmita - Cultura y Café: Experiencias Culturales y Fidelización Digital",
        proj_qarmita_desc: "Case Study de UX y plataforma digital conectando el consumo de café de especialidad con experiencias culturales locales y fidelización de clientes. Personas de usuario, benchmarking, prototipos interactivos en Figma y web en producción.",
        proj_qarmita_role: "<span class=\"author-self\"><b>Julian Carrion Tovar</b></span> (Desarrollador UX y Web · DIU2.Errores404)",

        proj_lex_title: "LexDown: Escáner Léxico y Compilador Sintáctico para Transformación Markdown a HTML",
        proj_lex_desc: "Construcción de un escáner léxico y traductor en C++ usando Lex/Flex para procesar sintaxis Markdown y generar código HTML validado. Reconocimiento de tokens, bloques anidados, bloques de código multilinea y recuperación léxica de errores.",
        proj_lex_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Programador de Sistemas)",

        proj_irrgarten_title: "Irrgarten: Motor de Juego de Laberinto Orientado a Objetos Multilenguaje",
        proj_irrgarten_desc: "Motor de juego de laberinto orientado a objetos implementando jerarquías de herencia, máquinas de estados y patrones de diseño en Java y Ruby, priorizando la modularidad y extensibilidad.",
        proj_irrgarten_role: "<span class=\"author-self\"><b>Julián Carrión Tovar</b></span> (Arquitecto de Software)",

        // Collaborative Section
        collab_title: "Proyectos Colaborativos",
        proj_casino_title: "Casino Online (Lasaña Team): Plataforma de Juego Desacoplada Fullstack",
        proj_casino_desc: "Sistema de casino online desarrollado colaborativamente con arquitectura desacoplada: backend en Python Django con base de datos Oracle (UGR) para transacciones seguras, sesiones y motores de juegos (Blackjack, Ruleta, Slots), conectado a un frontend moderno en React + Vite.",
        proj_casino_role: "<b>Lasaña Team</b> · Contribución al proyecto: <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",

        // Talks, Courses & Interests Section
        cert_title: "Charlas, Cursos e Intereses",
        cert_badge_course: "Curso Online",
        cert_badge_workshop: "Taller / Jornada",
        cert_badge_ai: "Desarrollo con IA",
        cert_badge_hacking: "Hacking Ético",
        cert_badge_hours: "4 Horas",
        cert_badge_hours_6: "6 Horas",
        cert_badge_upcoming: "En Preparación",
        cert_hacking_title: "Jornadas de Hacking Ético: De 0 a Hackear Aplicaciones",
        cert_hacking_desc: "Certificado de asistencia a las jornadas sobre Hacking Ético: de 0 a Hackear Aplicaciones, impartido por BIG school y liderado por Romuald Fons y Mario Álvarez. Formación práctica enfocada en fundamentos de ciberseguridad ofensiva, seguridad y análisis de vulnerabilidades en aplicaciones web y técnicas de hacking ético.",
        cert_hacking_role: "<b>BIG school</b> · Otorgado a: <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",
        cert_hacking_meta: "<b>Expedido por Mario Álvarez y Romuald Fons · Duración: 6 Horas · 23 de Octubre de 2026</b>",
        cert_ia_title: "Curso de Iniciación al Desarrollo con IA: El Nuevo Programador",
        cert_ia_desc: "Certificado de asistencia y aprovechamiento del Curso de Desarrollo con IA Gratis ('El Nuevo Programador'), impartido por Brais Moure y Romuald Fons. Formación enfocada en la integración de modelos de lenguaje (LLMs) en los flujos de trabajo de ingeniería de software, asistentes de programación y metodologías de desarrollo con IA.",
        cert_ia_role: "<b>mouredev y BIG school</b> · Otorgado a: <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",
        cert_ia_meta: "<b>Expedido por Brais Moure y Romuald Fons · Duración: 4 Horas · 2 de Octubre de 2026</b>",
        cert_upcoming_title: "Formación Continua e Intereses Técnicos",
        cert_upcoming_desc: "Profundizando de forma continua en Arquitectura Cloud, Sistemas Distribuidos y Ciberseguridad. Nuevos cursos, charlas técnicas y talleres prácticos se irán incorporando aquí a medida que continúe ampliando conocimientos.",
        cert_upcoming_role: "<b>Aprendizaje Continuo y Exploración</b> · <span class=\"author-self\"><b>Julián Carrión Tovar</b></span>",
        cert_upcoming_meta: "<b>En preparación · Aprendizaje Continuo</b>",

        // Open Source Section
        opensource_title: "Contribuciones de Código Abierto",
        opensource_subtitle: "Próximamente, trabajando en ello...",
        opensource_desc: "Preparando activamente contribuciones a herramientas para desarrolladores, librerías de sistemas y proyectos de la comunidad de código abierto. ¡Muy pronto!",

        // Skills Section
        skills_title: "Habilidades Técnicas y Competencias",
        skills_grp_prog: "Lenguajes de Programación",
        skills_grp_mobile: "Ingeniería Móvil y Web",
        skills_grp_sys: "Sistemas y Herramientas de Desarrollo",
        skills_grp_quant: "Competencias Cuantitativas y de Empresa",

        // Resumes Section
        resumes_title: "Currículums y Documentación",
        resume_tech_title: "Currículum Técnico en Ingeniería de Software",
        resume_tech_desc: "Currículum técnico en inglés enfocado a arquitectura móvil, programación de sistemas y desarrollo de software.",
        resume_casual_title: "Currículum Académico / Estudiante",
        resume_casual_desc: "Currículum académico en español detallando mi formación en el Doble Grado en Informática y ADE, honores y trayectoria.",
        btn_view_pdf: "Ver PDF",
        btn_download_pdf: "Descargar",

        // Others Section
        others_title: "Otros Datos y Notas Personales",
        others_avail_label: "Disponibilidad Profesional",
        others_avail_text: "Disponibilidad inmediata para prácticas de ingeniería de software, puestos técnicos a tiempo parcial y proyectos estratégicos de tecnología y empresa.",
        others_lang_label: "Idiomas",
        others_lang_text: "Español nativo (C2), Inglés avanzado certificado (C1 Cambridge English Assessment) y Francés (comprensión de textos básicos).",
        others_fact1_label: "Dato curioso 1",
        others_fact1_text: "Me apasiona el entrenamiento de fuerza, la biomecánica y el rendimiento deportivo.",
        others_fact2_label: "Dato curioso 2",
        others_fact2_text: "Me encanta viajar, descubrir nuevas culturas y tengo el sueño de viajar por Asia algún día (especialmente Japón)."
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';
let currentTheme = localStorage.getItem('portfolio_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Document title
    if (translations[lang] && translations[lang].page_title) {
        document.title = translations[lang].page_title;
    }

    // Update active class on buttons (NO EMOJIS)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isMatch = btn.dataset.lang === lang;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    // Update all text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    updateThemeButtonDisplays();
    window.dispatchEvent(new Event('resize'));
}

function updateThemeButtonDisplays() {
    const isDark = currentTheme === 'dark';
    const isEs = currentLang === 'es';

    const iconClass = isDark ? 'fa fa-sun-o theme-icon' : 'fa fa-moon-o theme-icon';
    const textContent = isDark
        ? (isEs ? 'Claro' : 'Light')
        : (isEs ? 'Oscuro' : 'Dark');
    const titleContent = isDark
        ? (isEs ? 'Cambiar a modo claro' : 'Switch to light mode')
        : (isEs ? 'Cambiar a modo oscuro' : 'Switch to dark mode');

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        const icon = btn.querySelector('.theme-icon');
        if (icon) icon.className = iconClass;
        const text = btn.querySelector('.theme-text');
        if (text) text.textContent = textContent;
        btn.setAttribute('title', titleContent);
        btn.setAttribute('aria-label', titleContent);
    });
}

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    updateThemeButtonDisplays();
}

function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    document.addEventListener('click', (e) => {
        const langBtn = e.target.closest('.lang-btn');
        if (langBtn) {
            e.preventDefault();
            const lang = langBtn.dataset.lang;
            if (lang && lang !== currentLang) {
                applyLanguage(lang);
            }
            return;
        }

        const themeBtn = e.target.closest('.theme-toggle-btn');
        if (themeBtn) {
            e.preventDefault();
            toggleTheme();
            return;
        }
    });
});

// Preloader Progress Bar Logic
window.addEventListener('load', () => {
    const fill = document.getElementById('preloaderBarFill');
    const preloader = document.getElementById('preloader');
    if (fill) {
        fill.style.width = '100%';
    }
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
            }, 500);
        }, 350);
    }
});
