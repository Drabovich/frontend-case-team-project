const main = document.querySelector("main");
const page = window.location.pathname;

if (page !== "/index.html" && page !== "/") {
    main.insertAdjacentHTML(
        "beforebegin",
        `
          <header class="header-main">
            <div class="header-main__container container1">
                <div class="header-main__burger">
                        <div class="header-main__butger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                <div class="header-main__menu">
                    <a href="/" class="header-main__logo"><img src="/images/header-footer/logo-black.svg" alt="logo"></a>
                    <nav class="header-main__nav">
                      <ul class="header-main__nav-list">
                        <li><a class="header-main__nav-link" href="/pages/about-us.html">About Us</a></li>
                        <li><a class="header-main__nav-link" href="/pages/courses.html">Courses</a></li>
                        <li><a class="header-main__nav-link" href="/pages/events-list.html">Events</a></li>
                        <li><a class="header-main__nav-link" href="/pages/blog.html">Blog</a></li>
                        <li><a class="header-main__nav-link" href="/pages/contacts.html">Contacts</a></li>
                      </ul>
                    </nav>
                </div>
                <a href="tel:4055550128" class="header-main__btn">Get consultation</a>
                <button class="header-main__reg" type="button" id="login"><img src="/images/header-footer/person.svg" alt="">Log in / Register</button>
            </div>
        </header>
        `
    );

    main.insertAdjacentHTML(
        "afterend",
        `
    <footer class="footer">
            <div class="footer__container container1">
                <div class="footer__top">
                    <div class="footer__column footer__column_01">
                        <div class="footer__logo"><a href="/"><img src="/images/header-footer/logo-white.svg" alt="footer-logo"></a></div>
                        <p class="footer__text text_f1">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.</p>
                        <div class="footer__soc">
                            <a target="blank" href="https://www.facebook.com/" class="footer__soc-link"><img src="/images/header-footer/social01.svg" alt="social"></a>
                            <a target="blank" href="https://twitter.com/" class="footer__soc-link"><img src="/images/header-footer/social02.svg" alt="social"></a>
                            <a target="blank" href="https://www.youtube.com" class="footer__soc-link"><img src="/images/header-footer/social03.svg" alt="social"></a>
                            <a target="blank" href="https://web.telegram.org" class="footer__soc-link"><img src="/images/header-footer/social04.svg" alt="social"></a>
                            <a target="blank" href="https://www.instagram.com" class="footer__soc-link"><img src="/images/header-footer/social05.svg" alt="social"></a>
                            <a target="blank" href="https://www.linkedin.com" class="footer__soc-link"><img src="/images/header-footer/social06.svg" alt="social"></a>
                        </div>
                    </div>
                    <nav class="footer__column footer__column_02">
                        <h4 class="footer__title title_f1">Site Map</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="/pages/about-us.html">About Us</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Courses</a></li>
                            <li><a class="footer__link link_f1" href="/pages/events-list.html">Events</a></li>
                            <li><a class="footer__link link_f1" href="/pages/blog.html">Blog</a></li>
                            <li><a class="footer__link link_f1" href="/pages/contacts.html">Contacts</a></li>
                        </ul>
                    </nav>
                    <div class="footer__column footer__column_03">
                        <h4 class="footer__title title_f1">Courses</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Marketing</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Management</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">HR & Recruting</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Design</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Development</a></li>
                        </ul>
                    </div>
                    <dl class="footer__column footer__column_04">
                        <dt class="footer__title title_f1">Contact Us</dt>
                        <dd class="footer__list">
                            <a href="tel:4055550128" class="footer__link footer__link_desc link_f1"><img src="/images/header-footer/phone-black.svg" alt="phone-black">(405) 555-0128</a>
                            <a href="mailto:hello@createx.com" class="footer__link footer__link_desc link_f1"><img src="/images/header-footer/email.svg" alt="email">hello@createx.com</a>
                        </dd>
                    </dl>
                    <form action="#" name="user-sign-up" class="footer__column footer__column_05">
                        <h4 class="footer__title title_f1">Sign up to our newsletter</h4>
                        <div class="footer__input">
                            <input type="email" required placeholder="Email address">
                            <button type="submit" class="footer__input-btn"></button>
                        </div>
                        <p class="footer__rule text_f1">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </form>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom-container container1">
                    <p class="footer__copiright text_f1">© All rights reserved. Made with by <img src="/images/header-footer/heart.svg" alt="heart"> Createx Studio</p>
                    <button class="footer__bottom-btn title_f1" type="button">GO TO TOP</button>
                </div>
            </div>
        </footer>
    <div class="popup" id="popup">
    <div class="popup__back" id="popup__back">
    <div class="popup__wrapper" id="popup__wrapper">
        <div class="popup__close" id="popup__close">X</div>
        <div class="popup__title">Sign in</div>
        <div class="popup__text">
            Sign in to your account using email and password
            provided during registration.
        </div>
        <form action="#" class="popup__form">
            <p class="popup__name">Email</p>
            <input
                type="text"
                class="popup__email"
                placeholder="Your working email"
            />
            <p class="popup__name">Password</p>
            <input type="password" class="popup__pwd" placeholder="********"/>
            <button class="popup__btn">Sign in</button>
        </form>
    </div>
</div>
</div>
    `
    );
} else {
    main.insertAdjacentHTML(
        "beforebegin",
        `
        <header class="header-main">
            <div class="header-main__container container1">
                <div class="header-main__burger">
                        <div class="header-main__butger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                <div class="header-main__menu">
                    <a href="/" class="header-main__logo"><img src="/images/header-footer/logo-black.svg" alt="logo"></a>
                    <nav class="header-main__nav">
                      <ul class="header-main__nav-list">
                        <li><a class="header-main__nav-link" href="/pages/about-us.html">About Us</a></li>
                        <li><a class="header-main__nav-link" href="/pages/courses.html">Courses</a></li>
                        <li><a class="header-main__nav-link" href="/pages/events-list.html">Events</a></li>
                        <li><a class="header-main__nav-link" href="/pages/blog.html">Blog</a></li>
                        <li><a class="header-main__nav-link" href="/pages/contacts.html">Contacts</a></li>
                      </ul>
                    </nav>
                </div>
                <a href="tel:4055550128" class="header-main__btn">Get consultation</a>
                <button class="header-main__reg" type="button" id="login"><img src="/images/header-footer/person.svg" alt="">Log in / Register</button>
            </div>
        </header>
      `
    );

    main.insertAdjacentHTML(
        "afterend",
        `
    <footer class="footer">
            <div class="footer__container container1">
                <div class="footer__top">
                    <div class="footer__column footer__column_01">
                        <div class="footer__logo"><a href="/"><img src="/images/header-footer/logo-white.svg" alt="footer-logo"></a></div>
                        <p class="footer__text text_f1">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.</p>
                        <div class="footer__soc">
                            <a target="blank" href="https://www.facebook.com/" class="footer__soc-link"><img src="/images/header-footer/social01.svg" alt="social"></a>
                            <a target="blank" href="https://twitter.com/" class="footer__soc-link"><img src="/images/header-footer/social02.svg" alt="social"></a>
                            <a target="blank" href="https://www.youtube.com" class="footer__soc-link"><img src="/images/header-footer/social03.svg" alt="social"></a>
                            <a target="blank" href="https://web.telegram.org" class="footer__soc-link"><img src="/images/header-footer/social04.svg" alt="social"></a>
                            <a target="blank" href="https://www.instagram.com" class="footer__soc-link"><img src="/images/header-footer/social05.svg" alt="social"></a>
                            <a target="blank" href="https://www.linkedin.com" class="footer__soc-link"><img src="/images/header-footer/social06.svg" alt="social"></a>
                        </div>
                    </div>
                    <nav class="footer__column footer__column_02">
                        <h4 class="footer__title title_f1">Site Map</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="/pages/about-us.html">About Us</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Courses</a></li>
                            <li><a class="footer__link link_f1" href="/pages/events-list.html">Events</a></li>
                            <li><a class="footer__link link_f1" href="/pages/blog.html">Blog</a></li>
                            <li><a class="footer__link link_f1" href="/pages/contacts.html">Contacts</a></li>
                        </ul>
                    </nav>
                    <div class="footer__column footer__column_03">
                        <h4 class="footer__title title_f1">Courses</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Marketing</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Management</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">HR & Recruting</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Design</a></li>
                            <li><a class="footer__link link_f1" href="/pages/courses.html">Development</a></li>
                        </ul>
                    </div>
                    <dl class="footer__column footer__column_04">
                        <dt class="footer__title title_f1">Contact Us</dt>
                        <dd class="footer__list">
                            <a href="tel:4055550128" class="footer__link footer__link_desc link_f1"><img src="/images/header-footer/phone-black.svg" alt="phone-black">(405) 555-0128</a>
                            <a href="mailto:hello@createx.com" class="footer__link footer__link_desc link_f1"><img src="/images/header-footer/email.svg" alt="email">hello@createx.com</a>
                        </dd>
                    </dl>
                    <form action="#" name="user-sign-up" class="footer__column footer__column_05">
                        <h4 class="footer__title title_f1">Sign up to our newsletter</h4>
                        <div class="footer__input">
                            <input type="email" required placeholder="Email address">
                            <button type="submit" class="footer__input-btn"></button>
                        </div>
                        <p class="footer__rule text_f1">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </form>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom-container container1">
                    <p class="footer__copiright text_f1">© All rights reserved. Made with by <img src="/images/header-footer/heart.svg" alt="heart"> Createx Studio</p>
                    <button class="footer__bottom-btn title_f1" type="button">GO TO TOP</button>
                </div>
            </div>
        </footer>
    <div class="popup" id="popup">
        <div class="popup__back" id="popup__back">
    <div class="popup__wrapper" id="popup__wrapper">
        <div class="popup__close" id="popup__close">X</div>
        <div class="popup__title">Sign in</div>
        <div class="popup__text">
            Sign in to your account using email and password
            provided during registration.
        </div>
        <form action="#" class="popup__form">
            <p class="popup__name">Email</p>
            <input
                type="text"
                class="popup__email"
                placeholder="Your working email"
            />
            <p class="popup__name">Password</p>
            <input type="password" class="popup__pwd" placeholder="********"/>
            <button class="popup__btn">Sign in</button>
        </form>
    </div>
</div>
</div>
    `
    );
}

