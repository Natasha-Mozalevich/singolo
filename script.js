const menu = document.querySelector(".top-navmenu-mobile");

const menuButton = document.querySelector(".icon-burger");
menuButton.addEventListener("click", () => {
  console.log("click");
  menu.style.display = "block";
});

console.log(menuButton);
