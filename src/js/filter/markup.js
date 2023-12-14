const filterList = document.querySelector('.filter__list');

//markup for muscules
export function renderMusclesFilter(arr) {
  const markup = arr
    .map(item => {
      return ` <li class='filter__list__muscles'>
                    <div class="filter__list__descr-wrapper">
                        <p class="filter__list__muscles-name">${firstToUpper(
                          item.name
                        )}</p>
                        <span class="filter__list__filter-tag">${
                          item.filter
                        }</span>
                    </div>
                    <img class="filter__list__muscles-img" src="${
                      item.imgURL
                    }"/>
                </li>`;
    })
    .join('');

  return (filterList.innerHTML = markup);
}
//markup for body parts and equipment
export function renderBodyEquipmentFilter(arr) {
  const markup = arr
    .map(item => {
      return ` <li class='filter__list__muscles'>
                      <div class="filter__list__descr-wrapper">
                          <p class="filter__list__muscles-name">${firstToUpper(
                            item.name
                          )}</p>
                          <span class="filter__list__filter-tag">${
                            item.filter
                          }</span>
                      </div>
                      <img class="filter__list__muscles-img" src="${
                        item.imgURL
                      }"/>
                  </li>`;
    })
    .join('');

  return (filterList.innerHTML = markup);
}

//make first letter in Uppercase
function firstToUpper(string) {
  return string[0].toUpperCase() + string.substring(1);
}
