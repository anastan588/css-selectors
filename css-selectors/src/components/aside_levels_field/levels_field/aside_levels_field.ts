import './aside_level_field.scss';
import MainField from '../../main_field/main_field';
import levels from '../../levels_and_tags/levels';

class LevelsFieid extends MainField {
    public levelsTitle: HTMLDivElement;
    public levelsInnerTitleText: HTMLParagraphElement;
    public levelsMainBLock: HTMLDivElement;
    public levelResetButton: HTMLDivElement;

    constructor() {
        super();
        this.levelsTitle = document.createElement('div');
        this.levelsInnerTitleText = document.createElement('p');
        this.levelsMainBLock = document.createElement('div');
        this.levelResetButton = document.createElement('div');
    }

    public makeLevelsField(): void {
        this.levelsTitle.classList.add('levels_title');
        this.levelsInnerTitleText.classList.add('levels_title_text');
        this.levelsInnerTitleText.innerHTML = `Level ${MainField.currentLevel + 1} of ${levels.length}`;
        this.levelsTitle.append(this.levelsInnerTitleText);
        this.levelsMainBLock.classList.add('levels_main_block');
        for (let i = 0; i < levels.length; i += 1) {
            const levelItem = <HTMLDivElement>document.createElement('div');
            levelItem.classList.add('level_item');
            levelItem.setAttribute('id', `${i}`);
            const levelImage = <HTMLImageElement>document.createElement('img');
            levelImage.classList.add('level_image');
            levelImage.src = './assets/icons/undone.png';
            levelItem.append(levelImage);
            const levelName = <HTMLParagraphElement>document.createElement('p');
            levelName.classList.add('level_name');
            levelName.innerHTML = levels[i].nameOfLevel;
            levelItem.append(levelName);
            this.levelsMainBLock.append(levelItem);
        }
        this.levelResetButton.classList.add('levels_reset_button');
        this.levelResetButton.innerHTML = 'Reset progress';
        this.levelsMainBLock.append(this.levelResetButton);
    }
}

export default LevelsFieid;
