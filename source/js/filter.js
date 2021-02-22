"use strict";
(function () {
  let filterTitle = document.querySelector(".filters__title");
  let filterPopup = document.querySelector(".filters__popup");
  let filterBtn = document.querySelector(".filters__btn");
  let filmItems = document.querySelectorAll(".film ");

  filterTitle.addEventListener("click", showfilterPopup);
  filterBtn.addEventListener("click", showfilterPopup);

  function showfilterPopup() {
    if (filterPopup.classList.contains("hidden")) {
      filterPopup.classList.remove("hidden");
      filterPopup.classList.add("active");
    } else {
      filterPopup.classList.remove("active");
      filterPopup.classList.add("hidden");
    }
  }

  let k;

  function filterItems(event, className) {
    for (k = 0; k < filmItems.length; k++) {
      if (event.target.checked && !filmItems[k].classList.contains(className)) {
        filmItems[k].classList.add("hidden");
      } else {
        filmItems[k].classList.remove("hidden");
      }
    }
  }

  window.filter = {
    filterItems: filterItems,
  };
})();
