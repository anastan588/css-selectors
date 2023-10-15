import PictureField from '../picture_html/pictures_field';
import levels from '../../levels_and_tags/levels';
import tags from '../../levels_and_tags/tags';
import MainField from '../../main_field/main_field';

class PictureGame extends PictureField {
    public countOFPictureElements: number;
    constructor(counOfPictureElements: number = 0) {
        super();
        this.countOFPictureElements = counOfPictureElements;
    }

    public fillPicturesAccordingToLevel(): void {
        const pictureTitle = <HTMLDivElement>document.querySelector('.picture_title');
        pictureTitle.innerHTML = levels[MainField.currentLevel].whattodo;
        for (let i = 0; i < levels[MainField.currentLevel].picturesSetWithOutShadow.length; i += 1) {
            const cssPicturesContainer = <HTMLDivElement>document.querySelector('.css_pictures___container');
            const picturesItem = <HTMLDivElement>document.createElement('div');
            picturesItem.classList.add('css_picture____item');
            if (typeof levels[MainField.currentLevel].picturesSetWithOutShadow[i] === 'string') {
                const pictureContainer = <HTMLDivElement>document.createElement('div');
                pictureContainer.classList.add('picture_container');
                pictureContainer.setAttribute('id', `${this.countOFPictureElements}`);
                const pictureImage = <HTMLImageElement>document.createElement('img');

                const answerClass = levels[MainField.currentLevel].pictureSetRightAnswers[i] as string;
                pictureImage.classList.add(answerClass);
                if (pictureImage.classList.contains('answer')) {
                    pictureImage.setAttribute('answer', 'true');
                } else {
                    pictureImage.setAttribute('answer', 'false');
                }

                const possibleAnswerAttributeAlone = levels[MainField.currentLevel]
                    .pictureSetPossibleAnswersForAloneSelectors[i] as string;
                pictureImage.setAttribute('possible_answer_alone', possibleAnswerAttributeAlone);
                const possibleAnswerAttributeCombine = levels[MainField.currentLevel]
                    .pictureSetPossibleAnswersForCombineSelectors[i] as string;
                pictureImage.setAttribute('possible_answer_combine', possibleAnswerAttributeCombine);
                const link = levels[MainField.currentLevel].picturesSetWithOutShadow[i] as string;
                pictureImage.src = link;
                this.addClassToPictureImageWithOutInnerTags(pictureImage, i);
                pictureImage.classList.add('game_image');
                pictureContainer.append(pictureImage);
                const tooltip = <HTMLDivElement>document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.innerHTML = levels[MainField.currentLevel].tooltipSet[i] as string;
                pictureContainer.append(tooltip);
                picturesItem.append(pictureContainer);
                this.countOFPictureElements += 1;
            } else {
                for (let j = 0; j < levels[MainField.currentLevel].picturesSetWithOutShadow[i].length; j += 1) {
                    const pictureContainer = <HTMLDivElement>document.createElement('div');
                    pictureContainer.classList.add('picture_container');
                    pictureContainer.setAttribute('id', `${this.countOFPictureElements}`);
                    const pictureImage = <HTMLImageElement>document.createElement('img');

                    const answerClass: string = levels[MainField.currentLevel].pictureSetRightAnswers[i][j] as string;
                    pictureImage.classList.add(answerClass);
                    if (pictureImage.classList.contains('answer')) {
                        pictureImage.setAttribute('answer', 'true');
                    } else {
                        pictureImage.setAttribute('answer', 'false');
                    }

                    const possibleAnswerAttributeAlone = levels[MainField.currentLevel]
                        .pictureSetPossibleAnswersForAloneSelectors[i][j] as string;
                    pictureImage.setAttribute('possible_answer_alone', possibleAnswerAttributeAlone);
                    const possibleAnswerAttributeCombine = levels[MainField.currentLevel]
                        .pictureSetPossibleAnswersForCombineSelectors[i][j] as string;
                    pictureImage.setAttribute('possible_answer_combine', possibleAnswerAttributeCombine);
                    const link = levels[MainField.currentLevel].picturesSetWithOutShadow[i][j] as string;
                    pictureImage.src = link;
                    this.addClassToPictureImageWithInnerTags(pictureImage, i, j);
                    pictureImage.classList.add('game_image');
                    pictureContainer.append(pictureImage);
                    const tooltip = <HTMLDivElement>document.createElement('div');
                    tooltip.classList.add('tooltip');
                    tooltip.innerHTML = levels[MainField.currentLevel].tooltipSet[i][j] as string;
                    pictureContainer.append(tooltip);
                    picturesItem.append(pictureContainer);
                    this.countOFPictureElements += 1;
                }
            }
            cssPicturesContainer.append(picturesItem);
        }
        this.countOFPictureElements = 0;
    }

