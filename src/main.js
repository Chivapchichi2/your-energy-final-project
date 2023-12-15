import { ActionNames } from './js/misc/names.js';
import { burgerButton } from './js/burger.js';
import { filterBtnsListeners } from './js/filter/filter.js';
import { loadQuote } from './js/quote/quote.js';

burgerButton();
filterBtnsListeners();
document.addEventListener('DOMContentLoaded', function () {
  loadQuote();
});
/**
 * Test Js and example import
 */
console.log(ActionNames.CLICK);
