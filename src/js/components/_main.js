// const overlay = document.querySelector(".overlay");
// const modal = document.querySelector(".modal");
// const callModal = document.querySelectorAll("#modal");
// const modalClose = document.querySelector(".modal__close");

// callModal.forEach((i) => {
//   i.addEventListener("click", () => {
//     modal.classList.add("active");
//     overlay.classList.add("active");
//     document.body.classList.add("overflow");
//   });
// });

// overlay.addEventListener("click", (e) => {
//   if (e.target.closest(".modal")) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
//   document.body.classList.remove("overflow");
// });

// modalClose.addEventListener("click", () => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
//   document.body.classList.remove("overflow");
// });

const bunnertSwiper = new Swiper(".bunnert__swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: ".bunnert__next",
    prevEl: ".bunnert__prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const servicesSwiper = new Swiper(".promotion__swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: ".promotion__next",
    prevEl: ".promotion__prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const trustSwiper = new Swiper(".trust__swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".trust__next",
    prevEl: ".trust__prev",
  },
});

const doctorsSwiper = new Swiper(".doctors__swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 4,

  pagination: {
    el: ".doctors__pagination",
    type: "progressbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const doctorAdress = document.querySelectorAll(".doctors__inf");

doctorAdress?.forEach((item) => {
  const content = item.querySelector(".doctors__infAdresses");

  item.addEventListener("mouseenter", () => {
    content.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    content.classList.remove("active");
  });
});

const portfolioSwiper = new Swiper(".portfolio__swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 4,

  //   pagination: {
  //     el: ".doctors__pagination",
  //     type: "progressbar",
  //   },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews__swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 2,

  //   pagination: {
  //     el: ".doctors__pagination",
  //     type: "progressbar",
  //   },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
  },
});