    public addListenerToCSSPictureContainer(): void {
        const pictureContainer = <HTMLDivElement>document.querySelector('.css_pictures___container');
        pictureContainer.addEventListener('mouseover', (event) => {
            this.backlightPicture(event);
        });
        pictureContainer.addEventListener('mouseout', (event) => {
            this.removeBackLightFromPicture(event);
        });
    }

    public backlightPicture(event: Event): void {
        const eventElement = <HTMLImageElement>event.target;
        if (eventElement.tagName !== 'IMG') {
            return;
        }
        const parent = <HTMLDivElement>eventElement.parentElement;
        const childTooltip = <HTMLDivElement>parent.children[1];
        childTooltip.style.opacity = '1';
        const elementID = parent.getAttribute('id') as string;
        const collectionOfCode = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_code');
        this.setImageWithShadow(eventElement);
        for (let j = 0; j < collectionOfCode.length; j += 1) {
            const codeID = collectionOfCode[j].getAttribute('id') as string;
            if (elementID === codeID) {
                collectionOfCode[j].classList.add('hover_code');
                if (collectionOfCode[j].children.length > 1) {
                    for (let k = 0; k < collectionOfCode[j].children.length; k += 1) {
                        if (collectionOfCode[j].children[k].classList.contains('child')) {
                            const child = <HTMLElement>collectionOfCode[j].children[k];
                            child.classList.add('hover_code');
                            child.style.fontSize = 'inherit';
                        }
                    }
                }
            }
        }
    }

    public removeBackLightFromPicture(event: Event): void {
        const eventElement = <HTMLImageElement>event.target;
        if (eventElement.tagName !== 'IMG') {
            return;
        }
        const parent = <HTMLDivElement>eventElement.parentElement;
        const childTooltip = <HTMLDivElement>parent.children[1];
        childTooltip.style.opacity = '0';
        const elementID = parent.getAttribute('id') as string;
        const collectionOfCode = <NodeListOf<HTMLElement>>document.querySelectorAll('.level_code');
        this.setImageWithOutShadow(eventElement);
        for (let j = 0; j < collectionOfCode.length; j += 1) {
            const codeID = collectionOfCode[j].getAttribute('id') as string;
            if (elementID === codeID) {
                collectionOfCode[j].classList.remove('hover_code');
                if (collectionOfCode[j].children.length > 1) {
                    for (let k = 0; k < collectionOfCode[j].children.length; k += 1) {
                        if (collectionOfCode[j].children[k].classList.contains('child')) {
                            const child = <HTMLElement>collectionOfCode[j].children[k];
                            child.classList.remove('hover_code');
                            child.style.removeProperty('font-size');
                        }
                    }
                }
            }
        }
    }

    public addClassToPictureImageWithOutInnerTags(pictureImage: HTMLImageElement, i: number) {
        if (levels[MainField.currentLevel].tagsSetName[i] === 'pillow') {
            pictureImage.classList.add('pillow');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'pillow red') {
            pictureImage.classList.add('pillow_red');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'pillow blue') {
            pictureImage.classList.add('pillow_blue');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry') {
            pictureImage.classList.add('jerry');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry with cheese') {
            pictureImage.classList.add('jerry_with_cheese');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom') {
            pictureImage.classList.add('tom');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry in deapers') {
            pictureImage.classList.add('jerry_in_deapers');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom small') {
            pictureImage.classList.add('tom_small');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom smile') {
            pictureImage.classList.add('tom_smile');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom angry') {
            pictureImage.classList.add('tom_angry');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry small') {
            pictureImage.classList.add('jerry_small');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry steals cheese') {
            pictureImage.classList.add('jerry_steals_cheese');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry triangle') {
            pictureImage.classList.add('jerry_triangle');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry guilty') {
            pictureImage.classList.add('jerry_guilty');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry bye') {
            pictureImage.classList.add('jerry_bye');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'jerry surprise') {
            pictureImage.classList.add('jerry_surprise');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom and jerry') {
            pictureImage.classList.add('tom_jerry');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom and jerry in suit') {
            pictureImage.classList.add('tom_jerry_suit');
        } else if (levels[MainField.currentLevel].tagsSetName[i] === 'tom and jerry catch') {
            pictureImage.classList.add('tom_jerry_catch');
        }
    }

