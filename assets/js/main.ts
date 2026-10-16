import '../css/main.css';
import '../css/components/header.css';
import '../css/components/bento.css';
import '../css/components/cards.css';
import '../css/components/form.css';

import { ThemeToggle } from './components/theme-toggle';
import { LangToggle } from './components/lang-toggle';
import { ProjectFilter } from './components/project-filter';
import { BentoAnimation } from './components/bento-anim';

document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle('theme-toggle');
    new LangToggle('lang-toggle');
    new ProjectFilter('.filter__button', '.project-card');
    new BentoAnimation('.card');
});