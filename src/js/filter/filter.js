import {
  handleMusclesFilter,
  handleBodyPartsFilter,
  handleEquipmentFilter,
  handleCardClick,
  handleInput,
  handleClearClick
} from './handlers';
import { refs } from './refs';
import { ActionNames } from '../misc/names.js';

export function filterBtnsListeners() {
  //render muscles on page load
  handleMusclesFilter();
  //muscules
  refs.musclesFilter.addEventListener(ActionNames.CLICK, handleMusclesFilter);

  //body parts
  refs.bodyPartsFilter.addEventListener(
    ActionNames.CLICK,
    handleBodyPartsFilter
  );

  //equipment
  refs.equipmentFilter.addEventListener(
    ActionNames.CLICK,
    handleEquipmentFilter
  );

  //card click
  refs.filterList.addEventListener(ActionNames.CLICK, handleCardClick);

  refs.inputField.addEventListener('input', handleInput);
  refs.searchBtn.addEventListener('click', handleClearClick);
}

if (refs.musclesFilter && refs.bodyPartsFilter && refs.equipmentFilter) {
  filterBtnsListeners();
}
