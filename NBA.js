let confirmButton = document.querySelector("#confirm");

confirmButton.addEventListener("click", () => {
  let button = document.querySelector(".input");

  let paswordButton = document.querySelector(".password");

  if (
    button.value === "08083924423" ||
    (button.value === "8083924423") & (paswordButton.value === "200319")
  ) {
    window.open("home.html");
  } else {
    alert("User Account or Password error, please try again");
  }
});
