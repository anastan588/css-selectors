import './html_field.scss';

class HTMLField {
    public htmlFieldBlock: HTMLDivElement;
    public htmlTitleBlock: HTMLDivElement;
    public htmlMainBlock: HTMLDivElement;
    public htmlAsideBlock: HTMLDivElement;
    public htmlTagBlock: HTMLDivElement;
    public htmlAsideNumberLength: number;
    public htmlHTMLTitle: HTMLParagraphElement;
    public htmlTagTitle: HTMLParagraphElement;

    constructor(htmlAsideNumberLength: number = 17) {
        this.htmlFieldBlock = document.createElement('div');
        this.htmlTitleBlock = document.createElement('div');
        this.htmlHTMLTitle = document.createElement('p');
        this.htmlTagTitle = document.createElement('p');
        this.htmlMainBlock = document.createElement('div');
        this.htmlAsideBlock = document.createElement('div');
        this.htmlTagBlock = document.createElement('div');
        this.htmlAsideNumberLength = htmlAsideNumberLength;
    }

    public makeHTMLField(): void {
        this.htmlFieldBlock.classList.add('html_field_block');
        this.htmlTitleBlock.classList.add('html_title_block');
        this.htmlFieldBlock.append(this.htmlTitleBlock);

        this.htmlHTMLTitle.classList.add('html_title');
        this.htmlHTMLTitle.innerHTML = 'HTML Viewer';
        this.htmlTagTitle.classList.add('tag_title');
        this.htmlTagTitle.innerHTML = 'Tom & Jerry.html';
        this.htmlTitleBlock.append(this.htmlHTMLTitle);
        this.htmlTitleBlock.append(this.htmlTagTitle);

        this.htmlMainBlock.classList.add('html_main_block');
        this.htmlFieldBlock.append(this.htmlMainBlock);

        this.htmlAsideBlock.classList.add('html_aside_block');
        this.htmlMainBlock.append(this.htmlAsideBlock);
        this.htmlTagBlock.classList.add('html_tag_block');
        this.htmlTagBlock.innerHTML = `<div>&ltdiv class="Tom & Jerry"&gt` + `&lt/div&gt</div>`;
        this.htmlMainBlock.append(this.htmlTagBlock);

        for (let i = 0; i < this.htmlAsideNumberLength; i += 1) {
            const htmlAsideNumber = <HTMLDivElement>document.createElement('div');
            htmlAsideNumber.classList.add('aside_number');
            htmlAsideNumber.innerHTML = `${i + 1}`;
            this.htmlAsideBlock.append(htmlAsideNumber);
        }
    }
}

export default HTMLField;
