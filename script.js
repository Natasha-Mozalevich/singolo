// const menu = document.querySelector(".top-navmenu-mobile");
// const menuButton = document.querySelector(".icon-burger");
//
// menuButton.addEventListener("click", () => {
// console.log("click");
// menu.style.display = "block";
// });
//
// console.log(menuButton);
//

// _______________________________
// const mobileMenu = document.querySelector(".show");
// const menuButtonShow = document.querySelector(".icon-burger-show");
// const menuButtonHide = document.querySelector(".icon-burger-hide");
//
// menuButtonShow.addEventListener("click", () => {
// mobileMenu.classList.toggle("top-navmenu-mobile");
// mobileMenu.
// });
//
//

// Это верный код
// ____________________________________

const mobileMenu = document.querySelector(".show");
const menuButtonShow = document.querySelector(".icon-burger-show");
const menuButtonHide = document.querySelector(".icon-burger-hide");
//
menuButtonShow.addEventListener("click", () => {
  mobileMenu.classList.add("top-navmenu-mobile");
});
//
menuButtonHide.addEventListener("click", () => {
  mobileMenu.classList.remove("top-navmenu-mobile");
});
//
