import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation])
const swiperCatalog = new Swiper('.catalog__slider', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  freeMode: true,
  // breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperDoors = new Swiper('.inside-door__swiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  freeMode: true,
  // breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});