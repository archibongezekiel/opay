let bank_Names = document.querySelector(".bank-name-select");

let list_of_banks = document.querySelector(".list-of-banks");

let close = document.querySelector("#close");

let accountNumber = document.querySelector("#number");

let user_name = document.querySelector(".flex");

let error = document.querySelector("#error").innerHTML;

let buttonPerson1 = document.querySelector("#button-1");

bank_Names.addEventListener("click", () => {
  list_of_banks.style.display = "block";
});

close.addEventListener("click", () => {
  list_of_banks.style.display = "none";
});
accountNumber.addEventListener("change", () => {
  if (accountNumber.value === "2037711489") {
    user_name.style.display = "inline";
  }
});

/*function change() {
  if (accountNumber.value.) {
    user_name.style.display = "inline";
  }
}*/

buttonPerson1.addEventListener("click", () => {
  window.open("transfer.html", "_parent");
});
