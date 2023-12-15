export class Loader {
  constructor() {
    this.element = document.querySelector('.loader');
  }

  static show() {
    this.element.classList.remove('hidden');
  }

  static hide() {
    this.element.classList.add('hidden');
  }
}
