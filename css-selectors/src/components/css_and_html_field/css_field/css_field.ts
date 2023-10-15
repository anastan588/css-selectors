import './css_field.scss';

class CSSField {
    public cssFieldBlock: HTMLDivElement;
    public cssTitleBlock: HTMLDivElement;
    public cssMainBlock: HTMLDivElement;
    public cssAsideBlock: HTMLDivElement;
    public cssStylesBlock: HTMLDivElement;
    public cssInputFormBlock: HTMLDivElement;
    public cssInformationBlock: HTMLDivElement;
    public cssInput: HTMLInputElement;
    public cssInputButton: HTMLDivElement;
    public cssAsideNumberLength: number;
    public cssCssTitle: HTMLParagraphElement;
    public cssStyleTitle: HTMLParagraphElement;

    constructor(cssAsideNumberLength: number = 17) {
        this.cssFieldBlock = document.createElement('div');
        this.cssTitleBlock = document.createElement('div');
        this.cssCssTitle = document.createElement('p');
        this.cssStyleTitle = document.createElement('p');
        this.cssMainBlock = document.createElement('div');
        this.cssAsideBlock = document.createElement('div');
        this.cssStylesBlock = document.createElement('div');
        this.cssInputFormBlock = document.createElement('div');
        this.cssInformationBlock = document.createElement('div');
        this.cssInput = document.createElement('input');
        this.cssInputButton = document.createElement('div');
        this.cssAsideNumberLength = cssAsideNumberLength;
    }

    public makeCSSField(): void {
        this.cssFieldBlock.classList.add('css_field_block');
        this.cssTitleBlock.classList.add('css_title_block');
        this.cssFieldBlock.append(this.cssTitleBlock);

        this.cssCssTitle.classList.add('css_title');
        this.cssCssTitle.innerHTML = 'CSS Editor';
        this.cssStyleTitle.classList.add('style_title');
        this.cssStyleTitle.innerHTML = 'style.css';
        this.cssTitleBlock.append(this.cssCssTitle);
        this.cssTitleBlock.append(this.cssStyleTitle);

        this.cssMainBlock.classList.add('css_main_block');
        this.cssFieldBlock.append(this.cssMainBlock);

        this.cssAsideBlock.classList.add('css_aside_block');
        this.cssMainBlock.append(this.cssAsideBlock);
        this.cssStylesBlock.classList.add('css_styles_block');
        this.cssMainBlock.append(this.cssStylesBlock);
        this.cssInputFormBlock.classList.add('css_input_block');
        this.cssStylesBlock.append(this.cssInputFormBlock);
        this.cssInformationBlock.classList.add('css_information_block');
        this.cssInformationBlock.innerHTML = ` {<br/>
        /* Styles would go here. */<br/>}`;
        this.cssStylesBlock.append(this.cssInformationBlock);
        this.cssInput.classList.add('css_input');
        this.cssInput.type = 'text';
        this.cssInput.placeholder = 'Type in a CSS selector';
        this.cssInputFormBlock.append(this.cssInput);
        this.cssInputButton.classList.add('css_input_button');
        this.cssInputButton.innerHTML = 'Enter';
        this.cssInputFormBlock.append(this.cssInputButton);
        for (let i = 0; i < this.cssAsideNumberLength; i += 1) {
            const cssAsideNumber = <HTMLDivElement>document.createElement('div');
            cssAsideNumber.classList.add('css_aside_number');
            cssAsideNumber.innerHTML = `${i + 1}`;
            this.cssAsideBlock.append(cssAsideNumber);
        }
    }
}

export default CSSField;
