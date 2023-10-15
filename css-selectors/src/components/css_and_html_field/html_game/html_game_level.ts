import HTMLField from '../html_field/html_field';
import levels from '../../levels_and_tags/levels';
import MainField from '../../main_field/main_field';
import tags from '../../levels_and_tags/tags';

class HTMLGame extends HTMLField {
    constructor() {
        super();
    }

    public fillHtmlAccordingToLevel(): void {
        const currentlevel: number = MainField.currentLevel;
        const htmlTagBlock = <HTMLDivElement>document.querySelector('.html_tag_block');
        let htmlCode: string = '';
        for (let i = 0; i < levels[currentlevel].htmlBlockInnerTags.length; i += 1) {
            htmlCode += levels[currentlevel].htmlBlockInnerTags[i];
        }
        htmlTagBlock.innerHTML = `<div>&ltdiv class="Tom & Jerry"&gt` + `${htmlCode}` + `&lt/div&gt</div>`;
    }

    public addLIstenerToHTMLTagBlock(): void {
        const htmlTagBlock = <HTMLDivElement>document.querySelector('.html_tag_block');
        htmlTagBlock.addEventListener('mouseover', (event: Event) => {
            this.backLightCode(event);
        });
        htmlTagBlock.addEventListener('mouseout', (event: Event) => {
            this.removeBackLightFromCode(event);
        });
    }

    public backLightCode(event: Event): void {
        const eventElement = <HTMLElement>event.target;
        if (!eventElement.classList.contains('level_code')) {
            return;
        }
        const collectionOfPictures = <NodeListOf<HTMLElement>>document.querySelectorAll('.picture_container');
        const elementID = eventElement.getAttribute('id') as string;
        if (!eventElement.classList.contains('hover_code')) {
            eventElement.classList.add('hover_code');
            if (eventElement.children.length > 1) {
                for (let i = 0; i < eventElement.children.length; i += 1) {
                    if (eventElement.children[i].classList.contains('child')) {
                        const child = <HTMLElement>eventElement.children[i];
                        child.classList.add('hover_code');
                        child.style.fontSize = 'inherit';
                    }
                }
            }
            for (let j = 0; j < collectionOfPictures.length; j += 1) {
                const pictureID = collectionOfPictures[j].getAttribute('id') as string;
                if (elementID === pictureID) {
                    const childImage = <HTMLImageElement>collectionOfPictures[j].children[0];
                    this.setImageWithShadow(childImage);
                    const childTooltip = <HTMLDivElement>collectionOfPictures[j].children[1];
                    childTooltip.style.opacity = '1';
                }
            }
        }
    }

    public removeBackLightFromCode(event: Event): void {
        const eventElement = <HTMLElement>event.target;
        if (!eventElement.classList.contains('level_code')) {
            return;
        }
        const collectionOfPictures = <NodeListOf<HTMLElement>>document.querySelectorAll('.picture_container');
        const elementID = eventElement.getAttribute('id') as string;
        if (eventElement.classList.contains('hover_code')) {
            eventElement.classList.remove('hover_code');
            if (eventElement.children.length > 1) {
                for (let i = 0; i < eventElement.children.length; i += 1) {
                    if (eventElement.children[i].classList.contains('child')) {
                        const child = <HTMLElement>eventElement.children[i];
                        child.classList.remove('hover_code');
                        child.style.removeProperty('font-size');
                    }
                }
            }
            for (let j = 0; j < collectionOfPictures.length; j += 1) {
                const pictureID = collectionOfPictures[j].getAttribute('id') as string;
                if (elementID === pictureID) {
                    const childImage = <HTMLImageElement>collectionOfPictures[j].children[0];
                    this.setImageWithOutShadow(childImage);
                    const childTooltip = <HTMLDivElement>collectionOfPictures[j].children[1];
                    childTooltip.style.opacity = '0';
                }
            }
        }
    }

