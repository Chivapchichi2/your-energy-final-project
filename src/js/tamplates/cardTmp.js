const cardsList = document.querySelector('.body_parts__list');

export function renderCards(promis) {
  promis.then(data => {
    console.log('data:', data);
    const markup = data.results
      .map(item => {
        return ` <li class="body_parts__item">
  <div class="headline_flexbox">
    <div class="grade_flexbox">
      <span class="body_parts__item-type">WORKOUT</span>
      <div class="body_parts__item-gradebox">
        <span class="body_parts__item-grade">4.0</span>
        <svg
          class="body_parts__item-grade-svg"
          width="18px"
          height="18px"
        >
          <use href="../img/sprite.svg#icon-star-icon"></use>
        </svg>
      </div>
    </div>
    <div class="body_parts-start-flexbox">
      <button class="next-btn">Start
        <svg class="next-btn-svg" width="16px" height="16px">
          <use href="../img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  </div>
  <div class="body_parts__excercise-flexbox">

    <svg class="body_parts__excercise-svg" width="24px" height="24px">
      <use href="../img/sprite.svg#icon-running-stick-figure"></use>
    </svg>

    <h3 class="body_parts__excercise-name">Air bike</h3>
  </div>

  <ul class="body_parts__info">
    <li class="body_parts__info-item">
      <span class="body_parts__info-item-key">Burned calories:</span>
      <span class="body_parts__info-item-value">312/...</span>
    </li>
    <li class="body_parts__info-item">
      <span class="body_parts__info-item-key">Body part:</span>
      <span class="body_parts__info-item-value">Waist</span>
    </li>
    <li class="body_parts__info-item">
      <span class="body_parts__info-item-key">Target:</span>
      <span class="body_parts__info-item-value">Abs</span>
    </li>
  </ul>
</li>`;
      })
      .join('');

    return (cardsList.innerHTML = markup);
  });
}
