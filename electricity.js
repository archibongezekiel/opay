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
  document.querySelector(".image").setAttribute("src", "Image/ikedc.png");
  document.querySelector("#title_display").innerText = "IKEDC NG";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(1).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/aedc.jpeg");
  document.querySelector("#title_display").innerText = "AEDC NG";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(2).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/phed.jpeg");
  document.querySelector("#title_display").innerText = "PHED NG";
  document.querySelector(".package_container").style.display = "inline";
  channel.style.display = "none";
});
//
Provider_list.at(3).addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "Image/eedc.png");
  document.querySelector("#title_display").innerText = "EEDC";
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
  document.querySelector("#name").innerText = "ELECTRICITY PREPAID";
  document.querySelector(".display").style.display = "block";
  document.querySelector(".package_offer").style.display = "none";
});
//
listOfMonthlyPlan.at(1).addEventListener("click", () => {
  document.querySelector("#name").innerText = "ELECTRICITY POSTPAID";
  document.querySelector(".package_offer").style.display = "none";
});

//
amount_number.addEventListener("change", () => {
  document.querySelector(".submit_input").style.opacity = "0.8";
});
