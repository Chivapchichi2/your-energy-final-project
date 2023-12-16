import { burgerButton } from './js/burger.js';
import { filterBtnsListeners } from './js/filter/filter.js';
import { Footer } from './js/footer.js'
import { loadQuote } from './js/quote/quote.js';
import  setupScroller from './js/scroll.js'

burgerButton();
filterBtnsListeners();
Footer.init();
setupScroller();
document.addEventListener('DOMContentLoaded', function () {
  loadQuote();
});
