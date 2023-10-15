import './index.scss';
import './assets/fonts/toonish.ttf';
import './assets/icons/github.svg';
import './assets/icons/rs_school.svg';
import './assets/icons/tomwithjerry1.png';
import './assets/icons/pillow.png';
import './assets/icons/pillowshadow.png';
import './assets/icons/pillow2.png';
import './assets/icons/pillow2shadow.png';
import './assets/icons/jerry.png';
import './assets/icons/jerryshadow.png';
import './assets/icons/tom.png';
import './assets/icons/tomshadow.png';
import './assets/icons/jerrywithcheese.png';
import './assets/icons/jerrywithcheeseshadow.png';
import './assets/icons/jerryindeapers.png';
import './assets/icons/jerryindeapersshadow.png';
import './assets/icons/smalltom.png';
import './assets/icons/smalltomshadow.png';
import './assets/icons/jerrysmall.png';
import './assets/icons/jerrysmallshadow.png';
import './assets/icons/done.png';
import './assets/icons/undone.png';
import './assets/icons/logo.png';
import './assets/icons/logo2.png';
import './assets/icons/tomfunny.png';
import './assets/icons/tomfunnyshadow.png';
import './assets/icons/angrytom.png';
import './assets/icons/angrytomshadow.png';
import './assets/icons/jerrystolecheese.png';
import './assets/icons/jerrystolecheeseshadow.png';
import './assets/icons/jerrytriangle.png';
import './assets/icons/jerrytriangleshadow.png';
import './assets/icons/jerryguilty.png';
import './assets/icons/jerryguiltyshadow.png';
import './assets/icons/jerrybye.png';
import './assets/icons/jerrybyeshadow.png';
import './assets/icons/jerrysurprise.png';
import './assets/icons/jerrysurpriseshadow.png';
import './assets/icons/tomjerry.png';
import './assets/icons/tomjerryshadow.png';
import './assets/icons/tomjerrysuit.png';
import './assets/icons/tomjerrysuitshadow.png';
import './assets/icons/tomjerrycatch.png';
import './assets/icons/tomjerrycatchshadow.png';

import Application from './components/application';

const startGame: Application = new Application();
startGame.startGame();
startGame.startLevel();

console.log(`Самоценка работы:
Basic scope +70
 1)вёрстка, дизайн, UI. Внешний вид приложения соответствует приложению-прототипу или является его улучшенной версией. Выполняются требования к оформлению приложения +10
 2)используются собственные оригинальные интересные разнообразные задания на нахождение css-селекторов. Количество заданий не меньше десяти +10
 3)выполнен блок 1 с примером вёрстки. Элементы, для которых необходимо написать css-селектор, выделены при помощи анимации +10
 4)выполнен блок 2 с окном для ввода кода пользователем. В окне для ввода кода можно напечатать css-селектор +10
 5)выполнен блок 3 с кодом вёрстки, в котором отображается код вёрстки +10
 6)выполнен блок 4 со списком уровней игры. У пользователя есть возможность переходить к определённому уровню кликая по его номеру +10
 7)текущий уровень подсвечен. При перезагрузке приложение открывается на этом же уровне +10
Advanced scope +80
 8)подсветка html и css-кода в блоках 2 и 3 - окне для ввода кода пользователем и блоке с кодом вёрстки. Для подсветки кода могут использоваться js-библиотеки +10
 9)при наведении курсора на строку в блоке с кодом, отвечающий этой строке элемент в блоке с примером вёрстки подсвечивается. Рядом с элементом отображается его html-код +10
 10)при наведении курсора на элемент в блоке с вёрсткой, подсвечивается соответствующий ему фрагмент в блоке с кодом. Рядом с элементом отображается его html-код +10
 11)введённые пользователем селекторы можно отправить на проверку как кликом по кнопке Enter в окне для ввода кода, так и нажатием клавиши Enter на клавиатуре. Отправленные на проверку селекторы проверяются на соответствие требованиям задания +10
 12)проверку проходят любые селекторы, отвечающие всем выделенным элементам. +10
 13)если пользователь ввёл правильный css-селектор, отвечающий всем выделенным элементам, отображается соответствующая анимация, и автоматически открывается следующий уровень игры, или выводится уведомление о победе, если уровень последний. Если пользователь ответил неправильно, отображается соответствующая анимация. +10
 14)в приложении есть кнопка Help для тех случаев, когда пользователь не сумеет угадать нужный селектор. Клик по кнопке Help выводит нужный селектор в окне для ввода кода. Селектор выводится с эффектом печати текста (плавное появление текста по буквам) +10
 15)возле каждого уровня игры отображается, выполнен он, или нет, или уровень выполнен с использованием подсказки. Есть кнопка, позволяющая сбросить прогресс и начать прохождение игры заново +10
Итого: 150 баллов`);
