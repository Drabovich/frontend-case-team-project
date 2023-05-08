//accordition 

const titles = document.querySelectorAll('.event-about__subtitle');
const contents = document.querySelectorAll('.event-about__text');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        contents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    

    breakpoints: {
        
        // when window width is >= 480px
        590: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
   
    // Navigation arrows
    navigation: {
        nextEl: '.arrow--next',
        prevEl: '.arrow--prev',
    },

});