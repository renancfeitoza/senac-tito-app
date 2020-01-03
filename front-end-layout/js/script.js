hamburger = document.querySelector("#menu");
menu = document.querySelector(".menu");
body = document.querySelector("body");
menuMobile = document.querySelector("#menuMobile")
menuLogin = document.querySelector("#menuLogin");
menuMoptions = document.querySelector("#menuMoptions");
formLogin = document.querySelector("#formLogin");
img = document.querySelector("#imgLogin");

hamburger.addEventListener("click", function (event) {
  menu.classList.toggle("open");
  body.classList.toggle("overflowhidden");
});

menuLogin.addEventListener("click", function () {
  menuMoptions.classList.toggle("openMenuLogin");
  menuMobile.classList.toggle("openMenuLogin2");
  formLogin.classList.toggle("showFormLogin");
  img.src = "img/error.svg"
})

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
