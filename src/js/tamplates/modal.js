import apiManager from '../service/apiManager';
import { renderSetRatingModal } from './setRatingModal';

const FAVORITES_LS_KEY = 'favorites';

const backgroundElement = document.querySelector('.modal-background');
const excessesList = document.querySelector('.filter__list');

excessesList?.addEventListener('click', event => {
  const clickedElement = event.target;
  if (
    clickedElement.classList.contains('next-btn') ||
    clickedElement.parentElement.classList.contains('next-btn')
  ) {
    const dataId = clickedElement.closest('.next-btn').getAttribute('data-id');
    getModalData(dataId);
  }
});

async function getModalData(id) {
  const data = await apiManager.getExercisesByID(id);
  renderExcessesModal(data);
  openModal();
}

function renderExcessesModal(data) {
  const {
    _id: id,
    gifUrl,
    name,
    rating,
    target,
    bodyPart,
    equipment,
    popularity,
    burnedCalories,
    description,
  } = data;
  const template = `  <div class="modal">
    <button class="modal_close_btn" type="button">
      <svg
        class="modal_close_btn_icon"
        width="24"
        height="24"
        aria-label="heart icon"
      >
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal_image_wrap">
      <img
        class="modal_image"
        src="${gifUrl}"
        alt="${name}"
        onerror="this.onerror = null; this.src ='img/modal/no_image.png'"
      />
    </div>
    <div>
      <h1 class="modal_title">${name}</h1>
      <div class="modal_rating_wrap">
        <span class="modal_rating">${rating}</span>
        <div
          class="stars"
          style="--rating: ${rating}"
          aria-label="Rating of this product is ${rating} out of 5."
        ></div>
      </div>

      <ul class="modal_list">
        <li>
          <p class="modal_list_title">Target</p>
          <p class="modal_list_data">${target ? target : 'N/D'}</p>
        </li>
        <li>
          <p class="modal_list_title">Body Part</p>
          <p class="modal_list_data">${bodyPart ? bodyPart : 'N/D'}</p>
        </li>
        <li>
          <p class="modal_list_title">Equipment</p>
          <p class="modal_list_data">${equipment ? equipment : 'N/D'}</p>
        </li>
        <li>
          <p class="modal_list_title">Popular</p>
          <p class="modal_list_data">${popularity ? popularity : 'N/D'}</p>
        </li>
        <li>
          <p class="modal_list_title">Burned Calories</p>
          <p class="modal_list_data">${
            burnedCalories ? burnedCalories : 'N/D'
          }</p>
        </li>
      </ul>

      <p class="modal_explanation">
        ${description}
      </p>

      <div class="modal_btn_wrap">
        <button class="modal_favorite_btn" type="button">
          Add to favorites
          <svg
            class="modal_btn_icon"
            width="18"
            height="18"
            aria-label="heart icon"
          >
            <use href="./img/sprite.svg#icon-heart-icon"></use>
          </svg>
        </button>
        <button class="modal_rating_btn" type="button">Give a rating</button>
      </div>
    </div>
  </div>`;
  backgroundElement.innerHTML = template;

  addEventListenerRatingBtn(id);
  addEventListenerFavoriteBtn(data);
}

function addEventListenerRatingBtn(id) {
  const giveRatingBtn = document.querySelector('.modal_rating_btn');

  giveRatingBtn.addEventListener('click', event => {
    switchFromExcessesToRatingModal(id);
  });
}

function addEventListenerFavoriteBtn(data) {
  const favoriteBtn = document.querySelector('.modal_favorite_btn');

  favoriteBtn.addEventListener('click', event => {
    addOrDeleteExcessesToLS(data);
  });
}

function addOrDeleteExcessesToLS(data) {
  const lsData = JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)) || [];
  if (!lsData.some(item => item._id === data._id)) {
    localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify([...lsData, data]));
  } else {
    localStorage.setItem(
      FAVORITES_LS_KEY,
      JSON.stringify(lsData.filter(item => item._id !== data._id))
    );
  }
}

function openModal() {
  backgroundElement.classList.remove('hide');
}

function switchFromExcessesToRatingModal(id) {
  renderSetRatingModal(id);
}

backgroundElement.addEventListener('click', event => {
  const clickedElement = event.target;
  if (
    clickedElement.classList.contains('modal-background') ||
    clickedElement.classList.contains('modal_close_btn') ||
    clickedElement.parentElement.classList.contains('modal_close_btn')
  ) {
    closeModal();
  }
});

export function closeModal() {
  backgroundElement.classList.add('hide');
  backgroundElement.innerHTML = '';
}
