import './pictures_field.scss';
import MainField from '../../main_field/main_field';

class PictureField extends MainField {
    public pictureFieldContainer: HTMLDivElement;
    public cssPicturesContainer: HTMLDivElement;
    public cssTableContainer: HTMLDivElement;
    public pictureImageCat: HTMLImageElement;
    public pictureTitle: HTMLDivElement;

    constructor() {
        super();
        this.pictureFieldContainer = document.createElement('div');
        this.cssPicturesContainer = document.createElement('div');
        this.cssTableContainer = document.createElement('div');
        this.pictureImageCat = document.createElement('img');
        this.pictureTitle = document.createElement('div');
    }
    public makepictureField(): void {
        this.pictureFieldContainer.classList.add('picture_container_main');
        this.cssPicturesContainer.classList.add('css_pictures___container');
        this.cssTableContainer.classList.add('css_table____container');
        this.pictureTitle.classList.add('picture_title');

        this.pictureFieldContainer.prepend(this.pictureTitle);
        this.pictureFieldContainer.append(this.cssPicturesContainer);
        this.pictureFieldContainer.append(this.cssTableContainer);
    }
}

export default PictureField;
