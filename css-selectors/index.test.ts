import { describe } from 'node:test';
import MainField from './src/components/main_field/main_field';
import LevelsFieid from './src/components/aside_levels_field/levels_field/aside_levels_field';
import LevelsGame from './src/components/aside_levels_field/levels_game/aside_levels_game';
import levels from './src/components/levels_and_tags/levels';
import HELPGame from './src/components/help_field/help_game/help_game_level';
import HTMLField from './src/components/css_and_html_field/html_field/html_field';
import Burger from './src/components/adaptive/burger_menu';

describe('MainField', () => {
    test('creates and add main container to body', () => {
        const mainField = new MainField();
        mainField.makeGame();
        window.document.body.append(mainField.mainContainer);
        expect(window.document.body.children.length).toBe(1);
        expect(window.document.body.children[0].classList.contains('main_container')).toBe(true);
    });

    test('should set currentLevel to the passed value', () => {
        new MainField(200);
        expect(MainField.currentLevel).toBe(200);
    });

    test('changes the current level', () => {
        const mainField = new MainField();
        mainField.changeCurentLevel = 1;
        expect(MainField.currentLevel).toBe(1);
    });

    test('creates the win window', () => {
        const mainField = new MainField();
        mainField.makeWinWindow();
        window.document.body.append(mainField.windowForWin);
        expect(window.document.body.children.length).toBe(2);
        expect(window.document.body.children[1].classList.contains('window_win')).toBe(true);
    });
});

describe('LevelsField', () => {
    test('creates levels aside field', () => {
        const levelsField = new LevelsFieid();
        const mainField = new MainField();
        levelsField.makeLevelsField();
        mainField.aside.append(levelsField.levelsTitle);
        mainField.aside.append(levelsField.levelsMainBLock);
        expect(mainField.aside.children.length).toBe(2);
        expect(mainField.aside.children[0].classList.contains('levels_title')).toBe(true);
        expect(mainField.aside.children[1].classList.contains('levels_main_block')).toBe(true);
    });
});

describe('LevelGame', () => {
    test('should add "level_marked" class to the current level item', () => {
        const levelsGame = new LevelsGame();
        for (let i = 0; i < levels.length; i += 1) {
            const levelItem = document.createElement('div');
            levelItem.classList.add('level_item');
            document.body.append(levelItem);
        }
        const currentLevel = MainField.currentLevel;
        levelsGame.markCurrentLevel();
        const levelsTitlesCollection = <NodeListOf<Element>>document.querySelectorAll('.level_item');
        expect(levelsTitlesCollection[currentLevel].classList.contains('level_marked')).toBe(true);
        expect(levelsTitlesCollection[currentLevel].classList.contains('level_item')).toBe(true);
        expect(levelsTitlesCollection.length).toBe(10);
        for (let i = 0; i < levels.length; i += 1) {
            document.body.removeChild(levelsTitlesCollection[i]);
        }
    });

    test('should reset all level items and mark the current level', () => {
        const levelsGame = new LevelsGame();
        const levelsTitle = <HTMLDivElement>document.createElement('div');
        levelsTitle.classList.add('levels_title_text');
        document.body.append(levelsTitle);
        for (let i = 0; i < levels.length; i += 1) {
            const levelItem = <HTMLDivElement>document.createElement('div');
            levelItem.classList.add('level_item');
            const levelImage = <HTMLImageElement>document.createElement('img');
            levelImage.classList.add('level_image');
            levelImage.src = './assets/icons/done.png';
            levelItem.append(levelImage);
            const levelName = <HTMLParagraphElement>document.createElement('p');
            levelName.classList.add('level_name');
            levelName.innerHTML = `${levels[i].nameOfLevel} DONE with HELP`;
            levelItem.append(levelName);
            const currentLevel = 3;
            if (currentLevel === i) {
                levelItem.classList.add('level_marked');
            }
            levelItem.setAttribute('done', 'true');
            levelItem.setAttribute('number', `${i}`);
            document.body.append(levelItem);
        }
        const currentLevel = MainField.currentLevel;
        levelsGame.resetLevelsGameAsideBar();
        levelsGame.markCurrentLevel();
        const levelsTitlesCollection = <NodeListOf<Element>>document.querySelectorAll('.level_item');
        const LevelsMainTitle = <HTMLDivElement>document.querySelector('.levels_title_text');
        expect(levelsTitlesCollection.forEach((element) => element.getAttribute('done'))).toBe(undefined);
        levelsTitlesCollection.forEach((element) => {
            const levelImage = <HTMLImageElement>element.children[0];
            const imageLink: string = levelImage.src;
            expect(imageLink.includes(`undone`)).toBe(true);
        });

        levelsTitlesCollection.forEach((element) => {
            expect(element.children[1].innerHTML === levels[Number(element.getAttribute('number'))].nameOfLevel).toBe(
                true
            );
        });
        expect(levelsTitlesCollection[currentLevel].classList.contains('level_marked')).toBe(true);
        expect(LevelsMainTitle.innerHTML === `Level ${currentLevel + 1} of ${levels.length}`).toBe(true);
        expect(levelsTitlesCollection.length).toBe(10);
    });
});

