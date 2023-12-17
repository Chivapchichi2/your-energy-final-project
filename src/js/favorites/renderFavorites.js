import { Exercise } from '../tamplates/exerciseTmp.js';

const favoritesList = document.querySelector('.favorites-list');
const emptyStorageMsg = document.querySelector('.favorites-error-message');
// const filterList = document.querySelector('.exercises');

const exercise = new Exercise(favoritesList, true);

function renderFavorites() {
  const localData = JSON.parse(localStorage.getItem('favorites'));
  console.log(localData);

  if (!localData) {
    emptyStorageMsg.style.display = 'block';
  } else {
    exercise.render(localData);
  }
}

if (favoritesList) {
  renderFavorites();
}
