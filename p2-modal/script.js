"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtns = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const hiddenFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", hiddenFunction);
overlay.addEventListener("click", hiddenFunction);

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !overlay.classList.contains("hidden")) {
    console.log("Hide the overlay");
    hiddenFunction();
  }
});
