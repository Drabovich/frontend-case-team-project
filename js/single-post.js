var swiperPosts = new Swiper(".swiperPosts", {
  spaceBetween: 30,
  effect: 'slide', 
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 30,
      },
  }
});




