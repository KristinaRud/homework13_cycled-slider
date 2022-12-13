"use strict";

const allImg = Array.from(document.querySelectorAll("img"));
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");

let showImg;
let j = 0;

function show_img() {
  for (let i = 0; i < allImg.length; i++) {
    if (i === j) {
      allImg[i].classList.add("show");
      allImg[i].classList.remove("hidden");
    } else {
      allImg[i].classList.remove("show");
      allImg[i].classList.add("hidden");
    }
  }

  ++j;

  if (j >= allImg.length) {
    j = 0;
  }
}

stopBtn.addEventListener("click", () => {
  clearInterval(showImg);

  stopBtn.setAttribute("disabled", "");
  playBtn.removeAttribute("disabled");
});

playBtn.addEventListener("click", () => {
  showImg = setInterval(show_img, 3000);

  playBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled");
});