const login = document.getElementById("login"),
    popup = document.getElementById("popup"),
    closePopup = document.getElementById("popup__close"),
    popupBack = document.getElementById("popup__back");
(body = document.querySelector("body")),
    (burger = document.querySelector(".header-main__burger")),
    (goTo = document.querySelector(".footer__bottom-btn")),
    (nav = document.querySelector(".header-main__nav"));
let scrollWidth = window.innerWidth - document.body.clientWidth; // Получаем ширину полосы прокрутки
burger.addEventListener("click", () => {
    nav.classList.toggle("header-main__nav_active");
    burger.classList.toggle("header-main__burger_active");
});
goTo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        let: 0,
        behavior: "smooth",
    });
});

window.addEventListener("resize", replaceEl);
replaceEl();
function replaceEl(iWidth) {
    iWidth = window.innerWidth;
    const regBtn = document.querySelector(".header-main__reg"),
        header = document.querySelector(".header-main__container"),
        logo = document.querySelector(".header-main__logo");
    if (768 < iWidth && iWidth < 992) {
        nav.before(logo);
        nav.append(regBtn);
    } else if (768 > iWidth) {
        nav.prepend(logo);
        nav.append(regBtn);
    } else if (iWidth > 992) {
        nav.classList.remove("header-main__nav_active");
        burger.classList.remove("header-main__burger_active");
        nav.before(logo);
        header.append(regBtn);
    }
}

login.addEventListener("click", () => {
    popup.classList.add("_active");
    popupBack.classList.add("_active");
    body.style.padding = `0 ${scrollWidth}px 0 0`; // Добавляем паддинг справа в размере ширины полосы прокрутки для всей страницы
    body.classList.add("_lock"); // Блокируем прокрутку страницы при окрытии модального окна

    closePopup.addEventListener("click", () => {
        popup.classList.remove("_active");
    });
});

document.addEventListener("click", (el) => {
    if (el.target === closePopup || el.target === popupBack) {
        body.style.padding = `0`;
        popup.classList.remove("_active");
        popupBack.classList.remove("_active");
        body.classList.remove("_lock");
    }
});

function elementFromHtml(html) {
    /*function for contain html*/
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}