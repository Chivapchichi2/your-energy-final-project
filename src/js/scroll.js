function checkScrollButton(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTopBtn.classList.remove('showBtn')
    } else {
      scrollToTopBtn.classList.add('showBtn')  
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
let rootElement;

export default function setupScroller(){
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  let target = document.querySelector(".observer-area");
  let observer = new IntersectionObserver(checkScrollButton);
  observer.observe(target);
  rootElement = document.documentElement;
  scrollToTopBtn.addEventListener("click", scrollToTop);
}
