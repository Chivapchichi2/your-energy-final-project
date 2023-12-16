import apiManager from '../service/apiManager';
import { FilterRenderer } from '../tamplates/cardTmp.js';
import { refs } from './refs';
import { Exercise } from '../tamplates/exerciseTmp.js';
import { Utils } from '../utils/utils.js';

const filterRenderer = new FilterRenderer(refs.filterList);
const exercise = new Exercise(refs.filterList);

let activeFilter = 'Muscles';

const filters = {
  Muscles: {
    button: refs.musclesFilter,
    className: 'filter__btn__active',
  },
  'Body parts': {
    button: refs.bodyPartsFilter,
    className: 'filter__btn__active',
  },
  Equipment: {
    button: refs.equipmentFilter,
    className: 'filter__btn__active',
  },
};

function handleFilter(type) {
  toggleActiveBtn(type);
  disableBtns(type);

  apiManager.getFiltersOfExercises(type).then(data => {
    filterRenderer.render(data.results);
  });
}

//switch class "active" between buttons
function toggleActiveBtn(str) {
  switch (str) {
    case 'Muscles':
      refs.musclesFilter.classList.add('filter__btn__active');
      refs.bodyPartsFilter.classList.remove('filter__btn__active');
      refs.equipmentFilter.classList.remove('filter__btn__active');
      break;
    case 'Body parts':
      refs.musclesFilter.classList.remove('filter__btn__active');
      refs.bodyPartsFilter.classList.add('filter__btn__active');
      refs.equipmentFilter.classList.remove('filter__btn__active');
      break;
    case 'Equipment':
      refs.musclesFilter.classList.remove('filter__btn__active');
      refs.bodyPartsFilter.classList.remove('filter__btn__active');
      refs.equipmentFilter.classList.add('filter__btn__active');
      break;
    default:
      break;
  }
}
//disable button if clicked
function disableBtns(str) {
  switch (str) {
    case 'Muscles':
      refs.musclesFilter.disabled = true;
      refs.bodyPartsFilter.disabled = false;
      refs.equipmentFilter.disabled = false;
      break;
    case 'Body parts':
      refs.musclesFilter.disabled = false;
      refs.bodyPartsFilter.disabled = true;
      refs.equipmentFilter.disabled = false;
      break;
    case 'Equipment':
      refs.musclesFilter.disabled = false;
      refs.bodyPartsFilter.disabled = false;
      refs.equipmentFilter.disabled = true;
      break;
    default:
      break;
  }
}

export function handleMusclesFilter() {
  handleFilter('Muscles');
  activeFilter = 'muscles';
  toggleInputAndSpecialSign();
}

export function handleBodyPartsFilter() {
  handleFilter('Body parts');
  activeFilter = 'bodypart';
  toggleInputAndSpecialSign();
}

export function handleEquipmentFilter() {
  handleFilter('Equipment');
  activeFilter = 'equipment';
  toggleInputAndSpecialSign();
}

export function handleCardClick(e) {
  const card = e.target.closest('.filter__list__muscles');
  if (!card) return;
  const filter = card.dataset.name;
  console.log(card.dataset.name);

  apiManager.getExercisesByFilters('', filter, activeFilter).then(data => {
    console.log(data);
    exercise.render(data.results);
  });
  toggleInputAndSpecialSign(Utils.firstToUpper(filter));
}

function toggleInputAndSpecialSign(text = '') {
  if (text === '') {
    refs.inputHolder.classList.add('hidden');
    refs.specialSign.classList.add('hidden');
  } else {
    refs.inputHolder.classList.remove('hidden');
    refs.specialSign.classList.remove('hidden');
  }
  refs.specialText.textContent = text;
}
