Fancybox.bind("[data-fancybox]", {
  // Опции (необязательно)
  // animationEffect: "fade",
  // closeButton: true,
});
document.addEventListener("DOMContentLoaded", function () {
  var mixer = mixitup(".our_blog_items");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  // direction: "vertical",
  loop: true,
  // Количество одновременно показываемых слайдов
  slidesPerView: 2,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
