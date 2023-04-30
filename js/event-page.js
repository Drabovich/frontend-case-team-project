//accordition 

const titles = document.querySelectorAll('.about-event__subtitle');
const contents = document.querySelectorAll('.about-event__text');

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
