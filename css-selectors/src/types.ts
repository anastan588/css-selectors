export type Tlevel = {
    nameOfLevel: string;
    number: number;
    id?: string;
    whattodo: string;
    selector: string;
    rightAnswer: string;
    anotherPossibleAnwers: string[];
    htmlBlockInnerTags: string[];
    tooltipSet: Array<string | (string | string[])[]>;
    tagsSetName: Array<string | (string | string[])[]>;
    picturesSetWithOutShadow: Array<string | (string | string[])[]>;
    picturesSetWithShadow: Array<string | (string | string[])[]>;
    pictureSetRightAnswers: Array<string | (string | string[])[]>;
    pictureSetPossibleAnswersForAloneSelectors: Array<string | (string | string[])[]>;
    pictureSetPossibleAnswersForCombineSelectors: Array<string | (string | string[])[]>;
};

type TTagDescription = {
    name: string;
    tooltip: string;
    openTag: string;
    closeTag: string;
    oneTag: string;
    space: string;
    lineBreak: string;
    imageWithOutShadow: string;
    imageWithShadow: string;
};

export type TTags = {
    pillow: TTagDescription;
    jerry: TTagDescription;
    tom: TTagDescription;
    jerrywithcheese: TTagDescription;
    jerryindeapers: TTagDescription;
    jerrystealscheese: TTagDescription;
    jerrytriangle: TTagDescription;
    jerryguilty: TTagDescription;
    jerrybye: TTagDescription;
    jerrysurprise: TTagDescription;
    jerrysmall: TTagDescription;
    tomsmall: TTagDescription;
    tomsmile: TTagDescription;
    tomangry: TTagDescription;
    tomandjerry: TTagDescription;
    tomandjerrysuit: TTagDescription;
    tomandjerrycatch: TTagDescription;
    pillowblue: TTagDescription;
    pillowred: TTagDescription;
};

export type TSavesGame = {
    level: number;
    doneLevels: string[];
    levelsWithHelp: string[];
};
