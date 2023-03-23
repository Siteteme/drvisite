let menu = document.querySelector(".menu ul");
let menuHumberger = document.querySelector(".menu-humberger");
let iconClose = document.querySelector(".icon-close");
function showMenu() {
  menuHumberger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

function closeMenu() {
  iconClose.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}
