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

//buttons for slider event-others section

const slider = document.querySelector('.event-others__items');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', () => {
    const currentScrollPos = slider.scrollLeft;
    const slideWidth = slider.clientWidth;
    const nextSlidePos = currentScrollPos + slideWidth;
    slider.scrollTo({
        left: nextSlidePos,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    const currentScrollPos = slider.scrollLeft;
    const slideWidth = slider.clientWidth;
    const prevSlidePos = currentScrollPos - slideWidth;
    slider.scrollTo({
        left: prevSlidePos,
        behavior: 'smooth'
    });
});
