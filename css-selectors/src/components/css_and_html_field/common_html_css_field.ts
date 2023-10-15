import './html_css_field.scss';
import MainField from '../main_field/main_field';
import CSSField from './css_field/css_field';
import HTMLField from './html_field/html_field';

class HTMLCSSField extends MainField {
    public HtmlCssContainer: HTMLDivElement;
    public cssField: CSSField;
    public htmlField: HTMLField;

    constructor() {
        super();
        this.HtmlCssContainer = document.createElement('div');
        this.cssField = new CSSField();
        this.htmlField = new HTMLField();
    }

    public makeHtmlCssConntainer(): void {
        this.HtmlCssContainer.classList.add('htmlCss_container');
        this.cssField.makeCSSField();
        this.HtmlCssContainer.append(this.cssField.cssFieldBlock);
        this.htmlField.makeHTMLField();
        this.HtmlCssContainer.append(this.htmlField.htmlFieldBlock);
    }
}

export default HTMLCSSField;
