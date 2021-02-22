"use strict";

(function () {
  let filmCatalog = document.querySelector(".catalog__list");

  filmCatalog.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("film__about")) {
      showFilmInfo(target);
    } else if (target.classList.contains("film__info")) {
      hideFilmInfo(target);
    }
  });

  function showFilmInfo(el) {
    let nextEl = el.nextElementSibling;

    if (nextEl.classList.contains("hidden")) {
      nextEl.classList.remove("hidden");
      nextEl.classList.add("active");
    }
    return;
  }

  function hideFilmInfo(el) {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      el.classList.add("hidden");
    }
    return;
  }
})();
