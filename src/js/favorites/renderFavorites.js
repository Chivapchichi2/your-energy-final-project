const favoritesList = document.querySelector('.favorites-list');
const emptyStorageMsg = document.querySelector('.favorites-error-message');
// const filterList = document.querySelector('.exercises');

const exercisesData = [
  {
    _id: '64f389465ae26083f39b183e',
    bodyPart: 'back',
    equipment: 'cable',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0180.gif',
    name: 'cable low seated row',
    target: 'upper back',
    description:
      'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
    rating: 4.17,
    burnedCalories: 284,
    time: 3,
    popularity: 1343,
  },
];

const data = JSON.stringify(exercisesData);

localStorage.setItem('exercisesData', data);

function renderFavorites() {
  const localData = JSON.parse(localStorage.getItem('exercisesData'));
  console.log(localData);

  if (!localData) {
    emptyStorageMsg.style.display = 'block';
  } else {
    const markup = localData
      .map(({ _id, name, burnedCalories, bodyPart, target }) => {
        return `
    <li class="body_parts__item" id=${_id}>
        <div class="headline_flexbox">
          <div class="grade_flexbox">
          <div class="body_parts_remove-wraper">
              <span class="body_parts__item-type">WORKOUT</span>
              <button type="button" class="remove-btn"><svg
                class="remove-svg"
                width="16px"
                height="16px"
              >
                <use href="../img/sprite.svg#icon-remove-icon"></use>
              </svg>
              </button>
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

          <h3 class="body_parts__excercise-name">${name}</h3>
        </div>

        <ul class="body_parts__info">
          <li class="body_parts__info-item">
            <span class="body_parts__info-item-key">Burned calories:</span>
            <span class="body_parts__info-item-value">${burnedCalories}</span>
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
      </li>
    `;
      })
      .join('');

    favoritesList.insertAdjacentHTML('beforeend', markup);
  }
}
renderFavorites();
