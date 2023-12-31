/**
 * Exercise class
 */
import { Utils } from '../utils/utils.js';

export class Exercise {
  constructor(container, favorite = false) {
    this.container = container;
    this.favorite = favorite;
    this.path = Utils.getPath();
  }

  /**
   * Render exercise
   * @param arr
   */
  render(arr) {
    const markup = arr
      .map(item => {
        const {
          bodyPart,
          burnedCalories,
          name,
          target,
          _id,
          rating,
          gifUrl,
          time,
        } = item;
        const ratingMarkup = this.favorite
          ? `<button class="bin" data-id="${_id}">
          
              <svg class="next-btn-svg" width="16" height="16">
                <use class="favorites-delete-icon" href="${this.path}#icon-bin"></use>
              </svg>
            </button>`
          : `
              <span class="body_parts__item-grade">${rating}</span>
              <div class="body_parts__item-grade-svg-wrap">
              <svg class="body_parts__item-grade-svg" width="18" height="18">
                <use href="${this.path}#icon-star-icon"></use>
              </svg></div>`;
        return `
      <li class="body_parts__item favorites_body_parts__item">
        <div class="headline_flexbox">
          <div class="grade_flexbox">
            <span class="body_parts__item-type">WORKOUT</span>
            <div class="body_parts__item-gradebox">
              ${ratingMarkup}
            </div>
          </div>
          <div class="body_parts-start-flexbox">
            <button class="next-btn" data-id="${_id}">Start
              <svg class="next-btn-svg" width="16" height="16">
                <use href="${this.path}#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class='body_parts__excercise-flexbox'>
          <div class="body_parts__exercise-icon-container">
            <svg class='body_parts__excercise-svg' width='24' height='24'>
              <use href='${this.path}#icon-running-stick-figure'></use>
            </svg>
          </div>
          <h3 class='body_parts__excercise-name'>${Utils.firstToUpper(
            trimName(name)
          )}</h3>
        </div>
        <ul class='body_parts__info'>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Burned calories: </span>
            <span class='body_parts__info-item-value'> ${
              window.innerWidth < 1440
                ? trimCardInfo(burnedCalories + '/' + time + 'min', 5)
                : burnedCalories + '/' + time + 'min'
            }</span>
          </li>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Body part: </span>
            <span class='body_parts__info-item-value'> ${
              window.innerWidth < 1440
                ? Utils.firstToUpper(trimCardInfo(bodyPart, 5))
                : Utils.firstToUpper(bodyPart)
            }</span>
          </li>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Target: </span>
            <span class='body_parts__info-item-value'> ${
              window.innerWidth < 1440
                ? Utils.firstToUpper(trimCardInfo(target, 3))
                : Utils.firstToUpper(target)
            }</span>
          </li>
        </ul>
      </li>`;
      })
      .join('');

    this.container.innerHTML = markup;
  }
}

function trimName(str) {
  if (str.length >= 20) {
    return str.substring(0, 20 - 3) + '...';
  }
  return str;
}
function trimCardInfo(str, charNum) {
  if (str.length > charNum) {
    return str.substring(0, charNum - 1) + '...';
  }
  return str;
}
