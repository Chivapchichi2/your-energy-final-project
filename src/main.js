import { burgerButton } from './js/burger.js';
import { filterBtnsListeners } from './js/filter/filter.js';
import { Footer } from './js/footer.js';
import { loadQuote } from './js/quote/quote.js';
import  setupScroller from './js/scroll.js';
import { pagination } from './js/service/pagination.js';
import { renderCards } from './js/tamplates/cardTmp.js';
import apiManager from './js/service/apiManager.js';

burgerButton();
filterBtnsListeners();
Footer.init();
setupScroller();
document.addEventListener('DOMContentLoaded', function () {
  loadQuote();
});

let filter = 'Equipment';

pagination(filter);
renderCards(apiManager.getExercisesByFilters('', 'waist', 'bodypart'));
