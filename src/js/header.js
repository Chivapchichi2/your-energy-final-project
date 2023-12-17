document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;

  const menuLinks = document.querySelectorAll('.header-menu-link');


  menuLinks.forEach(link => {

    link.classList.remove('current-page');


    if (link.href === currentUrl) {

      link.classList.add('current-page');
    }
  });
});