"use strict";
(function () {
  let sliderBtn = document.querySelector(".slider__btn");
  let sliderItems = document.querySelectorAll(".slider__item");

  let slideIndex = 1;

  function showSlides() {
    let i;

    for (i = 0; i < sliderItems.length; i++) {
      sliderItems[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > sliderItems.length) {
      slideIndex = 1;
    }
    sliderItems[slideIndex - 1].style.display = "block";
  }

  sliderBtn.addEventListener("click", showSlides);
})();
