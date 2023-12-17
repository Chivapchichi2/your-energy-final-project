import { Exercise } from '../tamplates/exerciseTmp.js';

const content = document.querySelector('.content');
const favoritesList = document.querySelector('.favorites-list');
const emptyStorageMsg = document.querySelector('.favorites-error-message');
// const filterList = document.querySelector('.exercises');

const exercise = new Exercise(favoritesList, true);

function renderFavorites() {
  const localData = JSON.parse(localStorage.getItem('favorites'));
  console.log(localData);

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
