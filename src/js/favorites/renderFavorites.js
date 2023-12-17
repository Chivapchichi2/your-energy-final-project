import { Exercise } from '../tamplates/exerciseTmp.js';

const favoritesList = document.querySelector('.favorites-list');
const emptyStorageMsg = document.querySelector('.favorites-error-message');
// const filterList = document.querySelector('.exercises');

const exercise = new Exercise(favoritesList, true);

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
    exercise.render(localData);
  }
}
renderFavorites();
