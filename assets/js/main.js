import { ThemeToggle } from './components/theme-toggle';
import { LangToggle } from './components/lang-toggle';
import { ProjectFilter } from './components/project-filter';
import { BentoAnimation } from './components/bento-anim';

document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de componentes
    new ThemeToggle('theme-toggle');
    new LangToggle('lang-toggle');
    new ProjectFilter('.filter__button', '.project-card');
    new BentoAnimation('.card');
});