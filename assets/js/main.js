new Swiper("#my-swiper", {
  //아래 블릿
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-wrap .swiper-button-next",
    prevEl: ".swiper-wrap .swiper-button-prev",
  },
  autoplay: {
    // 자동재생 여부
    delay: 5000, // 시작시간 설정
  },
  loop: true, // 반복재생 여부
});
