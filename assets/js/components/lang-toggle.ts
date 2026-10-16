type Language = 'es' | 'en';

interface Translations {
    [key: string]: {
        es: string;
        en: string;
    };
}

const dictionary: Translations = {
    heroTag: {
        es: 'Disponible para trabajar',
        en: 'Available for work'
    },
    heroRole: {
        es: 'Técnico en Desarrollo de Software',
        en: 'Software Development Technician'
    },
    heroDesc: {
        es: 'Apasionado por construir soluciones web eficientes, limpias y escalables. Enfocado en aprendizaje continuo y buenas prácticas de código.',
        en: 'Passionate about building efficient, clean, and scalable web solutions. Focused on continuous learning and code best practices.'
    },
    heroCta: {
        es: 'Contáctame',
        en: 'Contact me'
    },
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
        es: 'Trayectoria',
        en: 'Experience'
    },
    statsProjects: {
        es: 'Proyectos creados',
        en: 'Projects created'
    },
    statsCommitment: {
        es: 'Compromiso',
        en: 'Commitment'
    },
    projectsTitle: {
        es: 'Proyectos Destacados',
        en: 'Featured Projects'
    },
    contactTitle: {
        es: 'Envíame un mensaje',
        en: 'Send me a message'
    },
    contactName: {
        es: 'Nombre',
        en: 'Name'
    },
    contactEmail: {
        es: 'Correo',
        en: 'Email'
    },
    contactMessage: {
        es: 'Mensaje',
        en: 'Message'
    },
    contactSubmit: {
        es: 'Enviar Mensaje',
        en: 'Send Message'
    }
};

export class LangToggle {
    private button: HTMLButtonElement | null;
    private currentLang: Language;

    constructor(buttonId: string) {
        this.button = document.getElementById(buttonId) as HTMLButtonElement;
        this.currentLang = (localStorage.getItem('lang') as Language) || 'es';
        this.init();
    }

    private init(): void {
        this.applyLanguage(this.currentLang);

        if (this.button) {
            this.button.addEventListener('click', () => this.toggleLanguage());
        }
    }

    private toggleLanguage(): void {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        this.applyLanguage(this.currentLang);
        localStorage.setItem('lang', this.currentLang);
    }

    private applyLanguage(lang: Language): void {
        document.documentElement.setAttribute('lang', lang);

        if (this.button) {
            const label = this.button.querySelector('.button__label');
            if (label) {
                label.textContent = lang === 'es' ? 'EN' : 'ES';
            }
        }

        // Actualiza textos dinámicos con data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (key && dictionary[key]) {
                el.textContent = dictionary[key][lang];
            }
        });
    }
}