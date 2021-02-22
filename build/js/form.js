"use strict";

(function () {
  let formBtnSend = document.querySelector("#send");
  let formBtnClear = document.querySelector("#clear");
  let inputs = document.querySelectorAll(".form__input");
  let email = document.querySelector(".form__input--email");

  let i;

  formBtnSend.addEventListener("click", function () {
    ValidateValue();
    ValidateEmail();
  });

  formBtnClear.addEventListener("click", function (event) {
    event.preventDefault();
    clearTheInput();
  });

  function clearTheInput() {
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }

  function ValidateValue() {
    for (i = 0; i < inputs.length; i++) {
      let value = inputs[i].value;
      if (!value) {
        inputs[i].setCustomValidity("Please fill the field");
      } else {
        inputs[i].setCustomValidity("");
      }
    }
  }

  function ValidateEmail() {
    let value = email.value;
    var mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!value) {
      email.setCustomValidity("Please fill the field");
    } else if (value && !value.match(mailformat)) {
      email.setCustomValidity("please enter the valid email address!");
    } else {
      email.setCustomValidity("");
    }
  }
})();
