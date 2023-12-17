import apiManager from '../service/apiManager';
import { closeModal } from './modal';
import { Utils } from '../utils/utils.js';
const backgroundElement = document.querySelector('.modal-background');

function changeRatingNumberTemplate(checked, rating) {
  const modalRating = document.querySelector('.modal_rating');

  modalRating.innerHTML = `${rating}.0`;
}

function addEventListenerOnStars() {
  const checkboxes = document.querySelectorAll('input[name="rate"]');

  checkboxes.forEach(function (checkbox, index) {
    checkbox.addEventListener('change', function (event) {
      setCheckedAttribute(checkboxes, checkbox, index);
      changeRatingNumberTemplate(event.target.checked, event.target.value);
    });
  });
}

function addEventListenerOnSubmit() {
  const form = document.querySelector('.modal_set_rating_form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let preparedData = { id: form.dataset.id };
    formData.forEach((value, key) => {
      preparedData = {
        ...preparedData,
        [key]: key === 'rate' ? Number(value) : value,
      };
    });
    sendRatingData(preparedData);
  });
}

function setCheckedAttribute(checkboxes, checkbox, index) {
  if (!checkbox.classList.contains('checked')) {
    for (let i = 0; i < index; i++) {
      checkboxes[i + 1].classList.add('checked');
    }
  } else {
    for (let i = index + 1; i < checkboxes.length; i++) {
      checkboxes[i].classList.remove('checked');
    }
  }
}

async function sendRatingData(data) {
  console.log('data to send', data);
  await apiManager.sendRating(data);
  closeModal();
}

export function renderSetRatingModal(id) {
  const template = `<div class="modal_set_rating">
    <button class="modal_close_btn" type="button">
      <svg
        class="modal_close_btn_icon"
        width="24"
        height="24"
        aria-label="heart icon"
      >
        <use href="${Utils.getPath()}#icon-close"></use>
      </svg>
    </button>
    <form class="modal_set_rating_form" data-id="${id}">
      <p class="modal_rating_title">Rating</p>
      <div class="modal_set_rating_wrap">
        <span class="modal_rating">1.0</span>
        <label>
          <input
            class="visually-hidden checked"
            type="radio"
            name="rate"
            value="1"
            checked
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="2"
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="3"
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="4"
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="5"
          />
          ★
        </label>
      </div>

      <input
        class="modal_enter_email"
        type="email"
        name='email'
        placeholder="Email"
        required
      />
      <textarea
        class="modal_enter_comment"
        name="review"
        placeholder="Your comment"
        required
      ></textarea>

      <button class="modal_submit_rating_btn" type="submit">Send</button>
    </form>
  </div>`;

  backgroundElement.innerHTML = template;

  addEventListenerOnStars();
  addEventListenerOnSubmit();
}
