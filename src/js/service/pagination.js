import { APIClient } from './apiClient';

async function listenerPagination() {
  document.addEventListener('DOMContentLoaded', pagination);
}

console.log('PaGINATION');

const content = document.querySelector('.content');
const itemsPerPage = 4;
let currentPage = 1;
// const items = Array.from(content.querySelectorAll('.item'));

const apiClient = new APIClient();

const result = await apiClient.fetchFiltersOfExercises('Muscles', currentPage);

console.log('result', result.data);
const { perPage, page, totalPages } = result.data;
console.log(perPage, page, totalPages);

function pagination() {
  createPageButtons();
  showPage(currentPage);
}

function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll('.pagination button');
  pageButtons.forEach((button, index) => {
    if (index === currentPage - 1) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function showPage(currentPage) {
  //   const startIndex = page * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   items.forEach((item, index) => {
  //     item.classList.toggle('hidden', index < startIndex || index >= endIndex);
  //   });
  currentPage += 1;
  const result2 = apiClient.fetchFiltersOfExercises((page = currentPage));

  updateActiveButtonStates();
}

// create buttons
function createPageButtons() {
  const paginationContainer = document.createElement('div');
  const paginationDiv = document.body.appendChild(paginationContainer);
  paginationContainer.classList.add('pagination');

  // Add page buttons
  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i + 1;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
      updateActiveButtonStates();
    });

    content.appendChild(paginationContainer);
    paginationDiv.appendChild(pageButton);
  }
}

export { listenerPagination };
