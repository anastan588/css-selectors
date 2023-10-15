import CSSField from '../css_field/css_field';

class CSSGame extends CSSField {
    constructor() {
        super();
    }

    public makeFocusOnInput(): void {
        const input = <HTMLInputElement>document.querySelector('.css_input');
        input.addEventListener('blur', () => {
            input.focus();
        });
        input.focus();
    }

    public stopBlinking(): void {
        const input = <HTMLInputElement>document.querySelector('.css_input');
        input.addEventListener('input', () => {
            //temporally switch off this function for cross-check
            // const valueInput: string = input.value;
            // if (valueInput.length !== 0) {
            //     input.style.animationIterationCount = '0';
            // } else {
            //     input.style.removeProperty('animation-iteration-count');
            // }
        });
    }
}

export default CSSGame;
