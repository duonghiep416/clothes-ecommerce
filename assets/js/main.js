function load(selector, path) {
    const cached = localStorage.getItem(path);
    if (cached) {
        document.querySelector(selector).innerHTML = cached;
    }

    fetch(path)
        .then((res) => res.text())
        .then((html) => {
            if (html !== cached) {
                document.querySelector(selector).innerHTML = html;
                localStorage.setItem(path, html);
            }
        });
}

// FadeInNavbar
function fadeInNavbar() {
    const navbarMoreIcon = document.querySelector(".navbar__more-icon");
    const navbarList = document.querySelector(".navbar__list");
    const overlay = document.querySelector(".overlay");

    navbarMoreIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        navbarList.classList.toggle("fadeIn");
        overlay.classList.toggle("active");
    });
    navbarList.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    document.addEventListener("click", () => {
        navbarList.classList.remove("fadeIn");
        overlay.classList.remove("active");
    });
}

function getElement(el) {
    return document.querySelector(el);
}

window.addEventListener("load", () => {
    fadeInNavbar();
});
