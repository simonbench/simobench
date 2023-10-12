let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active')
  hamburger.classList.toggle('active')
});

document.querySelectorAll('a').forEach(n => n.addEventListener('click', () => {
  menu.classList.remove('active')
  hamburger.classList.remove('active')
}));





var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });