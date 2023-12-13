function burgerButton() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.nav-bar-mobile');

  burger.addEventListener('click', function changeBurger() {
    burger.classList.toggle('change');
    mobileMenu.classList.toggle('is-hidden');
  });
}
export { burgerButton };
