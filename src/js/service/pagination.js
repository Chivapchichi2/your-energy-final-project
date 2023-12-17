import proxy from '../proxy/proxy.js';
import apiManager from './apiManager.js';
import { renderCurrentPage } from '../filter/handlers.js';

function pagination(container) {
  function paginationStart() {
    createPageButtons();
    showPage(proxy.currentPage);
  }

  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === proxy.currentPage - 1) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  function showPage() {
    updateActiveButtonStates();
  }

  function createPageButtons() {
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');

    for (let i = 0; i < proxy.totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        proxy.currentPage = i + 1;
        apiManager.updatePage();
        updateActiveButtonStates();
        renderCurrentPage();
      });

      container.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
  }

  if (proxy.totalPages > 1) {
    paginationStart();
  }
}

export { pagination };
