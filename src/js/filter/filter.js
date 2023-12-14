import {
  handleMusclesFilter,
  handleBodyPartsFilter,
  handleEquipmentFilter,
  renderMusclesOnLoad,
} from './handlers';
import { refs } from './refs';

export function filterBtnsListeners() {
  //render muscles on page load
  renderMusclesOnLoad();
  //muscules
  refs.musclesFilter.addEventListener('click', handleMusclesFilter);

  //body parts
  refs.bodyPartsFilter.addEventListener('click', handleBodyPartsFilter);

  //equipment
  refs.equipmentFilter.addEventListener('click', handleEquipmentFilter);
}
