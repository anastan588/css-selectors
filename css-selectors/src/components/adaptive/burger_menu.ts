import './burger.scss';
import MainField from '../main_field/main_field';

class Burger extends MainField {
    public burger: HTMLDivElement;
    public overlay: HTMLDivElement;
    constructor() {
        super();
        this.burger = document.createElement('div');
        this.overlay = document.createElement('div');
    }

    public makeBurger(): void {
        this.burger.classList.add('burger');
        for (let i = 0; i < 3; i += 1) {
            const burgerItem = <HTMLDivElement>document.createElement('div');
            burgerItem.classList.add('burger_item');
            this.burger.append(burgerItem);
        }
        const header = <HTMLElement>document.querySelector('.header');
        header.append(this.burger);
        this.overlay.classList.add('overlay');
        const mainContainer = <HTMLElement>document.querySelector('.main_container');
        mainContainer.prepend(this.overlay);
    }

    public addListenerToOverLay(): void {
        const overlay = <HTMLDivElement>document.querySelector('.overlay');
        overlay.addEventListener('click', this.openOrCloseBurger);
    }
    public addListenerToBurger(): void {
        const burgerImage = <HTMLDivElement>document.querySelector('.burger');
        burgerImage.addEventListener('click', () => this.openOrCloseBurger());
    }

    public addListenerMenuItems(): void {
        const menuItem = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
        menuItem.forEach((element: Node): void =>
            element.addEventListener('click', (event: Event): void => {
                event.preventDefault();
                this.openOrCloseBurger();
            })
        );
        const buttonReset = <HTMLDivElement>document.querySelector('.levels_reset_button');
        buttonReset.addEventListener('click', (event: Event) => {
            event.preventDefault();
            this.openOrCloseBurger();
        });
    }

    public openOrCloseBurger(): void {
        const menu = <HTMLDivElement>document.querySelector('.levels');
        const body = <HTMLBodyElement>document.querySelector('body');
        const overlay = <HTMLDivElement>document.querySelector('.overlay');
        const burgerImage = <HTMLDivElement>document.querySelector('.burger');
        const styleOfOverlay = <CSSStyleDeclaration>getComputedStyle(overlay);
        if (!menu.classList.contains('burger_open') && window.innerWidth <= 1100 && styleOfOverlay.display === 'none') {
            overlay.style.display = 'block';
            menu.classList.toggle('burger_open');
            burgerImage.style.transform = 'rotate(90deg)';
            body.style.overflow = 'hidden';
        } else {
            menu.classList.toggle('burger_open');
            overlay.style.display = 'none';
            burgerImage.style.transform = 'rotate(0deg)';
            body.style.overflow = 'auto';
        }
    }
}

export default Burger;
