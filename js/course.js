/*const headerLink = Array.from(
    document.querySelectorAll(".program__left-header")
);

headerLink.forEach((el) => {
    el.addEventListener("click", () => {
        const icon = el.querySelector(".program__left-icon");
        const textElement = el.parentElement.querySelector(
            ".program__left-text"
        );
        icon.classList.toggle("hide");
        textElement.classList.toggle("hidden");
    });
});*/
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
