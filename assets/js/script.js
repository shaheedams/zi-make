var zi_testimonial = new Swiper(".zi_testimonial_slides", {
  slidesPerView: 1,
  effect: 'slide',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".zi_testimonial_right",
    prevEl: ".zi_testimonial_left",
  },
});

$(".zi_goto_top").on("click",()=>{
  window.scrollTo(0, 0);
})