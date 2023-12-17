import proxy from '../proxy/proxy.js';
import apiManager from './apiManager.js';
import { renderCurrentPage } from '../filter/handlers.js';
import { refs } from '../filter/refs.js';

function pagination(container) {
  container.innerHTML = '';
  function paginationStart() {
    createPageButtons();
    showPage(proxy.currentPage);
  }

  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (Number(button.textContent) === proxy.currentPage) {
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

    const createButton = (pageNumber, label) => {
      const pageButton = document.createElement('button');
      pageButton.textContent = label || pageNumber;
      pageButton.addEventListener('click', () => {
        if (typeof pageNumber === 'boolean') {
          proxy.currentPage += pageNumber ? 1 : -1;
        } else {
          proxy.currentPage = pageNumber;
        }
        refs.filterList.innerHTML = '';
        apiManager.updatePage();
        updateActiveButtonStates();
        renderCurrentPage();
      });
      return pageButton;
    };

    const addEllipsis = after => {
      paginationContainer.appendChild(createButton(after, '...'));
    };

    // Add the first page button
    paginationContainer.appendChild(createButton(1));

    // Add '...' if necessary
    if (proxy.currentPage >= 3) {
      addEllipsis(false);
    }

    // Add three adjacent buttons to the current page
    for (
      let i = Math.max(2, proxy.currentPage - 1);
      i <= Math.min(proxy.totalPages - 1, proxy.currentPage + 1);
      i++
    ) {
      paginationContainer.appendChild(createButton(i));
    }

    // Add '...' if necessary
    if (proxy.currentPage <= proxy.totalPages - 2) {
      addEllipsis(true);
    }

    // Add the last page button
    paginationContainer.appendChild(createButton(proxy.totalPages));
    container.appendChild(paginationContainer);
  }

  if (proxy.totalPages > 1) {
    paginationStart();
  }
}

export { pagination };
