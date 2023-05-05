new Swiper('.team-slider', {
    navigation: {
        nextEl: '.team-swiper-button-next',
        prevEl: '.team-swiper-button-prev'
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: true,
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    initialSlide: 0,
    speed: 500,
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        390: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1201: {
            slidesPerView: 4,
        }        
    },
});