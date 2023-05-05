new Swiper('.testimonials-wrapper', {
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn'
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
    autoplay: true,
    
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