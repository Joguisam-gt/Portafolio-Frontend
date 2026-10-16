export class ThemeToggle {
    private button: HTMLButtonElement | null;
    private currentTheme: 'light' | 'dark';

    constructor(buttonId: string) {
        this.button = document.getElementById(buttonId) as HTMLButtonElement;
        this.currentTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
        this.init();
    }

    private init(): void {
        this.applyTheme(this.currentTheme);

        if (this.button) {
            this.button.addEventListener('click', () => this.toggleTheme());
        }
    }

    private toggleTheme(): void {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    private applyTheme(theme: 'light' | 'dark'): void {
        document.documentElement.setAttribute('data-theme', theme);
    }
}