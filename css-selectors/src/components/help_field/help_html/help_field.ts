import './help_field.scss';
import MainField from '../../main_field/main_field';

class HelpField extends MainField {
    public help: HTMLDivElement;

    constructor() {
        super();
        this.help = document.createElement('div');
    }

    public makeHelpContainer(): void {
        this.help.classList.add('help_container');
        this.help.innerHTML = 'HELP';
    }
}

export default HelpField;
