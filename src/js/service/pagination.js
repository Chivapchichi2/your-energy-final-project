function pagination(object, container) {
  let currentPage = object.currentPage;
  let totalPages = object.totalPages;

  const content = container;

  function paginationStart() {
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
      pageButton.addEventListener('click', () => {
        currentPage = i + 1;

        if (currentPage !== object.currentPage) {
          updateActiveButtonStates();
        }
      });

      content.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
  }

  if (totalPages > 1) {
    paginationStart();
  }
}

export { pagination };
