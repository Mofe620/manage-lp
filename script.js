const toggler = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav ul');
const overlay = document.querySelector('#overlay');
toggler.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    toggler.classList.toggle('close');
    overlay.classList.toggle('show');
})
overlay.addEventListener('click', ()=>{
    nav.classList.remove('show');
    toggler.classList.remove('close');
    overlay.classList.remove('show');
})

// TESTIMONIAL SLIDER via SwiperJS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 1,
      },
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // effect: 'flip',
    // flipEffect: {
    //   slideShadows: false,
    // },
    // effect: 'cube',
    // cubeEffect: {
    //   shadow: false,
    // //   shadowOffset: 20,
    // //   shadowScale: 0.94,
    //   slideShadows: false,
    // },
  });

