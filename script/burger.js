const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';    /* добавили 2 к названию - костыль */

const bodyNode = document.querySelector('body');   /* добавили 2 к названию - костыль */
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger-contacts');

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
