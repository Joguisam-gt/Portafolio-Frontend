export class BentoAnimation {
    private cards: NodeListOf<HTMLElement>;

    constructor(cardSelector: string) {
        this.cards = document.querySelectorAll(cardSelector);
        this.init();
    }

    private init(): void {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target as HTMLElement;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    obs.unobserve(element);
                }
            });
        }, observerOptions);

        this.cards.forEach((card) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }
}