import { ActionNames } from './js/misc/names.js';
import { burgerButton } from './js/burger.js';
import { filterBtnsListeners } from './js/filter/filter.js';
import { Footer } from './js/footer.js'


burgerButton();
filterBtnsListeners();
Footer.init();
/**
 * Test Js and example import
 */
console.log(ActionNames.CLICK);
