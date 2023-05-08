var swiperPosts = new Swiper(".swiperPosts", {
  spaceBetween: 30,
  effect: 'slide', 
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
 
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 30,
      },
  }
});




