const menu = document.querySelector(".mobile-menu-show-container");
const menuButton = document.querySelector(".mobile-menu-icon-show");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// _______________Slider____________________
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const sliderRed = document.querySelector(".slider-red");
const sliderBlue = document.querySelector(".slider-blue");
const sliderMove = document.querySelector("slider-move");

// arrowLeft.addEventListener("click", () => {
// sliderRed.style.display = "none";
// sliderBlue.style.display = "block";
// });
//
// arrowRight.addEventListener("click", () => {
// sliderRed.style.display = "block";
// sliderBlue.style.display = "none";
// });

if ((sliderRed.style.display = "block")) {
  arrowRight.addEventListener("click", () => {
    sliderRed.style.display = "none";
    sliderBlue.style.display = "block";
  });
}

if ((sliderRed.style.display = "block")) {
  arrowLeft.addEventListener("click", () => {
    sliderRed.style.display = "none";
    sliderBlue.style.display = "block";
  });
}
