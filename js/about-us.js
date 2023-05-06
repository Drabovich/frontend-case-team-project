new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: false,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    initialSlide: 0,
    speed: 900,
    loop: true,
});