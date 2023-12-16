/**
 * Exercise class
 */
export class Exercise {
  constructor(container) {
    this.container = container;
  }

  /**
   * Render exercise
   * @param arr
   */
  render(arr) {
    const markup = arr
      .map(item => {
        const { bodyPart, burnedCalories, name, target, _id, rating, gifUrl } =
          item;
        return `
      <li class="body_parts__item">
        <div class="headline_flexbox">
          <div class="grade_flexbox">
            <span class="body_parts__item-type">WORKOUT</span>
            <div class="body_parts__item-gradebox">
              <span class="body_parts__item-grade">${rating}</span>
              <svg class="body_parts__item-grade-svg" width="18px" height="18px">
                <use href="../img/sprite.svg#icon-star-icon"></use>
              </svg>
            </div>
          </div>
          <div class="body_parts-start-flexbox">
            <button class="next-btn" data-id="${_id}">Start
              <svg class="next-btn-svg" width="16px" height="16px">
                <use href="../img/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="body_parts__excercise-flexbox">
          <svg class="body_parts__excercise-svg" width="24px" height="24px">
            <use href="${gifUrl}"></use>
          </svg>
          <h3 class="body_parts__excercise-name">${name}</h3>
        </div>
        <ul class="body_parts__info">
          <li class="body_parts__info-item">
            <span class="body_parts__info-item-key">Burned calories:</span>
            <span class="body_parts__info-item-value">${burnedCalories}/...</span>
          </li>
          <li class="body_parts__info-item">
            <span class="body_parts__info-item-key">Body part:</span>
            <span class="body_parts__info-item-value">${bodyPart}</span>
          </li>
          <li class="body_parts__info-item">
            <span class="body_parts__info-item-key">Target:</span>
            <span class="body_parts__info-item-value">${target}</span>
          </li>
        </ul>
      </li>`;
      })
      .join('');

    this.container.innerHTML = markup;
  }
}
