import './style.css'
import 'swiper/swiper-bundle.css';


import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  slideClass: 'swiper__slide',
  wrapperClass: 'swiper__wrapper',

  breakpoints: {
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16,
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 8,
    },

    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 8
    }
  },

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
  },


});

