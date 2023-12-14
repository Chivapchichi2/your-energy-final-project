import { ActionNames } from './js/misc/names.js';
import { burgerButton } from './js/burger.js';
import { filterBtnsListeners } from './js/filter/filter.js';
import apiManager from './js/service/apiManager.js';

burgerButton();
filterBtnsListeners();
/**
 * Test Js and example import
 */
console.log(ActionNames.CLICK);
