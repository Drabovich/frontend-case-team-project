/** START Accordion block other page course */
const titles = Array.from(document.querySelectorAll(".program__left-header"));
const contents = document.querySelectorAll(".program__left-text");

titles.forEach((item) =>
    item.addEventListener("click", () => {
        const activeContent = document.querySelector("#" + item.dataset.tab);

        if (activeContent.classList.contains("active")) {
            activeContent.classList.remove("active");
            item.classList.remove("active");
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach((element) => {
                element.classList.remove("active");
                element.style.maxHeight = 0;
            });
            titles.forEach((element) => element.classList.remove("active"));
            item.classList.add("active");
            activeContent.classList.add("active");
            activeContent.style.maxHeight = activeContent.scrollHeight + "px";
        }
    })
);

document.querySelector('[data-tab="tab-1"]').classList.add("active");
document.querySelector("#tab-1").classList.add("active");
document.querySelector("#tab-1").style.maxHeight =
    document.querySelector("#tab-1").scrollHeight + "px";
/** END Accordion block other page course */

/** START Swiper Slider block testimonials page course */
var swiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".testimonials-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonials-next",
        prevEl: ".testimonials-prev",
    },
});
/** END Swiper Slider block testimonials page course */

/** START Swiper Slider block other page course */
var swiper = new Swiper(".otherSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".other__nav-next",
        prevEl: ".other__nav-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        980: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
/** END Swiper Slider block other page course */
