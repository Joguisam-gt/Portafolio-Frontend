export class LangToggle {
    private button: HTMLElement | null;
    private currentLang: 'es' | 'en' = 'es';

    private translations: Record<string, { es: string; en: string }> = {
        // Hero Section
        heroTag: {
            es: 'Disponible para trabajar',
            en: 'Available for work'
        },
        heroRole: {
            es: 'Técnico en <span class="highlight">Desarrollo de Software</span>',
            en: '<span class="highlight">Software Development</span> Technician'
        },
        heroDesc: {
            es: 'Tengo 29 años y me apasiona la tecnología, pero sobre todo el impacto que tiene en la gente. Como técnico en desarrollo de software, disfruto tomar problemas complejos y transformarlos en herramientas simples, limpias y agradables de usar. Fuera de las líneas de código, me mueve el aprendizaje constante, la creatividad y la curiosidad.',
            en: 'I am 29 years old and passionate about technology, especially the impact it has on people. As a software development technician, I enjoy turning complex problems into simple, clean, and intuitive tools. Beyond coding, I am driven by continuous learning, creativity, and curiosity.'
        },
        heroCta: {
            es: 'Contáctame',
            en: 'Contact me'
        },

        // Stack Section
        stackTitle: {
            es: 'Stack Tecnológico',
            en: 'Tech Stack'
        },
        stackMastered: {
            es: 'Dominados',
            en: 'Mastered'
        },
        stackLearning: {
            es: 'En aprendizaje',
            en: 'Learning'
        },

        statsTitle: {
            es: 'Trayectoria y Enfoque Técnico',
            en: 'Track Record & Technical Focus'
        },
        statsProjects: {
            es: 'Proyectos creados',
            en: 'Projects created'
        },
        statsArchitecture: {
            es: 'Arquitectura Limpia & SOLID',
            en: 'Clean Architecture & SOLID'
        },
        statsCommitment: {
            es: 'Compromiso de entrega',
            en: 'Delivery commitment'
        },
        langGraphTitle: {
            es: 'Distribución de Código y Dominio de Stack',
            en: 'Code Distribution & Stack Proficiency'
        },

        // Projects Section
        projectsTitle: {
            es: 'Proyectos Destacados',
            en: 'Featured Projects'
        },
        filterAll: {
            es: 'Todos',
            en: 'All'
        },
        filterBackend: {
            es: 'Backend',
            en: 'Backend'
        },
        filterFrontend: {
            es: 'Frontend',
            en: 'Frontend'
        },

        // Proyecto 1
        proj1Title: {
            es: 'Inventario Gamer API',
            en: 'Gamer Inventory API'
        },
        proj1Desc: {
            es: 'Backend para gestión de inventarios construido con arquitectura por capas, validaciones y persistencia en base de datos no relacional.',
            en: 'Inventory management backend built with layered architecture, validations, and non-relational database persistence.'
        },

        // Proyecto 2
        proj2Title: {
            es: 'PROYECTO MONGODB II',
            en: 'MONGODB II PROJECT'
        },
        proj2Desc: {
            es: 'Proyecto enfocado en modelado avanzado de bases de datos no relacionales, agregaciones complejas y manipulación de datos optimizada en MongoDB con JavaScript.',
            en: 'Project focused on advanced non-relational database modeling, complex aggregations, and optimized data manipulation in MongoDB using JavaScript.'
        },

        // Proyecto 3
        proj3Title: {
            es: 'Conciertos',
            en: 'Concerts Web App'
        },
        proj3Desc: {
            es: 'Aplicación web interactiva para gestión y reserva de conciertos y eventos, desarrollada con JavaScript nativo, estructura semántica HTML5 y estilos modernos en CSS3.',
            en: 'Interactive web application for managing and booking concerts and events, developed with native JavaScript, semantic HTML5 structure, and modern CSS3 styling.'
        },

        // Proyecto 4
        proj4Title: {
            es: 'Portafolio CLI',
            en: 'CLI Portfolio'
        },
        proj4Desc: {
            es: 'Portafolio interactivo ejecutado completamente desde la línea de comandos (CLI) compatible con PowerShell, Bash y GitBash del sistema operativo.',
            en: 'Interactive portfolio running entirely from the command line interface (CLI), compatible with system PowerShell, Bash, and GitBash.'
        },

        // Proyecto 5
        proj5Title: {
            es: 'Gestor de autos',
            en: 'Car Management System'
        },
        proj5Desc: {
            es: 'Sistema integral desarrollado en Python puro para la gestión, control y registro de inventario de vehículos.',
            en: 'Comprehensive system developed in pure Python for vehicle inventory management, control, and tracking.'
        },

        // Proyecto 6
        proj6Title: {
            es: 'BLOCKCHAIN REVOLUTION',
            en: 'BLOCKCHAIN REVOLUTION'
        },
        proj6Desc: {
            es: 'Proyecto web desarrollado con HTML5 semántico y CSS3 puro implementando la metodología BEM (Block Element Modifier) para una arquitectura escalable de estilos y layouts limpios.',
            en: 'Web project developed with semantic HTML5 and pure CSS3 implementing the BEM (Block Element Modifier) methodology for clean layouts and scalable style architecture.'
        },

        repoLabel: {
            es: 'Repositorio',
            en: 'Repository'
        },

        // Contact Form
        contactTitle: {
            es: 'Envíame un mensaje',
            en: 'Send me a message'
        },
        contactName: {
            es: 'Nombre',
            en: 'Name'
        },
        contactNamePlaceholder: {
            es: 'Tu nombre',
            en: 'Your name'
        },
        contactEmail: {
            es: 'Correo',
            en: 'Email'
        },
        contactEmailPlaceholder: {
            es: 'tu@email.com',
            en: 'your@email.com'
        },
        contactMessage: {
            es: 'Mensaje',
            en: 'Message'
        },
        contactMessagePlaceholder: {
            es: '¿En qué puedo ayudarte?',
            en: 'How can I help you?'
        },
        contactSubmit: {
            es: 'Enviar Mensaje',
            en: 'Send Message'
        },

        // Footer
        footerText: {
            es: '© 2026 - Desarrollado con HTML, CSS y TypeScript.',
            en: '© 2026 - Developed with HTML, CSS, and TypeScript.'
        }
    };

    constructor(buttonId: string) {
        this.button = document.getElementById(buttonId);
        this.init();
    }

    private init(): void {
        if (!this.button) return;

        this.button.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
            this.updateLanguage();
        });
    }

    private updateLanguage(): void {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (key && this.translations[key]) {
                el.innerHTML = this.translations[key][this.currentLang];
            }
        });

        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && this.translations[key]) {
                el.setAttribute('placeholder', this.translations[key][this.currentLang]);
            }
        });

        if (this.button) {
            const label = this.button.querySelector('.button__label');
            if (label) {
                label.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
            }
        }
    }
}