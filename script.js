
const btn = document.getElementById("btn")
const menuList = document.getElementById("menu-list");


btn.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
})

const btnTwo = document.getElementById("footer-btn");
const list = document.getElementById("hidden-list");

btnTwo.addEventListener("click", () => {
    list.classList.toggle("hidden");
});

const btnThird = document.getElementById("footer-btnTwo");
const listTwo = document.getElementById("hidden-listTwo");

btnThird.addEventListener("click", () => {
    listTwo.classList.toggle("hidden");
});




document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        autoplay: { delay: 3000 },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true },
    });
});

