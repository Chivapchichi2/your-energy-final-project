import { Exercise } from '../tamplates/exerciseTmp.js';
import { getModalData } from '../tamplates/modal.js';

const content = document.querySelector('.content');
const favoritesList = document.querySelector('.favorites-list');
const emptyStorageMsg = document.querySelector('.favorites-error-message');

export const exercise = new Exercise(favoritesList, true);

function handleNextButtonClick(clickedElement) {
  const dataId = clickedElement.closest('.next-btn').getAttribute('data-id');
  getModalData(dataId);
}

function handleBinButtonClick(clickedElement) {
  const dataId = clickedElement.closest('.bin').getAttribute('data-id');
  const localData = JSON.parse(localStorage.getItem('favorites'));
  const newData = localData.filter(item => item._id !== dataId);
  localStorage.setItem('favorites', JSON.stringify(newData));
  favoritesList.classList.remove('hide-block');
  exercise.render(newData);
  if (!localData || !newData.length) {
    favoritesList.classList.add('hide-block');
    emptyStorageMsg.classList.remove('hide-block');
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

  if (!localData || !localData?.length) {
    favoritesList.classList.add('hide-block');
    emptyStorageMsg.classList.remove('hide-block');
  } else {
    favoritesList.classList.remove('hide-block');
    exercise.render(localData);
  }
}

if (favoritesList) {
  renderFavorites();
}
