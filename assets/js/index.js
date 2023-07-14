const body = document.querySelector("body");
const popup = document.querySelector(".popup");
const popupList = document.querySelector(".popup__list");
const btnToggle = document.querySelectorAll(".btn-toggle");
const orderTab = document.querySelectorAll(".order__tab-switch");
const orderTabCon = document.querySelectorAll(".order__notice-item");

const popupOpen = () => {
  body.classList.add("scroll-off");
  popup.classList.remove("hidden");
};

window.addEventListener(onload, popupOpen());

popupList.onclick = function popupClose(e) {
  const target = e.target;
  if (target.parentNode.className === "popup__item") {
    body.classList.remove("scroll-off");
    popup.classList.add("hidden");
  }
};

const toggleMenuList = (e) => {
  e.currentTarget.closest(".menu__list").classList.toggle("is-closed");
};

btnToggle.forEach(function (e) {
  e.addEventListener("click", toggleMenuList);
});

function viewToggle(e) {
  e.preventDefault();
  orderTab.forEach(function (e) {
    e.classList.remove("is-active");
  });
  orderTabCon.forEach(function (e) {
    e.classList.add("hidden");
  });
  this.classList.add("is-active");
  activeCon = this.getAttribute("href");
  document.querySelector(activeCon).classList.remove("hidden");
}

orderTab.forEach(function (e) {
  e.addEventListener("click", viewToggle);
});
