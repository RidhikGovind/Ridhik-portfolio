const menu = document.getElementById("menu");
const menuContent = document.getElementById("menuContent");
const hamburger = document.querySelector(".hamburger");

menu.onclick = () => {
  menuContent.classList.toggle("hide");
};
