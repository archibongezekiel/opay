let buttonPerson2 = document.querySelector("#button-2");
buttonPerson2.addEventListener("click", () => {
  window.open("bank.html", "_parent");
});

document.querySelector("#number").addEventListener("mouseleave", () => {
  if (document.querySelector("#number").value === "2037711489") {
    document.querySelector("#user-name1").style.display = "inline";
  }
});
