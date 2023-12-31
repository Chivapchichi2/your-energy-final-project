import apiManager from '../service/apiManager';
import { FilterRenderer } from '../tamplates/cardTmp.js';
import { refs } from './refs';
import { Exercise } from '../tamplates/exerciseTmp.js';
import { Utils } from '../utils/utils.js';
import proxy from '../proxy/proxy.js';
import debounce from 'debounce';
import { pagination } from '../service/pagination.js';

const filterRenderer = new FilterRenderer(refs.filterList);
const exercise = new Exercise(refs.filterList);

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
  if (refs.musclesFilter && refs.bodyPartsFilter && refs.equipmentFilter) {
    toggleActiveBtn(type);
    disableBtns(type);
    refs.filterList.innerHTML = '';
    apiManager.resetPage();
    refs.paginationContainer.innerHTML = '';
    apiManager.getFiltersOfExercises(type).then(data => {
      filterRenderer.render(data.results);
    });
  }
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
  proxy.activeFilter = 'muscles';
  toggleInputAndSpecialSign();
}

export function handleBodyPartsFilter() {
  handleFilter('Body parts');
  proxy.activeFilter = 'bodypart';
  toggleInputAndSpecialSign();
}

export function handleEquipmentFilter() {
  handleFilter('Equipment');
  proxy.activeFilter = 'equipment';
  toggleInputAndSpecialSign();
}

export function handleCardClick(e) {
  const card = e.target.closest('.filter__list__muscles');
  if (!card) return;
  proxy.filterQuery = card.dataset.name;
  refs.filterList.innerHTML = '';
  apiManager.resetPage();
  apiManager
    .getExercisesByFilters('', proxy.filterQuery, proxy.activeFilter)
    .then(({ page, totalPages, results }) => {
      proxy.currentPage = page;
      proxy.totalPages = totalPages;
      apiManager.updatePage();
      exercise.render(results);
      pagination(refs.paginationContainer);
    });

  toggleInputAndSpecialSign(Utils.firstToUpper(proxy.filterQuery));
}

function toggleInputAndSpecialSign(text = '') {
  refs.noData?.classList.add('hidden');
  if (text === '') {
    refs.inputHolder?.classList.add('hidden');
    refs.specialSign?.classList.add('hidden');
  } else {
    refs.inputHolder?.classList.remove('hidden');
    refs.specialSign?.classList.remove('hidden');
  }
  if (refs.specialText) {
    refs.specialText.textContent = text;
  }
}

export const handleInput = debounce(e => {
  proxy.query = e.target.value;
  refs.filterList.innerHTML = '';
  renderCurrentPage();
  if(e.target.value !== '') {
    toggleIcons(true);
  }else {
    toggleIcons(false);
  }
}, proxy.debounceDelay);

export function renderCurrentPage() {
  apiManager
    .getExercisesByFilters(proxy.query, proxy.filterQuery, proxy.activeFilter)
    .then(({ page, totalPages, results }) => {
      proxy.currentPage = page;
      proxy.totalPages = totalPages;
      apiManager.updatePage();
      exercise.render(results);
      if (!results.length) {
        refs.noData.classList.remove('hidden');
      } else {
        refs.noData.classList.add('hidden');
      }
      pagination(refs.paginationContainer);
    });
}

function toggleIcons(isSearch) {
  if (isSearch) {
    refs.searchIcon.classList.add('hidden');
    refs.closeIcon.classList.remove('hidden');
  } else {
    refs.searchIcon.classList.remove('hidden');
    refs.closeIcon.classList.add('hidden');
  }
}

 export function handleClearClick() {
  if(refs.inputField.value === '') return;
  refs.inputField.value = '';
  proxy.query = '';
  renderCurrentPage();
  toggleIcons(false);
}
