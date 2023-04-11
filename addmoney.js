"use Script";
let userName = document.querySelector("#name");
//
let cardNumber = document.querySelector("#card");
//
let expiryDate = document.querySelector("#expiry");
//
let cvvNumber = document.querySelector("#cvv");
//
let submitButton = document.querySelector("#submit");
//
let errorMessage1 = document.querySelector(".error1");

//
let errorMessage2 = document.querySelector(".error2");
//
let errorMessage3 = document.querySelector(".error3");
//
window.addEventListener("click", () => {
  if (
    userName.value &&
    cardNumber.value &&
    expiryDate.value &&
    cvvNumber.value
  ) {
    submitButton.style.opacity = "0.9";
  } else {
    submitButton.style.opacity = "0.4";
  }
});
let error = "Enter number";
cardNumber.addEventListener("keypress", (e) => {
  console.log(e.keyCode);
  if (e.keyCode > 58 && e.keyCode < 120) {
    errorMessage1.style.display = "inline";
    setTimeout(() => {
      errorMessage1.style.display = "none";
    }, 5000);
  }
});
cvvNumber.addEventListener("keypress", (e) => {
  if (e.keyCode > 59 && e.keyCode < 120) {
    errorMessage3.style.display = "inline";
    setTimeout(() => {
      errorMessage3.style.display = "none";
    }, 5000);
  }
});
expiryDate.addEventListener("keypress", (e) => {
  if (e.keyCode > 59 && e.keyCode < 120) {
    errorMessage2.style.display = "inline";
    setTimeout(() => {
      errorMessage2.style.display = "none";
    }, 5000);
  }
});
