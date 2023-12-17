import { Exercise } from '../tamplates/exerciseTmp.js';
import { getModalData } from '../tamplates/modal.js';

const content = document.querySelector('.content');
const favoritesList = document.querySelector('.favorites-list');
const emptyStorageMsg = document.querySelector('.favorites-error-message');

const exercise = new Exercise(favoritesList, true);

function handleNextButtonClick(clickedElement) {
  const dataId = clickedElement.closest('.next-btn').getAttribute('data-id');
  getModalData(dataId);
}

function handleBinButtonClick(clickedElement) {
  const dataId = clickedElement.closest('.bin').getAttribute('data-id');
  const localData = JSON.parse(localStorage.getItem('favorites'));
  const newData = localData.filter(item => item._id !== dataId);
  localStorage.setItem('favorites', JSON.stringify(newData));
  exercise.render(newData);
  if (!newData.length) {
    emptyStorageMsg.style.display = 'block';
  }
}

function renderFavorites() {
  favoritesList.addEventListener('click', event => {
    const clickedElement = event.target;

    if (
      clickedElement.classList.contains('next-btn') ||
      clickedElement.parentElement.classList.contains('next-btn')
    ) {
      handleNextButtonClick(clickedElement);
    }

    if (clickedElement.closest('.bin')) {
      handleBinButtonClick(clickedElement);
    }
  });

  const localData = JSON.parse(localStorage.getItem('favorites'));

  if (!localData) {
    content.style.justifyContent = 'center';
    favoritesList.classList.add('favorites-empty-list');
    emptyStorageMsg.style.display = 'block';
  } else {
    exercise.render(localData);
  }
}

if (favoritesList) {
  renderFavorites();
}
