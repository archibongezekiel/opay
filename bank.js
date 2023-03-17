let list_of_banks = document.querySelector(".list-of-banks");

let close = document.querySelector("#close");

let accountNumber = document.querySelector("#number");

let user_name = document.querySelector(".flex");

let error = document.querySelector("#error").innerHTML;

let buttonPerson1 = document.querySelector("#button-1");

let bank_names11 = document.querySelector(".bank_names");

let bankChange = document.querySelector(".bank");

let messageInput = document.querySelector("#message");
let amount = document.querySelector("#amount");

bank_names11.addEventListener("click", () => {
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
function nameMe(e) {
  bankChange.innerText = e;
  list_of_banks.style.display = "none";
}
buttonPerson1.addEventListener("click", () => {
  window.open("transfer.html", "_parent");
});
function tim() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}
messageInput.addEventListener("change", () => {
  if (
    (messageInput.value === String() && amount.value === Number()) ||
    accountNumber.value === "2037711489"
  ) {
    document.querySelector("#button-container").style.opacity = 4;
    document.querySelector(".button").style.cursor = "default";
    setTimeout(() => {
      window.location.reload();
    }, 10000);
  } else {
    user_name.style.display = "inline";
    user_name.innerText = "Account name failed";
    user_name.style.color = "red";
    tim();
  }
});
