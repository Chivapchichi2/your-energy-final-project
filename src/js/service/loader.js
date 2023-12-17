export class Loader {
  static element = document.querySelector('.loader');

  static show() {
    this.element.classList.remove('hidden');
  }

  static hide() {
    this.element.classList.add('hidden');
  }
}
