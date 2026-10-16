export class ProjectFilter {
    private filterButtons: NodeListOf<HTMLButtonElement>;
    private projectCards: NodeListOf<HTMLElement>;

    constructor(filterSelector: string, cardSelector: string) {
        this.filterButtons = document.querySelectorAll(filterSelector);
        this.projectCards = document.querySelectorAll(cardSelector);
        this.init();
    }

    private init(): void {
        this.filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter') || 'all';
                this.setActiveButton(button);
                this.filterProjects(filterValue);
            });
        });
    }

    private setActiveButton(targetButton: HTMLButtonElement): void {
        this.filterButtons.forEach((btn) => btn.classList.remove('filter__button--active'));
        targetButton.classList.add('filter__button--active');
    }

    private filterProjects(category: string): void {
        this.projectCards.forEach((card) => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}