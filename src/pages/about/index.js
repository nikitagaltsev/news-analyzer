import './style.css'
import 'swiper/swiper-bundle.css';


import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  slideClass: 'swiper__slide',
  wrapperClass: 'swiper__wrapper',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 16,
  // centeredSlides: true,
  // loop: true,
  // loopedSlides: 3,

  pagination: {
    el: '.swiper__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper__bullet',
    bulletActiveClass: 'swiper__bullet_active'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

