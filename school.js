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
  document.querySelector(".image").setAttribute("src", "Image/wace.png");
  document.querySelector("#title_display").innerText = "WACE NG";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(1).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/jamb.png");
  document.querySelector("#title_display").innerText = "JAMB NG";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//

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
  document.querySelector("#name").innerText = "JAME NG DIRECT ENTRY PIN";
  document.querySelector(".display").style.display = "block";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "2,500";
});
//
listOfMonthlyPlan.at(1).addEventListener("click", () => {
  document.querySelector("#name").innerText = " WAEC NG DIRECT ENTRY PIN";
  document.querySelector(".package_offer").style.display = "none";
  amount_number.value = "4,000";
});

//
amount_number.addEventListener("change", () => {
  document.querySelector(".submit_input").style.opacity = "0.8";
});
