hamburger = document.querySelector("#menu");
menu = document.querySelector(".menu");
body = document.querySelector("body");

hamburger.addEventListener("click", function (event) {
  menu.classList.toggle("open");
  body.classList.toggle("overflowhidden");
});

document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("open") &&
    !event.target.isEqualNode(hamburger) &&
    !event.target.isEqualNode(menu) &&
    !event.target.isEqualNode(body) &&
    !menu.contains(event.target)
  ) {
    menu.classList.remove("open");
  }
});
