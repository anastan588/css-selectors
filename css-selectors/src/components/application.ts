import MainField from './main_field/main_field';
import MainGame from './main_field/main_field_game';
import HelpField from './help_field/help_html/help_field';
import HELPGame from './help_field/help_game/help_game_level';
import PictureField from './pictures_field/picture_html/pictures_field';
import HTMLCSSField from './css_and_html_field/common_html_css_field';
import PictureGame from './pictures_field/picture_game/picture_game_level';
import HTMLGame from './css_and_html_field/html_game/html_game_level';
import CSSGame from './css_and_html_field/css_game/css_game_level';
import LevelsFieid from './aside_levels_field/levels_field/aside_levels_field';
import LevelsGame from './aside_levels_field/levels_game/aside_levels_game';
import CheckAnswer from './check_answer/check_answer';
import Burger from './adaptive/burger_menu';

class Application {
    public mainField: MainField;
    public mainGame: MainGame;
    public helpField: HelpField;
    public pictureField: PictureField;
    public htmlcssField: HTMLCSSField;
    public levelField: LevelsFieid;
    public levelGame: LevelsGame;
    public pictureGame: PictureGame;
    public htmlGame: HTMLGame;
    public cssGame: CSSGame;
    public helpGame: HELPGame;
    public checkAnswer: CheckAnswer;
    public burger: Burger;

    constructor() {
        this.mainField = new MainField();
        this.mainGame = new MainGame();
        this.helpField = new HelpField();
        this.pictureField = new PictureField();
        this.htmlcssField = new HTMLCSSField();
        this.pictureGame = new PictureGame();
        this.htmlGame = new HTMLGame();
        this.cssGame = new CSSGame();
        this.helpGame = new HELPGame();
        this.levelField = new LevelsFieid();
        this.levelGame = new LevelsGame();
        this.checkAnswer = new CheckAnswer();
        this.burger = new Burger();
    }

    public startGame(): void {
        this.mainField.makeGame();
        this.helpField.makeHelpContainer();
        this.mainField.main.append(this.helpField.help);
        this.pictureField.makepictureField();
        this.mainField.main.append(this.pictureField.pictureFieldContainer);
        this.htmlcssField.makeHtmlCssConntainer();
        this.mainField.main.append(this.htmlcssField.HtmlCssContainer);
        this.levelField.makeLevelsField();
        this.mainField.aside.append(this.levelField.levelsTitle);
        this.mainField.aside.append(this.levelField.levelsMainBLock);
        this.burger.makeBurger();
    }

    public startLevel(): void {
        this.helpGame.addListenerToHelpButton();
        this.pictureGame.fillPicturesAccordingToLevel();
        this.htmlGame.fillHtmlAccordingToLevel();
        this.htmlGame.addLIstenerToHTMLTagBlock();
        this.pictureGame.addListenerToCSSPictureContainer();
        this.cssGame.makeFocusOnInput();
        this.checkAnswer.addListenerOfEndingTypingAnswer();
        this.cssGame.stopBlinking();
        this.mainGame.addListenerToNumberOfLevel();
        this.levelGame.markCurrentLevel();
        this.levelGame.addListenerToResetProgressButton();
        this.levelGame.addListenerToEachLevelItem();
        this.mainGame.addListerOfBeforeUnload();
        this.mainGame.loadSavedGame();
        this.mainGame.startPrevoiusGame();
        this.burger.addListenerToOverLay();
        this.burger.addListenerToBurger();
        this.burger.addListenerMenuItems();
    }
}

export default Application;
