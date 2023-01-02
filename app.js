// AOS init
AOS.init();

window.onload = function () {
  const linksBottomBorder = document.querySelectorAll(".links p");
  const counters = document.querySelectorAll(".counter div");
  setTimeout(() => {
    linksBottomBorder.forEach((link) => {
      link.classList.add("shown");
    });
    counters.forEach((counter) => {
      counter.style.transition = "all 200ms";
    });
  }, 1000);
};

let mentorsSwiper = new Swiper(".mentorsSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 30,
  enabled: true,

  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1.4,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 0,
      enabled: true,
    },
    // when window width is >= 320px
    340: {
      slidesPerView: 1.6,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 0,
      enabled: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.7,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 0,
      enabled: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 0,
      enabled: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 0,
      enabled: false,
    },
  },
});

let sponsorsSwiper = new Swiper(".sponsorsSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 30,
  enabled: true,

  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1.4,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 10,
      enabled: true,
    },
    // when window width is >= 320px
    340: {
      slidesPerView: 1.7,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 10,
      enabled: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.9,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 10,
      enabled: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 10,
      enabled: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 10,
      enabled: false,
    },
  },
});

//difine active navbar element and add '.active' class to it
// active class is defined in css
// active will change based on scroll position
const navLinks = document.querySelectorAll(".links a");
const home = navLinks[0];
home.classList.add("active");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  // add shadow to navbar when scroll
  const navbar = document.querySelector(".nav-wrapper");
  if (fromTop > 0) {
    navbar.classList.add("shadow");

    navbar.classList.add("hide-padding");
    navbar.classList.remove("show-padding");

    hamburger.classList.add("hide-padding");
    hamburger.classList.remove("show-padding");
  } else {
    navbar.classList.remove("shadow");

    navbar.classList.add("show-padding");
    navbar.classList.remove("hide-padding");

    hamburger.classList.add("show-padding");
    hamburger.classList.remove("hide-padding");
  }

  for (let i = 0; i < navLinks.length - 1; i++) {
    const link = navLinks[i];
    const nextLink = navLinks[i + 1];

    const id = link.getAttribute("href");
    let nextId;

    if (id == "#sponsors") {
      nextId = "#end";
    } else {
      nextId = nextLink.getAttribute("href");
    }

    sectionHeight =
      document.querySelector(nextId).offsetTop -
      document.querySelector(id).offsetTop;

    let section = document.querySelector(id);
    if (
      (section.offsetTop - 5 <= fromTop &&
        section.offsetTop + sectionHeight - 5 > fromTop) ||
      (id == "#sponsors" &&
        fromTop + window.innerHeight >= document.body.offsetHeight)
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      isMenuOpen = false;
      divider.classList.add("hide");
      divider.classList.remove("show");
      links.classList.add("hide-links");
      links.classList.remove("show-links");
      hamburger.classList.toggle("toggle");
    }
  });
});

// hamburger animation
const hamburger = document.querySelector(".hamburger");
const divider = document.querySelector(".divider");
const links = document.querySelector(".links");
let isMenuOpen = false;

hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    divider.classList.add("show");
    divider.classList.remove("hide");

    links.classList.add("show-links");
    links.classList.remove("hide-links");
  } else {
    divider.classList.add("hide");
    divider.classList.remove("show");

    links.classList.add("hide-links");
    links.classList.remove("show-links");
  }
  //Animate Links
  // links.forEach((link) => {
  //   link.classList.toggle("fade");
  // });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// days hours minutes seconds left timer
// Set the date we're counting down to
var countDownDate = new Date("Feb 15, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".days h1").innerText = days;
  document.querySelector(".hours h1").innerText = hours;
  document.querySelector(".minutes h1").innerText = minutes;
  document.querySelector(".seconds h1").innerText = seconds;

  if (seconds % 2 === 0) {
    document.querySelector(".seconds").style.backgroundColor = "#0F9D58";
  } else {
    document.querySelector(".seconds").style.backgroundColor = "#c2c2c2";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
