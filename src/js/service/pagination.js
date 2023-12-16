import { APIClient } from './apiClient';

console.log('PaGINATION');

const content = document.querySelector('.content');
const test = document.querySelector('.test');
let currentPage = 1;

const apiClient = new APIClient();
async function api(page) {
  return await apiClient.fetchFiltersOfExercises(page);
}
let result = await api(currentPage);
test.innerHTML = `${result.data.page} ${result.data.results.map(
  ({ name }) => name
)}`;
console.log('result', result.data);
const { perPage, page, totalPages } = result.data;

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

function showPage() {
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
    pageButton.addEventListener('click', async () => {
      currentPage = i + 1;
      // showPage(currentPage);

      if (currentPage !== parseInt(result.data.page)) {
        result = await api(currentPage);
        updateActiveButtonStates();
        console.log(result.data);
        test.innerHTML = `${result.data.page} ${result.data.results.map(
          ({ name }) => name
        )}`;
      }
    });

    content.appendChild(paginationContainer);
    paginationDiv.appendChild(pageButton);
  }
}

export { pagination };
