import { ActionNames } from './js/misc/names.js';
import { burgerButton } from './js/burger.js';
import { pagination } from './js/service/pagination.js';
burgerButton();

// let filter = 'Body parts';
// let filter = 'Muscles';
let filter = 'Equipment';

pagination(filter);
/**
 * Test Js and example import
 */
console.log(ActionNames.CLICK);
