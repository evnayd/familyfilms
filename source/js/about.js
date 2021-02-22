"use strict";

(function () {
  let aboutSection = document.querySelector(".about");

  aboutSection.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("questions__title")) {
      let hiddenInfo = target.nextElementSibling;
      if (hiddenInfo.style.maxHeight) {
        hiddenInfo.style.maxHeight = null;
      } else {
        hiddenInfo.style.maxHeight = hiddenInfo.scrollHeight + "px";
      }
    }
  });
})();
