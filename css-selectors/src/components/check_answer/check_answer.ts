import './check_answer.scss';

import winSound from '../../assets/sounds/win.mp3';
import endSound from '../../assets/sounds/end.mp3';
import looseSound from '../../assets/sounds/loose.mp3';

import levels from '../levels_and_tags/levels';
import MainField from '../main_field/main_field';
import MainGame from '../main_field/main_field_game';
import HELPGame from '../help_field/help_game/help_game_level';

class CheckAnswer extends MainField {
    public eventElement: HTMLElement;
    public mainGame: MainGame;
    public helpGame: HELPGame;
    public winSound: HTMLAudioElement;
    public endSound: HTMLAudioElement;
    public looseSound: HTMLAudioElement;
    public hasPossibleAnswer: boolean;

    constructor() {
        super();
        this.eventElement = document.createElement('div');
        this.mainGame = new MainGame();
        this.helpGame = new HELPGame();
        this.winSound = new Audio(winSound);
        this.endSound = new Audio(endSound);
        this.looseSound = new Audio(looseSound);
        this.hasPossibleAnswer = false;
    }

    public addListenerOfEndingTypingAnswer(): void {
        const input = <HTMLInputElement>document.querySelector('.css_input');
        const enterButton = <HTMLDivElement>document.querySelector('.css_input_button');
        input.addEventListener('change', () => {
            setTimeout(() => {
                if (!this.eventElement.classList.contains('css_input_button') && input.value.length > 0) {
                    this.checkInputAnswer(input);
                    enterButton.classList.add('enter_animation');
                }
            }, 150);
            this.eventElement = document.createElement('div');
            setTimeout(() => {
                enterButton.classList.remove('enter_animation');
            }, 1000);
        });
        enterButton.addEventListener('click', (event: Event) => {
            this.eventElement = <HTMLElement>event.target;
            enterButton.classList.add('enter_animation');
            this.checkInputAnswer(input);
            setTimeout(() => {
                enterButton.classList.remove('enter_animation');
            }, 1000);
        });
    }

    public checkInputAnswer(input: HTMLInputElement): void {
        const typedAnswer = input.value;
        const typedAnswerForChecking: string = typedAnswer.trim().toLocaleLowerCase();
        const helpingElementForChangeLevel = <HTMLInputElement>document.querySelector('.current_level');
        const ifItIsOtherPissibleAnswer: boolean = levels[MainField.currentLevel].anotherPossibleAnwers.some(
            (element: string) => element === typedAnswerForChecking
        );
        if (
            typedAnswerForChecking === levels[MainField.currentLevel].rightAnswer ||
            ifItIsOtherPissibleAnswer === true
        ) {
            this.winSound.play();
            const collectionOfPicturesForRghtAnswer = document.querySelectorAll('.answer');
            for (let i = 0; i < collectionOfPicturesForRghtAnswer.length; i += 1) {
                collectionOfPicturesForRghtAnswer[i].classList.add('win');
            }
            setTimeout(() => {
                const levelsTitlesCollection = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_item');
                levelsTitlesCollection[MainField.currentLevel].classList.remove('level_marked');
                levelsTitlesCollection[MainField.currentLevel].setAttribute('done', 'true');
                if (HELPGame.helpIvent === true) {
                    levelsTitlesCollection[MainField.currentLevel].children[1].innerHTML = `${
                        levels[MainField.currentLevel].nameOfLevel
                    } DONE with HELP`;
                }
                const pictureOfMarkedLevel = levelsTitlesCollection[MainField.currentLevel]
                    .children[0] as HTMLImageElement;
                pictureOfMarkedLevel.src = './assets/icons/done.png';
                if (MainField.currentLevel !== levels.length - 1) {
                    levelsTitlesCollection[MainField.currentLevel + 1].classList.add('level_marked');
                }
                const arrayOfDoneLevels: string[] = [];
                for (let i = 0; i < levelsTitlesCollection.length; i += 1) {
                    if (levelsTitlesCollection[i].getAttribute('done')) {
                        const doneAttribute = levelsTitlesCollection[i].getAttribute('done') as string;
                        arrayOfDoneLevels.push(doneAttribute);
                    }
                }
                if (arrayOfDoneLevels.length === levels.length) {
                    this.makeWinWindow();
                    this.endSound.play();
                    this.mainGame.addLisnenerToWindowWinButtons();
                } else if (MainField.currentLevel !== levels.length - 1) {
                    this.changeCurentLevel = 1;
                    helpingElementForChangeLevel.value = `${MainField.currentLevel}`;
                    const changeEvent: Event = new Event('change');
                    helpingElementForChangeLevel.dispatchEvent(changeEvent);
                    const LevelsMainTitle = <HTMLDivElement>document.querySelector('.levels_title_text');
                    LevelsMainTitle.innerHTML = `Level ${MainField.currentLevel + 1} of ${levels.length}`;
                }
            }, 1500);
        } else {
            const collectionOfAllPictures = <NodeListOf<Element>>document.querySelectorAll('.game_image');
            for (let i = 0; i < collectionOfAllPictures.length; i += 1) {
                const possibleAnswersAttributeAlone = collectionOfAllPictures[i].getAttribute(
                    'possible_answer_alone'
                ) as string;
                if (possibleAnswersAttributeAlone.includes(typedAnswerForChecking)) {
                    collectionOfAllPictures[i].classList.add('loose');
                    this.hasPossibleAnswer = true;
                }
                const possibleAnswersAttributeCombine = collectionOfAllPictures[i].getAttribute(
                    'possible_answer_combine'
                ) as string;
                if (
                    possibleAnswersAttributeCombine.includes(typedAnswerForChecking) &&
                    typedAnswerForChecking.length > 9
                ) {
                    const chilrenOfParent = <HTMLDivElement>(
                        collectionOfAllPictures[i].parentElement?.parentElement?.children[1].children[0]
                    );
                    if (chilrenOfParent === collectionOfAllPictures[i]) {
                        collectionOfAllPictures[i].classList.add('loose');
                    }
                    this.hasPossibleAnswer = true;
                }
            }
            if (this.hasPossibleAnswer === false) {
                const HtmlCssContainer = <HTMLDivElement>document.querySelector('.htmlCss_container');
                HtmlCssContainer.classList.add('loose');
            }
            this.looseSound.play();
            setTimeout(() => {
                const collectionOfAllPictures = <NodeListOf<Element>>document.querySelectorAll('.game_image');
                for (let i = 0; i < collectionOfAllPictures.length; i += 1) {
                    const possibleAnswersAttributeAlone = collectionOfAllPictures[i].getAttribute(
                        'possible_answer_alone'
                    ) as string;
                    if (possibleAnswersAttributeAlone.includes(typedAnswerForChecking)) {
                        collectionOfAllPictures[i].classList.remove('loose');
                    }
                    const possibleAnswersAttributeCombine = collectionOfAllPictures[i].getAttribute(
                        'possible_answer_combine'
                    ) as string;
                    if (
                        possibleAnswersAttributeCombine.includes(typedAnswerForChecking) &&
                        typedAnswerForChecking.length > 9
                    ) {
                        collectionOfAllPictures[i].classList.remove('loose');
                    }
                }
                this.hasPossibleAnswer = false;
                const HtmlCssContainer = <HTMLDivElement>document.querySelector('.htmlCss_container');
                HtmlCssContainer.classList.remove('loose');
            }, 1500);
        }
    }
}

export default CheckAnswer;
