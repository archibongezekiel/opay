let Provider_container = document.querySelector("#Provider_container");
console.log(Provider_container);
//
let channel = document.querySelector("#channel");
//
let Provider_list = [
  document.querySelector("#showmax"),
  document.querySelector("#startime"),
  document.querySelector("#gotv"),
  document.querySelector("#dstv"),
];
let listOfMonthlyPlan = [
  document.querySelector("#pro"),
  document.querySelector("#promax"),
  document.querySelector("#mobile"),
  document.querySelector("#mobile2"),
  document.querySelector("#package"),
];
//
let package_container = document.querySelector("#package_container");
//
let amount_number = document.querySelector("#amount_number");
//
Provider_container.addEventListener("click", () => {
  channel.style.display = "inline";
});
//

Provider_container.addEventListener("dblclick", () => {
  channel.style.display = "none";
});
//
Provider_list.at(0).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/showmax.jpeg");
  document.querySelector("#title_display").innerText = "SHOWMAX";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(1).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/startime.jpeg");
  document.querySelector("#title_display").innerText = "STARTIME NG";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(2).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/gotv.png");
  document.querySelector("#title_display").innerText = "GOTV";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(3).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/dstv.jpeg");
  document.querySelector("#title_display").innerText = "DSTV";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
package_container.addEventListener("click", () => {
  document.querySelector(".package_offer").style.display = "inline";
});
//
package_container.addEventListener("dblclick", () => {
  document.querySelector(".package_offer").style.display = "none";
});
///
listOfMonthlyPlan.at(0).addEventListener("click", () => {
  document.querySelector("#name").innerText = "1 MONTH PACKAGE PRO";
  document.querySelector(".display").style.display = "block";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "2,500";
});
//
listOfMonthlyPlan.at(1).addEventListener("click", () => {
  document.querySelector("#name").innerText = "1 MONTH PACKAGE PRO MAX";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "4,000";
});
listOfMonthlyPlan.at(2).addEventListener("click", () => {
  document.querySelector("#name").innerText = "1 MONTH PACKAGE MOBILE";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "5,500";
});
//
listOfMonthlyPlan.at(3).addEventListener("click", () => {
  document.querySelector("#name").innerText = " 1 MONTH PACKAGE MOBILE PRO";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "7,000";
});
//
listOfMonthlyPlan.at(4).addEventListener("click", () => {
  document.querySelector("#name").innerText = " 1 MONTH PACKAGE ";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "7,500";
});
//
amount_number.addEventListener("change", () => {
  document.querySelector(".submit_input").style.opacity = "0.8";
});
