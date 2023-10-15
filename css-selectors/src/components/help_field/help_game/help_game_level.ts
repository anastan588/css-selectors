import HelpField from '../help_html/help_field';
import levels from '../../levels_and_tags/levels';
import MainField from '../../main_field/main_field';

class HELPGame extends HelpField {
    public countOfInserts: number;
    static helpIvent: boolean;
    static allowToPushHelpButton: boolean;
    constructor(countOfInserts: number = 0) {
        super();
        this.countOfInserts = countOfInserts;
        HELPGame.helpIvent = false;
        HELPGame.allowToPushHelpButton = true;
    }

    public addListenerToHelpButton(): void {
        const helpButton = <HTMLDivElement>document.querySelector('.help_container');
        helpButton.addEventListener('click', () => {
            if (HELPGame.allowToPushHelpButton === true) {
                this.insertRightAnswerToCSSInput();
                HELPGame.helpIvent = true;
                HELPGame.allowToPushHelpButton = false;
            }
        });
    }

    public insertRightAnswerToCSSInput(): void {
        const CSSInput = <HTMLInputElement>document.querySelector('.css_input');
        const textForInput = levels[MainField.currentLevel].rightAnswer;
        const textForInputArray: string[] = textForInput.split('');
        //temporally switch off this function for cross-check
        // CSSInput.style.animationIterationCount = '0';
        this.typeAnswerToInput(textForInputArray, CSSInput);
    }

    public typeAnswerToInput(textForInputArray: string[], CSSInput: HTMLInputElement): void {
        const interval: NodeJS.Timeout = setTimeout(() => {
            CSSInput.value += textForInputArray[this.countOfInserts];
            this.countOfInserts += 1;
            if (this.countOfInserts >= textForInputArray.length) {
                this.countOfInserts = 0;
                clearTimeout(interval);
                const changeEvent: Event = new Event('change');
                CSSInput.dispatchEvent(changeEvent);
                return;
            }
            this.typeAnswerToInput(textForInputArray, CSSInput);
        }, 200);
    }

    public set changehelpIvent(value: boolean) {
        HELPGame.helpIvent = value;
    }
    public set changeallowToPushHelpButton(value: boolean) {
        HELPGame.allowToPushHelpButton = value;
    }
}

export default HELPGame;
