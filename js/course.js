const headerLink = Array.from(
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
});
