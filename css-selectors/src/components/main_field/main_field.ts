class MainField {
    public mainContainer: HTMLDivElement;
    public header: HTMLElement;
    public h1: HTMLHeadingElement;
    public aside: HTMLElement;
    public main: HTMLElement;
    public footer: HTMLElement;
    public pFooter: HTMLElement;
    public githubImage: HTMLImageElement;
    public rsschoolImage: HTMLImageElement;
    public githubLink: HTMLAnchorElement;
    public rsschoolLink: HTMLAnchorElement;
    public body: HTMLBodyElement;
    public HtmlCssContainer: HTMLDivElement;
    static currentLevel: number;
    public currentLevelElement: HTMLInputElement;
    public windowForWin: HTMLDivElement;
    public windowForWinTitle: HTMLParagraphElement;
    public windowForWinText: HTMLParagraphElement;
    public windowForWinButtonsBlock: HTMLDivElement;
    public windowForWinButtonYes: HTMLDivElement;
    public windowForWinButtonNo: HTMLDivElement;

    constructor(currentLevel: number = 0) {
        this.body = <HTMLBodyElement>document.querySelector('body');
        this.mainContainer = document.createElement('div');
        this.header = document.createElement('header');
        this.h1 = document.createElement('h1');
        this.aside = document.createElement('aside');
        this.main = document.createElement('main');
        this.footer = document.createElement('footer');
        this.pFooter = document.createElement('p');
        this.githubImage = document.createElement('img');
        this.rsschoolImage = document.createElement('img');
        this.githubLink = document.createElement('a');
        this.rsschoolLink = document.createElement('a');
        this.HtmlCssContainer = document.createElement('div');
        MainField.currentLevel = currentLevel;
        this.currentLevelElement = document.createElement('input');
        this.windowForWin = document.createElement('div');
        this.windowForWinTitle = document.createElement('p');
        this.windowForWinText = document.createElement('p');
        this.windowForWinButtonsBlock = document.createElement('div');
        this.windowForWinButtonYes = document.createElement('div');
        this.windowForWinButtonNo = document.createElement('div');
    }

    public makeGame(): void {
        this.mainContainer.classList.add('main_container');
        this.header.classList.add('header');
        this.h1.classList.add('title');
        this.h1.innerHTML = 'Tom & Jerry css';
        this.aside.classList.add('levels');
        this.main.classList.add('main');
        this.footer.classList.add('footer');
        this.pFooter.classList.add('footer_text');
        this.pFooter.innerHTML = '2023';
        this.githubLink.classList.add('github_link');
        this.githubLink.href = 'https://github.com/anastan588';
        this.githubLink.target = 'blank';
        this.githubImage.classList.add('github_image');
        this.githubImage.src = './assets/icons/github.svg';
        this.rsschoolLink.classList.add('rsschool_link');
        this.rsschoolLink.href = 'https://rs.school/js/';
        this.rsschoolLink.target = 'blank';
        this.rsschoolImage.classList.add('rsschool_image');
        this.rsschoolImage.src = './assets/icons/rs_school.svg';
        this.body.append(this.mainContainer);
        this.mainContainer.append(this.header);
        this.mainContainer.append(this.aside);
        this.mainContainer.append(this.main);
        this.mainContainer.append(this.footer);
        this.header.append(this.h1);
        this.footer.append(this.githubLink);
        this.githubLink.append(this.githubImage);
        this.footer.append(this.pFooter);
        this.footer.append(this.rsschoolLink);
        this.rsschoolLink.append(this.rsschoolImage);
        this.currentLevelElement.value = `${MainField.currentLevel}`;
        this.currentLevelElement.type = 'button';
        this.currentLevelElement.classList.add('current_level');
        this.main.prepend(this.currentLevelElement);
    }

    public makeWinWindow(): void {
        this.windowForWin.classList.add('window_win');
        this.windowForWinTitle.classList.add('window_win_title');
        this.windowForWinTitle.innerHTML = `Congratulations! You passed all game)`;
        this.windowForWinText.classList.add('window_win_text');
        this.windowForWinText.innerHTML = `Do you want to start game again?`;
        this.windowForWinButtonsBlock.classList.add('window_win_buttons');
        this.windowForWinButtonYes.classList.add('window_win_ok');
        this.windowForWinButtonYes.innerHTML = `Yes`;
        this.windowForWinButtonNo.classList.add('window_win_no');
        this.windowForWinButtonNo.innerHTML = `No`;
        this.windowForWinButtonsBlock.append(this.windowForWinButtonYes);
        this.windowForWinButtonsBlock.append(this.windowForWinButtonNo);
        this.windowForWin.append(this.windowForWinTitle);
        this.windowForWin.append(this.windowForWinText);
        this.windowForWin.append(this.windowForWinButtonsBlock);
        const main = <HTMLDivElement>document.querySelector('.main');
        main.append(this.windowForWin);
    }

    public set changeCurentLevel(value: number) {
        MainField.currentLevel += value;
    }
}

export default MainField;
