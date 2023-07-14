const btnToggle = document.querySelectorAll(".btn-toggle");
const body = document.querySelector("body");
const modal = document.querySelector(".modal__wrapper");
const modalCancel = document.querySelector(".btn-cancel");
const modalConfirm = document.querySelector(".btn-confirm");
const modalCloseBtn = modal.querySelector(".btn-close");
const btnMinus = document.querySelectorAll(".btn-minus");

const toggleMenuList = (e) => {
  e.preventDefault();
  e.currentTarget.closest(".agreement-item").classList.toggle("is-open");
};

btnToggle.forEach(function (e) {
  e.addEventListener("click", toggleMenuList);
});

const modalOpen = (e) => {
  console.log(e);
  body.classList.add("scroll-off");
  modal.classList.remove("hidden");
};

btnMinus.forEach(function (e) {
  const checkClass = e.classList.contains("disabled");
  console.log(checkClass);

  if (checkClass) {
    e.addEventListener("click", modalOpen);
  }
});

const modalClose = (e) => {
  console.log(e);
  if (!e.parentNode == "svg" || !e.parentNode == "button") {
    return;
  }
  body.classList.remove("scroll-off");
  modal.classList.add("hidden");
};

modalCancel.addEventListener("click", modalClose);
modalConfirm.addEventListener("click", modalClose);
modalCloseBtn.addEventListener("click", modalClose);
