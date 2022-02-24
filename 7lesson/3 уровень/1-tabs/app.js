'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let arrayOfElements = document.querySelectorAll('.nav-link');
//тут я узнала что поиск по классу, выдает HTML коллекцию, в которой нет forEach

arrayOfElements.forEach(function (link) {
    link.addEventListener('click', clickHandler)
})

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    changeActiveClass(event);
    changeText(event);
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.

}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    /*я предположила что .active может быть не у предыдущего*/
    arrayOfElements.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });
    event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let a;
    switch (event.target.outerText) {
        case "Link 1":
            a = texts.text1;
            break;

        case "Link 2":
            a = texts.text2;
            break;

        case "Link 3":
            a = texts.text3;
            break;

        default:
            break;
    }
    document.querySelector('.text').textContent = a;
}