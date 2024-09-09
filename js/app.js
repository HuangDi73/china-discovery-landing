// gallery__swiper
const swiper1 = new Swiper(".swiper1", {
    direction: "horizontal",
    spaceBetween: 24,
    slidesPerView: 3.5,

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },

    autoplay: {
        delay: 3000,
    },

    speed: 2000,

    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },

        480: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 3,
        },

        1400: {
            slidesPerView: 3.5,
        },
    },
});

// about__swiper
const swiper2 = new Swiper(".swiper2", {
    direction: "horizontal",
    spaceBetween: 30,
    slidesPerView: 2.1,

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },

    allowTouchMove: false,

    autoplay: {
        delay: 3000,
    },
    speed: 2000,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        767: {
            slidesPerView: 1.2,
        },

        992: {
            slidesPerView: 1.5,
        },

        1400: {
            slidesPerView: 2.5,
        },
    },
});

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

// Меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

// Прокрутка при клике
function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
    ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

        if (iconMenu.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
        e.preventDefault();
    }
}

// Перемещение элементов в history block
document.addEventListener("DOMContentLoaded", function () {
    const mediaQuery = window.matchMedia("(max-width: 1040px)");

    // Получаем все картинки
    const housesImage = document.querySelector(".history__houses");
    const monkeyImage = document.querySelector(".history__monkey");
    const monkeysImage = document.querySelector(".history__monkeys");

    // Получаем изначальные блоки
    const historyRight = document.querySelector(".history__right");
    const historyLeft = document.querySelector(".history__left");
    const historyTop = document.querySelector(".history__top");
    const historyBottom = document.querySelector(".history__bottom");
    const historyTitles = document.querySelector(".history__titles");
    const historyCircle = document.querySelector(".history__circle");

    // Создаём дополнительные блоки
    const historyImages = document.createElement("div");
    const historyImage1 = document.createElement("div");
    const historyImage2 = document.createElement("div");
    const historyImage = document.createElement("div");
    const historyStart = document.createElement("div");

    function handleScreenChange(event) {
        if (event.matches) {
            // Если экран меньше 1040px, перемещаем в блоки
            historyImages.classList.add("history__images");
            historyImage1.classList.add(
                "history__image1",
                "history__image1_ibg"
            );
            historyImage2.classList.add(
                "history__image2",
                "history__image2_ibg"
            );
            historyImage.classList.add("history__image", "history__image_ibg");
            historyStart.classList.add("history__start");
            historyTop.prepend(historyStart);
            historyStart.append(historyTitles, historyCircle);
            historyRight.append(historyImages, historyImage);
            historyImages.append(historyImage1, historyImage2);
            historyImage1.appendChild(monkeysImage);
            historyImage2.appendChild(housesImage);
            historyImage.appendChild(monkeyImage);
            historyBottom.style["display"] = "none";
        } else {
            // Если экран больше или равен 1040px, перемещаем блоки обратно
            historyBottom.appendChild(housesImage);
            historyBottom.prepend(historyCircle);
            historyLeft.prepend(historyTitles);
            historyRight.append(monkeysImage, monkeyImage);
            historyImages.remove();
            historyImage.remove();
            historyStart.remove();
            historyBottom.style["display"] = "flex";
        }
    }

    // Изначальная проверка
    handleScreenChange(mediaQuery);

    // Отслеживание изменений
    mediaQuery.addEventListener("change", handleScreenChange);
});

// Перемещение элементов в start блок
document.addEventListener("DOMContentLoaded", function () {
    const mediaQuery = window.matchMedia("(max-width: 840px)");

    const startBody = document.querySelector(".start__body");
    const startLeft = document.querySelector(".start__left");
    const startRight = document.querySelector(".start__right");

    function handleScreenChange(event) {
        if (event.matches) {
            startLeft.appendChild(startBody);
            startRight.style["display"] = "none";
        } else {
            document.querySelector(".start__right").style["display"] = "block";
            startRight.appendChild(startBody);
        }
    }

    // Изначальная проверка
    handleScreenChange(mediaQuery);

    // Отслеживание изменений
    mediaQuery.addEventListener("change", handleScreenChange);
});

// Перемещение элементов в presentation блок
document.addEventListener("DOMContentLoaded", function () {
    const mediaQuery = window.matchMedia("(max-width: 1160px)");

    const presentationPage = document.querySelector(".presentation");
    const presentationVideo = document.querySelector(".presentation__video");
    const presentationContainer = document.querySelector(
        ".presentation__container"
    );

    function handleScreenChange(event) {
        if (event.matches) {
            presentationPage.appendChild(presentationVideo);
        } else {
            presentationContainer.appendChild(presentationVideo);
        }
    }

    // Изначальная проверка
    handleScreenChange(mediaQuery);

    // Отслеживание изменений
    mediaQuery.addEventListener("change", handleScreenChange);
});

// Перемещение элементов в contacts блок
document.addEventListener("DOMContentLoaded", function () {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const contactsLeft = document.querySelector(".contacts__left");
    const contactsRight = document.querySelector(".contacts__right");
    const contactsTop = document.querySelector(".contacts__top");

    function handleScreenChange(event) {
        if (event.matches) {
            contactsLeft.appendChild(contactsRight);
        } else {
            contactsTop.appendChild(contactsRight);
        }
    }

    // Изначальная проверка
    handleScreenChange(mediaQuery);

    // Отслеживание изменений
    mediaQuery.addEventListener("change", handleScreenChange);
});