describe('HelpField', () => {
    test('should create an HTML field', () => {
        const htmlField = new HTMLField();
        htmlField.makeHTMLField();
        window.document.body.append(htmlField.htmlFieldBlock);
        const htmlFieldBlock = <HTMLDivElement>document.querySelector('.html_field_block');
        const htmlTitleBlock = <HTMLDivElement>document.querySelector('.html_title_block');
        const htmlHTMLTitle = <HTMLParagraphElement>document.querySelector('.html_title');
        const htmlTagTitle = <HTMLParagraphElement>document.querySelector('.tag_title');
        const htmlMainBlock = <HTMLDivElement>document.querySelector('.html_main_block');
        const htmlAsideBlock = <HTMLDivElement>document.querySelector('.html_aside_block');
        const htmlTagBlock = <HTMLDivElement>document.querySelector('.html_tag_block');
        expect(htmlFieldBlock).toBeTruthy();
        expect(htmlTitleBlock).toBeTruthy();
        expect(htmlHTMLTitle).toBeTruthy();
        expect(htmlHTMLTitle.innerHTML === 'HTML Viewer').toBe(true);
        expect(htmlTagTitle).toBeTruthy();
        expect(htmlTagTitle.innerHTML === 'Tom &amp; Jerry.html').toBe(true);
        expect(htmlMainBlock).toBeTruthy();
        expect(htmlAsideBlock).toBeTruthy();
        expect(htmlTagBlock).toBeTruthy();
        expect(htmlAsideBlock.children.length).toBe(17);
    });

    test('should set htmlAsideNumberLength to the passed value', () => {
        const htmlField = new HTMLField(150);
        expect(htmlField.htmlAsideNumberLength).toBe(150);
    });
});

describe('HelpGame', () => {
    test('should insert the right answer to the CSS input', () => {
        const helpGame = new HELPGame();
        const CSSInput = <HTMLInputElement>document.createElement('input');
        CSSInput.classList.add('css_input');
        CSSInput.value = '';
        document.body.append(CSSInput);
        const mainField = new MainField();
        const randomNumberOfLevel = Math.round(Math.random() * levels.length);
        mainField.changeCurentLevel = randomNumberOfLevel;
        helpGame.insertRightAnswerToCSSInput();
        const CSSInputElement = <HTMLInputElement>document.querySelector('.css_input');
        setTimeout(() => {
            expect(MainField.currentLevel).toBe(randomNumberOfLevel);
            expect(CSSInputElement.value === levels[randomNumberOfLevel].rightAnswer).toBe(true);
            expect((CSSInputElement.style.animationIterationCount = '0')).toBe(true);
            expect(window.document.body.children[0].classList.contains('css_input')).toBe(true);
        }, 2000);
    });

    test('change helpIvent', () => {
        const helpGame = new HELPGame();
        helpGame.changehelpIvent = true;
        expect(HELPGame.helpIvent).toBe(true);
    });
});

describe('Burger', () => {
    test('creates a burger menu and add it to header', () => {
        const burger = new Burger();
        burger.makeBurger();
        const burgerBlock = <HTMLDivElement>document.querySelector('.burger');
        const overlay = <HTMLDivElement>document.querySelector('.overlay');
        const headerBlock = <HTMLDivElement>document.querySelector('.header');
        const mainContainerBlock = <HTMLDivElement>document.querySelector('.main_container');
        expect(burgerBlock).toBeTruthy();
        expect(overlay).toBeTruthy();
        expect(burgerBlock.children.length).toBe(3);
        expect(headerBlock.children[1].classList.contains('burger')).toBe(true);
        expect(mainContainerBlock.children[0].classList.contains('overlay')).toBe(true);
    });
});
