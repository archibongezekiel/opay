let service_container_2 = document.querySelector(".service-container_2");
//
let bet_selector_container = document.querySelector(".bet_selector_container ");
//
let close = document.querySelector("#close");
//
let inputCheck = document.querySelector(".input");
//
let submit_button = document.querySelector("#submit_button");
//
let list_number_1 = [
  document.querySelector(".list_number_1"),
  document.querySelector(".list_number_2"),
  document.querySelector(".list_number_3"),
  document.querySelector(".list_number_4"),
  document.querySelector(".list_number_5"),
  document.querySelector(".list_number_6"),
  document.querySelector(".list_number_7"),
  document.querySelector(".list_number_8"),
];
//
let img_1 = document.querySelector("#img_1");
//
service_container_2.addEventListener("click", () => {
  bet_selector_container.style.display = "block";
});
//
close.addEventListener("click", () => {
  bet_selector_container.style.display = "none";
});
//
inputCheck.addEventListener("change", () => {
  if (inputCheck.value) {
    submit_button.style.opacity = "0.8";
  }
});
//
list_number_1.at(0).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/betking02.png"
  );
  document.querySelector(".title").innerText = "BetKing";
});
//
list_number_1.at(1).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/Sportybet.png"
  );
  document.querySelector(".title").innerText = "SportyBet";
});
//
list_number_1.at(2).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/1xbet3x.png"
  );
  document.querySelector(".title").innerText = "1xBet";
});
//
list_number_1.at(3).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/betway3x.png"
  );
  document.querySelector(".title").innerText = "Betway";
});
//
list_number_1.at(4).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/Naijabet3x.png"
  );
  document.querySelector(".title").innerText = "NaijaBet";
});
//
list_number_1.at(5).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/Bet9ja3x.png"
  );
  document.querySelector(".title").innerText = "Bet9ja";
});
//
list_number_1.at(6).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/betBonanza.png"
  );
  document.querySelector(".title").innerText = "betBonanza";
});
//
list_number_1.at(7).addEventListener("click", () => {
  img_1.setAttribute(
    "src",
    "https://files.opayweb.com/images/api/icon/betting/20221226-153858.png"
  );
  document.querySelector(".title").innerText = "Easywin";
});
