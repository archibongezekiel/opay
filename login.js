//this link is a hmtl button call confirm
let confirmButton = document.querySelector("#confirm");
console.log(confirmButton);
// input-amount
let input_phone_number = document.querySelector(".input_phone_number");

//input_user password
let input_Password = document.querySelector(".password");
console.log(input_phone_number);

confirmButton.addEventListener("click", () => {
  if (
    input_phone_number.value === "08083924423" ||
    (input_phone_number.value === "8083924423") &
      (input_Password.value === "200319")
  ) {
    window.open("home.html");
  } else {
    alert("User Account or Password error, please try again");
  }
});
