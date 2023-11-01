
// Navigation
const mobileNav = document.querySelector('nav.mobile');
const menuElements = document.querySelector('.nav-icon');

  menuElements.addEventListener('click', () => {
      mobileNav.classList.toggle('--open');
  })

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});