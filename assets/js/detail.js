const body = document.querySelector("body");
const popup = document.querySelector(".popup__option-area");
const orderBtn = document.querySelector(".btn-order");
const closeBtn = document.querySelector(".btn-close");

const popupOpen = () => {
  body.classList.add("scroll-off");
  popup.classList.add("show");
};

const popupClose = () => {
  body.classList.remove("scroll-off");
  popup.classList.remove("show");
};

orderBtn.addEventListener("click", popupOpen);
closeBtn.addEventListener("click", popupClose);
