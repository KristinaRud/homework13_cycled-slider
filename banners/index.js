"use strict";

const allImg = Array.from(document.querySelectorAll("img"));
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");

let showImg;
let nextIndex = 0;

const show_img = () => {
  for (let i = 0; i < allImg.length; i++) {
    if (i === nextIndex) {
      allImg[i].classList.add("show");
      allImg[i].classList.remove("hidden");
    } else {
      allImg[i].classList.remove("show");
      allImg[i].classList.add("hidden");
    }
  }

  ++nextIndex;

  if (nextIndex >= allImg.length) {
    nextIndex = 0;
  }
}

stopBtn.addEventListener("click", () => {
  clearInterval(showImg);

  stopBtn.disabled = true;
  playBtn.disabled = false;
});

playBtn.addEventListener("click", () => {
  showImg = setInterval(show_img, 3000);

  playBtn.disabled = true;
  stopBtn.disabled = false;
});

playBtn.click();
