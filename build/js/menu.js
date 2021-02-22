"use strict";
(function () {
  let opentToggle = document.querySelector(".main-nav__toggle");
  let closeToggle = document.querySelector(".main-nav__toggle--close");
  let menu = document.querySelector(".main-nav");

  opentToggle.addEventListener("click", function () {
    if (menu.classList.contains("main-nav--closed")) {
      menu.classList.remove("main-nav--closed");
      menu.classList.add("main-nav--opened");
      opentToggle.classList.add("main-nav__toggle--close");
    } else {
      menu.classList.add("main-nav--closed");
      menu.classList.remove("main-nav--opened");
      opentToggle.classList.remove("main-nav__toggle--close");
    }
  });
})();
