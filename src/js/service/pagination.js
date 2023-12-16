import { APIClient } from './apiClient';

async function pagination(filter) {
  function render(data) {
    return `${result.data.page} ${result.data.results.map(({ name }) => name)}`;
  }

  const content = document.querySelector('.content');
  const container = document.querySelector('.test');
  let currentPage = 1;

  const apiClient = new APIClient();
  async function api(filter, page = 1) {
    return await apiClient.fetchFiltersOfExercises(filter, page);
  }
  let result = await api(filter, currentPage);
  container.innerHTML = render(result);
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

  function createPageButtons() {
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');

    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', async () => {
        currentPage = i + 1;

        if (currentPage !== parseInt(result.data.page)) {
          result = await api(filter, currentPage);
          updateActiveButtonStates();
          console.log(result.data);
          container.innerHTML = render(result);
        }
      });

      content.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
  }

  if (totalPages > 1) {
    pagination();
  }
}

export { pagination };
