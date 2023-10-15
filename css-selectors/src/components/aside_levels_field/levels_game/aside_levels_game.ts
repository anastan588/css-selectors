import LevelsFieid from '../levels_field/aside_levels_field';
import MainField from '../../main_field/main_field';
import levels from '../../levels_and_tags/levels';
import PictureGame from '../../pictures_field/picture_game/picture_game_level';
import HTMLGame from '../../css_and_html_field/html_game/html_game_level';
import HELPGame from '../../help_field/help_game/help_game_level';

class LevelsGame extends LevelsFieid {
    public pictureGame: PictureGame;
    public htmlGame: HTMLGame;
    public helpGame: HELPGame;
    constructor() {
        super();
        this.pictureGame = new PictureGame();
        this.htmlGame = new HTMLGame();
        this.helpGame = new HELPGame();
    }

    public markCurrentLevel(): void {
        const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
        levelsTitlesCollection[MainField.currentLevel].classList.add('level_marked');
    }

    public addListenerToResetProgressButton(): void {
        const resetButton = <HTMLDivElement>document.querySelector('.levels_reset_button');
        resetButton.addEventListener('click', () => {
            MainField.currentLevel = 0;
            this.resetLevelsGameAsideBar();
            this.moveToNextLevel();
        });
    }

    public addListenerToEachLevelItem(): void {
        const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
        levelsTitlesCollection.forEach((element: HTMLElement) => {
            element.addEventListener('click', () => {
                for (let i = 0; i < levelsTitlesCollection.length; i += 1) {
                    levelsTitlesCollection[i].classList.remove('level_marked');
                }
                const choosenLevel = element.getAttribute('id') as string;
                MainField.currentLevel = Number(choosenLevel);
                this.moveToNextLevel();
                this.markCurrentLevel();
                const LevelsMainTitle = <HTMLDivElement>document.querySelector('.levels_title_text');
                LevelsMainTitle.innerHTML = `Level ${MainField.currentLevel + 1} of ${levels.length}`;
            });
        });
    }

    public resetLevelsGameAsideBar(): void {
        const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
        for (let i = 0; i < levelsTitlesCollection.length; i += 1) {
            levelsTitlesCollection[i].classList.remove('level_marked');
            levelsTitlesCollection[i].removeAttribute('done');
            levelsTitlesCollection[i].children[1].innerHTML = levels[i].nameOfLevel;
            const pictureOfMarkedLevel = levelsTitlesCollection[i].children[0] as HTMLImageElement;
            pictureOfMarkedLevel.src = './assets/icons/undone.png';
        }
        levelsTitlesCollection[MainField.currentLevel].classList.add('level_marked');
        levelsTitlesCollection[MainField.currentLevel].classList.add('level_marked');
        const LevelsMainTitle = <HTMLDivElement>document.querySelector('.levels_title_text');
        LevelsMainTitle.innerHTML = `Level ${MainField.currentLevel + 1} of ${levels.length}`;
    }

    public moveToNextLevel(): void {
        const currentPictureContainer = <HTMLDivElement>document.querySelector('.css_pictures___container');
        const currentPictureContainerLength: number = currentPictureContainer.children.length;
        for (let i = currentPictureContainerLength - 1; i >= 0; i -= 1) {
            currentPictureContainer.children[i].remove();
        }
        this.pictureGame.fillPicturesAccordingToLevel();
        this.htmlGame.fillHtmlAccordingToLevel();
        this.helpGame.changehelpIvent = false;
        this.helpGame.changeallowToPushHelpButton = true;
        const input = <HTMLInputElement>document.querySelector('.css_input');
        input.value = '';
        input.style.removeProperty('animation-iteration-count');
    }
}

export default LevelsGame;
