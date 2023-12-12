const burger = document.querySelector('.burger');
burger.addEventListener('click', changeBurger(e));

function changeBurger(e) {
  e.classList.toggle('change');
}
