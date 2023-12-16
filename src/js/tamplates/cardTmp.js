import { Utils } from '../utils/utils.js';

export class FilterRenderer {
  constructor(container) {
    this.container = container;
  }

  render(arr) {
    const markup = arr
      .map(item => {
        const imgMarkup = item.imgURL
          ? `<img class="filter__list__muscles-img" src="${item.imgURL}" alt="${item.name}" />`
          : '';

        return `<li class="filter__list__muscles" data-name="${item.name}">
                      <div class="filter__list__descr-wrapper">
                          <p class="filter__list__muscles-name">${Utils.firstToUpper(
                            item.name
                          )}</p>
                          <span class="filter__list__filter-tag">${
                            item.filter
                          }</span>
                      </div>
                      ${imgMarkup}
                </li>`;
      })
      .join('');

    this.container.innerHTML = markup;
  }
}
