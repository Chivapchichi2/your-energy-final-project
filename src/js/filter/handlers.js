import apiManager from '../service/apiManager';
import { renderMusclesFilter, renderBodyEquipmentFilter } from './markup';
import { refs } from './refs';

//render muscles on btn click
export function handleMusclesFilter() {
  toggleActiveBtn(refs.musclesFilter.dataset.filterrequset);
  disableBtns(refs.musclesFilter.dataset.filterrequset);

  apiManager.getFiltersOfExercises('Muscles').then(data => {
    return renderMusclesFilter(data.results);
  });
}
//render bodyparts on btn click
export function handleBodyPartsFilter() {
  toggleActiveBtn(refs.bodyPartsFilter.dataset.filterrequset);
  disableBtns(refs.bodyPartsFilter.dataset.filterrequset);

  apiManager.getFiltersOfExercises('Body parts').then(data => {
    return renderBodyEquipmentFilter(data.results);
  });
}
//render equipment on btn click
export function handleEquipmentFilter() {
  toggleActiveBtn(refs.equipmentFilter.dataset.filterrequset);
  disableBtns(refs.equipmentFilter.dataset.filterrequset);

  apiManager.getFiltersOfExercises('Equipment').then(data => {
    return renderBodyEquipmentFilter(data.results);
  });
}
//load muscles on page load
export function renderMusclesOnLoad() {
  apiManager.getFiltersOfExercises('Muscles').then(data => {
    return renderMusclesFilter(data.results);
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
