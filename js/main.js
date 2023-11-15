// Give a class to header on scroll
const header = document.querySelector('header');

window.onscroll = function() {

  if ( this.scrollY > 50 ) {
    header.classList.add('--scrolled');
  }
  else {
    header.classList.remove('--scrolled');
  }
  this.oldScroll = this.scrollY;
  
}

// Navigation
const mobileNav = document.querySelector('nav.mobile');
const menuElements = document.querySelector('.nav-icon');
const overlay = document.querySelector('.overlay');

menuElements.addEventListener('click', () => {
    mobileNav.classList.toggle('--open');
    overlay.classList.toggle('--blur');
})

// Smoooth scroll
const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

// Gsap

gsap.to(".crossfade", {
  "--clip": "0 14% 0 14%",
  scrollTrigger: {
    trigger: "main",
    start: "500 center", // the default values
    end: "bottom center",
    scrub: true,
    // markers: true,
  }
});

gsap.to(".hero", {
  // yPercent: 100,
  y: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "center center", // the default values
    end: "bottom center",
    scrub: true,
    // markers: true,
  }
});

const y100 = gsap.utils.toArray('[data-animation="y100"]');

y100.forEach((element) => {
  gsap.to(element,{
    yPercent: 100,
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".hero",
      start: "center center",
      end: "bottom 20%",
      scrub: true,
      // markers: true,
    }
  })
});

gsap.to('[data-animation="fade"]', {
  opacity: 0,
  // ease: "power1.in",
  scrollTrigger: {
    trigger: ".hero",
    start: "center center",
    end: "bottom 10%",
    scrub: true,
    // markers: true,
  }
});

gsap.fromTo(".triple", {
  scale: 1.4,
  yPercent: 40,
},
{
  scale: 1,
  yPercent: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: ".about .content",
    start: "top 60%",
    end: "bottom 25%",
    // pin: "main",
    scrub: true,
    // markers: true,
  }
});

// Embla
const emblaNode = document.querySelector('.embla.cards')
const options = { 
  loop: false,
  dragFree: true,
  containScroll: false, 
  skipSnaps: false
}
// https://github.com/davidjerleke/embla-carousel/issues/42#issuecomment-895850425
const preventEdgeScrolling = (embla) => {
  const { limit, target, location, scrollTo } = embla.internalEngine();

  return () => {
    if (limit.reachedMax(target.get())) {
      if (limit.reachedMax(location.get())) location.set(limit.max);
      target.set(limit.max);
      scrollTo.distance(0, false);
    }
    if (limit.reachedMin(target.get())) {
      if (limit.reachedMin(location.get())) location.set(limit.min);
      target.set(limit.min);
      scrollTo.distance(0, false);
    }
  };
};

const embla = EmblaCarousel(emblaNode, options)

const card = document.querySelectorAll(".card");
const bg = document.querySelectorAll(".card img.background");

embla
  .on('select', function() {
    const direction = embla.internalEngine().scrollBody.direction()
    console.log(direction)
    if (direction === -1) {
      gsap.to(bg, { x: 20 });
    } else {
      gsap.to(bg, { x: 0 });
    }
    // gsap.fromTo(bg, { x: 50 }, { x: 0, duration: 1 });
    gsap.fromTo(card, { skewX: -3 }, { skewX: 0, duration: 2 })
  });

//Splide
// const splide = new Splide( '.splide', {
//   type   : 'slide',
//   perPage: 4,
//   trimSpace: false,
//   focus    : 'center',
//   gap: '2rem',
//   heightRatio: 0.3,
//   // speed: 2000,
//   dragMinThreshold: 5,
// } );

// splide.mount();

// Swiper
// const swiper = new Swiper('.cards.swiper', {
//   // Optional parameters
//   // loop: true,
//   freeMode: true,
//   speed: 1000,
//   // longSwipes: false,
//   shortSwipes: false,
//   slidesPerView: "auto",
//   // centeredSlides: true,
//   spaceBetween: 30,
//   // mousewheel: true,
//   // autoplay: {
//   //   delay: 3000,
//   // },
// });