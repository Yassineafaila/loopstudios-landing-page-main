const hamburger = document.querySelector(".menu");
const closee = document.querySelector(".close");
const list = document.querySelector(".list");
const hero = document.querySelector(".hero__page");
const container = document.querySelector(".hero__container");
hamburger.addEventListener("click", function () {
    list.classList.add("show")
    closee.classList.add("show");
    hamburger.classList.add("hide");
    hero.classList.add("black")
    container.classList.add("hide")
});
closee.addEventListener("click", function () {
    list.classList.remove("show");
    closee.classList.remove("show");
    hamburger.classList.remove("hide");
    hero.classList.remove("black");
    container.classList.remove("hide");
})