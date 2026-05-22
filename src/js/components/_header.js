const header = document.querySelector(".header");
let lastScroll = 0;
const topHeight = header.offsetHeight / 2 - 30;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > topHeight) {
    header.classList.add("is-collapsed");
  } else if (current < topHeight) {
    header.classList.remove("is-collapsed");
  }
});

// const burger = document.querySelector(".header__burger");
// const headerMob = document.querySelector(".header__mob");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
//   headerMob.classList.toggle("active");
//   document.body.classList.toggle("overflow");
// });

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const callModal = document.querySelectorAll("#modalRev");
const modalClose = document.querySelector(".modal__close");

callModal.forEach((i) => {
  i.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
    modal.querySelector(".modal__iframe").src = i.dataset.link;
    document.body.classList.add("overflow");
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target.closest(".modal")) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("overflow");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("overflow");
});

const prom = document.querySelector(".header__prom");
const promClose = document.querySelector(".header__promClose");

// const isHidden = localStorage.getItem("promHidden") === "true";

// if (isHidden) {
//   prom.classList.add("hidden");
// }

promClose.addEventListener("click", () => {
  prom.classList.add("hidden");
  //   localStorage.setItem("promHidden", "true");
});

const adress = document.querySelector(".header__adress");
const menuSubs = document.querySelectorAll(".header__menuSub");

adress.addEventListener("click", () => {
  adress.classList.toggle("active");
  menuSubs?.forEach((i) => {
    i.classList.remove("active");
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("header__adressView")) {
    adress.classList.remove("active");
  }
});

const updateDropdownPosition = (item, dropdown) => {
  if (!dropdown) return;

  dropdown.classList.remove("dropdown--right");

  const itemRect = item.getBoundingClientRect();
  const dropdownRect = dropdown.getBoundingClientRect();

  if (itemRect.left >= 20 && dropdownRect.right > window.innerWidth) {
    dropdown.classList.add("dropdown--right");
  }
};

menuSubs?.forEach((item) => {
  const dropdown = item.querySelector(".header__menuDropdown");

  item.addEventListener("mouseenter", () => {
    item.classList.add("active");
    adress.classList.remove("active");

    updateDropdownPosition(item, dropdown);
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
  });
});

const fixDropdownPosition = () => {
  menuSubs?.forEach((item) => {
    const dropdown = item.querySelector(".header__menuDropdown");
    updateDropdownPosition(item, dropdown);
  });
};

window.addEventListener("load", () => {
  requestAnimationFrame(fixDropdownPosition);
});

const promsBtn = document.querySelector(".header__proms");
const promsDrop = document.querySelector(".header__promsDrop");

promsBtn.addEventListener("mouseenter", () => {
  promsBtn.classList.add("active");
  promsDrop.classList.add("active");
});

promsBtn.addEventListener("mouseleave", () => {
  promsBtn.classList.remove("active");
  promsDrop.classList.remove("active");
});
