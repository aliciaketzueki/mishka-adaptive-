var button1 = document.querySelector(".nav__button");
var popup1 = document.querySelector(".nav__list--nav");
var popup2 = document.querySelector(".nav__list--tools");
var button2 = document.querySelector(".nav__button--closed");

var cart = document.querySelector(".cart");
var modal = document.querySelector(".modal");
var add = document.querySelector(".modal__button");

button1.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup1.classList.toggle("nav__list--show");
    popup2.classList.toggle("nav__list--show");
    button2.classList.toggle("nav__button--opened");
});

cart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
});

add.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});