    public addClassToPictureImageWithInnerTags(pictureImage: HTMLImageElement, i: number, j: number) {
        if (levels[MainField.currentLevel].tagsSetName[i][j] === 'pillow') {
            pictureImage.classList.add('pillow');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'pillow red') {
            pictureImage.classList.add('pillow_red');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'pillow blue') {
            pictureImage.classList.add('pillow_blue');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry') {
            pictureImage.classList.add('jerry');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry with cheese') {
            pictureImage.classList.add('jerry_with_cheese');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom') {
            pictureImage.classList.add('tom');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry in deapers') {
            pictureImage.classList.add('jerry_in_deapers');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom small') {
            pictureImage.classList.add('tom_small');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom smile') {
            pictureImage.classList.add('tom_smile');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom angry') {
            pictureImage.classList.add('tom_angry');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry small') {
            pictureImage.classList.add('jerry_small');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry steals cheese') {
            pictureImage.classList.add('jerry_steals_cheese');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry triangle') {
            pictureImage.classList.add('jerry_triangle');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry guilty') {
            pictureImage.classList.add('jerry_guilty');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry bye') {
            pictureImage.classList.add('jerry_bye');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'jerry surprise') {
            pictureImage.classList.add('jerry_surprise');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom and jerry') {
            pictureImage.classList.add('tom_jerry');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom and jerry in suit') {
            pictureImage.classList.add('tom_jerry_suit');
        } else if (levels[MainField.currentLevel].tagsSetName[i][j] === 'tom and jerry catch') {
            pictureImage.classList.add('tom_jerry_catch');
        }
    }

    public setImageWithShadow(eventElement: HTMLImageElement): void {
        if (eventElement.classList.contains('pillow')) {
            eventElement.src = tags.pillow.imageWithShadow;
        } else if (eventElement.classList.contains('pillow_red')) {
            eventElement.src = tags.pillowred.imageWithShadow;
        } else if (eventElement.classList.contains('pillow_blue')) {
            eventElement.src = tags.pillowblue.imageWithShadow;
        } else if (eventElement.classList.contains('jerry')) {
            eventElement.src = tags.jerry.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_with_cheese')) {
            eventElement.src = tags.jerrywithcheese.imageWithShadow;
        } else if (eventElement.classList.contains('tom')) {
            eventElement.src = tags.tom.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_in_deapers')) {
            eventElement.src = tags.jerryindeapers.imageWithShadow;
        } else if (eventElement.classList.contains('tom_small')) {
            eventElement.src = tags.tomsmall.imageWithShadow;
        } else if (eventElement.classList.contains('tom_smile')) {
            eventElement.src = tags.tomsmile.imageWithShadow;
        } else if (eventElement.classList.contains('tom_angry')) {
            eventElement.src = tags.tomangry.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_small')) {
            eventElement.src = tags.jerrysmall.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_steals_cheese')) {
            eventElement.src = tags.jerrystealscheese.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_triangle')) {
            eventElement.src = tags.jerrytriangle.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_guilty')) {
            eventElement.src = tags.jerryguilty.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_bye')) {
            eventElement.src = tags.jerrybye.imageWithShadow;
        } else if (eventElement.classList.contains('jerry_surprise')) {
            eventElement.src = tags.jerrysurprise.imageWithShadow;
        } else if (eventElement.classList.contains('tom_jerry')) {
            eventElement.src = tags.tomandjerry.imageWithShadow;
        } else if (eventElement.classList.contains('tom_jerry_suit')) {
            eventElement.src = tags.tomandjerrysuit.imageWithShadow;
        } else if (eventElement.classList.contains('tom_jerry_catch')) {
            eventElement.src = tags.tomandjerrycatch.imageWithShadow;
        }
    }

    public setImageWithOutShadow(eventElement: HTMLImageElement): void {
        if (eventElement.classList.contains('pillow')) {
            eventElement.src = tags.pillow.imageWithOutShadow;
        } else if (eventElement.classList.contains('pillow_red')) {
            eventElement.src = tags.pillowred.imageWithOutShadow;
        } else if (eventElement.classList.contains('pillow_blue')) {
            eventElement.src = tags.pillowblue.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry')) {
            eventElement.src = tags.jerry.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_with_cheese')) {
            eventElement.src = tags.jerrywithcheese.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom')) {
            eventElement.src = tags.tom.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_in_deapers')) {
            eventElement.src = tags.jerryindeapers.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom_small')) {
            eventElement.src = tags.tomsmall.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom_smile')) {
            eventElement.src = tags.tomsmile.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom_angry')) {
            eventElement.src = tags.tomangry.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_small')) {
            eventElement.src = tags.jerrysmall.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_steals_cheese')) {
            eventElement.src = tags.jerrystealscheese.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_triangle')) {
            eventElement.src = tags.jerrytriangle.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_guilty')) {
            eventElement.src = tags.jerryguilty.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_bye')) {
            eventElement.src = tags.jerrybye.imageWithOutShadow;
        } else if (eventElement.classList.contains('jerry_surprise')) {
            eventElement.src = tags.jerrysurprise.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom_jerry')) {
            eventElement.src = tags.tomandjerry.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom_jerry_suit')) {
            eventElement.src = tags.tomandjerrysuit.imageWithOutShadow;
        } else if (eventElement.classList.contains('tom_jerry_catch')) {
            eventElement.src = tags.tomandjerrycatch.imageWithOutShadow;
        }
    }
}

export default PictureGame;
