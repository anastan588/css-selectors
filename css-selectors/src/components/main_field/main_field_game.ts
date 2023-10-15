import MainField from './main_field';
import PictureGame from '../pictures_field/picture_game/picture_game_level';
import HTMLGame from '../css_and_html_field/html_game/html_game_level';
import HELPGame from '../help_field/help_game/help_game_level';
import LevelsGame from '../aside_levels_field/levels_game/aside_levels_game';
import { TSavesGame } from '../../types';
import levels from '../levels_and_tags/levels';

class MainGame extends MainField {
    public pictureGame: PictureGame;
    public htmlGame: HTMLGame;
    public helpGame: HELPGame;
    public levelsGame: LevelsGame;
    public currentLevelFromSave: number;
    public doneLevelsFromSave: string[];
    public levelsWithHelpFromSave: string[];

    constructor(
        currentLevelFromSave: number = 0,
        doneLevelsFromSave: string[] = [],
        levelsWithHelpFromSave: string[] = []
    ) {
        super();
        this.pictureGame = new PictureGame();
        this.htmlGame = new HTMLGame();
        this.helpGame = new HELPGame();
        this.levelsGame = new LevelsGame();
        this.currentLevelFromSave = currentLevelFromSave;
        this.doneLevelsFromSave = doneLevelsFromSave;
        this.levelsWithHelpFromSave = levelsWithHelpFromSave;
    }

    public addListenerToNumberOfLevel(): void {
        const helpingElementForChangeLevel = <HTMLInputElement>document.querySelector('.current_level');
        helpingElementForChangeLevel.addEventListener('change', () => {
            this.levelsGame.moveToNextLevel();
        });
    }

    public addLisnenerToWindowWinButtons(): void {
        const YesButton = <HTMLDivElement>document.querySelector('.window_win_ok');

        if (YesButton.getAttribute('listener') !== 'true') {
            YesButton.setAttribute('listener', 'true');
            YesButton.addEventListener('click', () => {
                this.closeWinWindow();
                MainField.currentLevel = 0;
                this.levelsGame.moveToNextLevel();
                this.levelsGame.resetLevelsGameAsideBar();
            });
        }

        const NoButton = <HTMLDivElement>document.querySelector('.window_win_no');
        if (NoButton.getAttribute('listener') !== 'true') {
            NoButton.setAttribute('listener', 'true');
            NoButton.addEventListener('click', () => {
                this.closeWinWindow();
                this.finishGame();
            });
        }
    }

    public closeWinWindow(): void {
        const winWindow = <HTMLDivElement>document.querySelector('.window_win');
        winWindow.remove();
    }

    public finishGame(): void {
        const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
        for (let i = 0; i < levelsTitlesCollection.length; i += 1) {
            levelsTitlesCollection[i].classList.remove('level_marked');
        }
    }

    public addListerOfBeforeUnload(): void {
        window.addEventListener('beforeunload', this.saveGame);
    }

    public saveGame(): void {
        const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
        const arrayOfDoneLevels: string[] = [];
        const arrayOfLevelsWithHelp: string[] = [];
        for (let i = 0; i < levelsTitlesCollection.length; i += 1) {
            if (levelsTitlesCollection[i].getAttribute('done')) {
                const doneAttribute: string = levelsTitlesCollection[i].getAttribute('done') as string;
                arrayOfDoneLevels.push(doneAttribute);
            } else {
                arrayOfDoneLevels.push('false');
            }
            if (levelsTitlesCollection[i].children[1].innerHTML.includes('HELP')) {
                arrayOfLevelsWithHelp.push('true');
            } else {
                arrayOfLevelsWithHelp.push('false');
            }
        }
        const gameForSaveIfUserCloseOrReloadWindow: TSavesGame = {
            level: MainField.currentLevel,
            doneLevels: arrayOfDoneLevels,
            levelsWithHelp: arrayOfLevelsWithHelp,
        };
        const gameToLOcalstorage = JSON.stringify(gameForSaveIfUserCloseOrReloadWindow);
        localStorage.setItem('savedResultsGame', gameToLOcalstorage);
    }

    public loadSavedGame(): void {
        const gameToParse: string = localStorage.getItem('savedResultsGame') as string;
        const gameFromsave: TSavesGame = JSON.parse(gameToParse);
        this.currentLevelFromSave = gameFromsave.level;
        this.doneLevelsFromSave = gameFromsave.doneLevels;
        this.levelsWithHelpFromSave = gameFromsave.levelsWithHelp;
    }

    public startPrevoiusGame(): void {
        if (localStorage.getItem('savedResultsGame')) {
            MainField.currentLevel = this.currentLevelFromSave;
            this.levelsGame.moveToNextLevel();
            this.levelsGame.resetLevelsGameAsideBar();
            const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
            for (let i = 0; i < levelsTitlesCollection.length; i += 1) {
                if (this.doneLevelsFromSave[i] === 'true') {
                    const pictureOfMarkedLevel = levelsTitlesCollection[i].children[0] as HTMLImageElement;
                    pictureOfMarkedLevel.src = './assets/icons/done.png';
                    levelsTitlesCollection[i].setAttribute('done', 'true');
                }
                if (this.levelsWithHelpFromSave[i] === 'true') {
                    levelsTitlesCollection[i].children[1].innerHTML = `${levels[i].nameOfLevel} DONE with HELP`;
                }
            }
        }
    }
}
export default MainGame;