    public setImageWithShadow(childImage: HTMLImageElement): void {
        if (childImage.classList.contains('pillow')) {
            childImage.src = tags.pillow.imageWithShadow;
        } else if (childImage.classList.contains('pillow_red')) {
            childImage.src = tags.pillowred.imageWithShadow;
        } else if (childImage.classList.contains('pillow_blue')) {
            childImage.src = tags.pillowblue.imageWithShadow;
        } else if (childImage.classList.contains('jerry')) {
            childImage.src = tags.jerry.imageWithShadow;
        } else if (childImage.classList.contains('jerry_with_cheese')) {
            childImage.src = tags.jerrywithcheese.imageWithShadow;
        } else if (childImage.classList.contains('tom')) {
            childImage.src = tags.tom.imageWithShadow;
        } else if (childImage.classList.contains('jerry_in_deapers')) {
            childImage.src = tags.jerryindeapers.imageWithShadow;
        } else if (childImage.classList.contains('tom_small')) {
            childImage.src = tags.tomsmall.imageWithShadow;
        } else if (childImage.classList.contains('tom_smile')) {
            childImage.src = tags.tomsmile.imageWithShadow;
        } else if (childImage.classList.contains('tom_angry')) {
            childImage.src = tags.tomangry.imageWithShadow;
        } else if (childImage.classList.contains('jerry_small')) {
            childImage.src = tags.jerrysmall.imageWithShadow;
        } else if (childImage.classList.contains('jerry_steals_cheese')) {
            childImage.src = tags.jerrystealscheese.imageWithShadow;
        } else if (childImage.classList.contains('jerry_guilty')) {
            childImage.src = tags.jerryguilty.imageWithShadow;
        } else if (childImage.classList.contains('jerry_bye')) {
            childImage.src = tags.jerrybye.imageWithShadow;
        } else if (childImage.classList.contains('jerry_surprise')) {
            childImage.src = tags.jerrysurprise.imageWithShadow;
        } else if (childImage.classList.contains('tom_jerry')) {
            childImage.src = tags.tomandjerry.imageWithShadow;
        } else if (childImage.classList.contains('tom_jerry_suit')) {
            childImage.src = tags.tomandjerrysuit.imageWithShadow;
        } else if (childImage.classList.contains('tom_jerry_catch')) {
            childImage.src = tags.tomandjerrycatch.imageWithShadow;
        }
    }

    public setImageWithOutShadow(childImage: HTMLImageElement): void {
        if (childImage.classList.contains('pillow')) {
            childImage.src = tags.pillow.imageWithOutShadow;
        } else if (childImage.classList.contains('pillow_red')) {
            childImage.src = tags.pillowred.imageWithOutShadow;
        } else if (childImage.classList.contains('pillow_blue')) {
            childImage.src = tags.pillowblue.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry')) {
            childImage.src = tags.jerry.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_with_cheese')) {
            childImage.src = tags.jerrywithcheese.imageWithOutShadow;
        } else if (childImage.classList.contains('tom')) {
            childImage.src = tags.tom.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_in_deapers')) {
            childImage.src = tags.jerryindeapers.imageWithOutShadow;
        } else if (childImage.classList.contains('tom_small')) {
            childImage.src = tags.tomsmall.imageWithOutShadow;
        } else if (childImage.classList.contains('tom_smile')) {
            childImage.src = tags.tomsmile.imageWithOutShadow;
        } else if (childImage.classList.contains('tom_angry')) {
            childImage.src = tags.tomangry.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_small')) {
            childImage.src = tags.jerrysmall.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_steals_cheese')) {
            childImage.src = tags.jerrystealscheese.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_guilty')) {
            childImage.src = tags.jerryguilty.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_bye')) {
            childImage.src = tags.jerrybye.imageWithOutShadow;
        } else if (childImage.classList.contains('jerry_surprise')) {
            childImage.src = tags.jerrysurprise.imageWithOutShadow;
        } else if (childImage.classList.contains('tom_jerry')) {
            childImage.src = tags.tomandjerry.imageWithOutShadow;
        } else if (childImage.classList.contains('tom_jerry_suit')) {
            childImage.src = tags.tomandjerrysuit.imageWithOutShadow;
        } else if (childImage.classList.contains('tom_jerry_catch')) {
            childImage.src = tags.tomandjerrycatch.imageWithOutShadow;
        }
    }
}

export default HTMLGame;
