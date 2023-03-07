let networkSector = document.querySelector(".airtime-date");
let networkSectorOption = document.querySelector("footer");
let removeNetworkSectorOption = document.querySelector(".close-icon");

networkSector.addEventListener("click", () => {
  networkSectorOption.style.display = "block";
  networkSectorOption.style.transition = " 2s";
});

removeNetworkSectorOption.addEventListener("click", () => {
  networkSectorOption.style.display = "none";
  networkSectorOption.style.transition = " 2s";
});
