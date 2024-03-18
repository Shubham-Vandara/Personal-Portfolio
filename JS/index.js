// SELECT ELEMENT
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "./index.html";
});

// SLICK SLIDER JQUERY CODE FOR PROJECTS CAROUSEL
$(document).on("ready", function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// TYPED JS CODE
var typed = new Typed("#auto-type", {
  strings: [
    "Website Development",
    "Frontend Development",
    "User-Friendly Website Design",
    "Custom Website Design",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  smartBackspace: true,
  loop: true,
  showCursor: true,
});

// SCROLL TOP FUNCTIONALITY

// Select the scroll-to-top button element
const scrollToTop = document.querySelector("#up-arrow");

// Add an event listener for the scroll event on the window
window.onscroll = function () {
  // Call the scrollFunction when the user scrolls
  scrollFunction();
};

// Hide the scroll-to-top button initially
scrollToTop.style.display = "none";

// Define the scrollFunction
function scrollFunction() {
  // If the user has scrolled down more than 50 pixels
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Display the scroll-to-top button
    scrollToTop.style.display = "flex";
    // Apply a smooth transition effect
    scrollToTop.style.transition = "1s";
  } else {
    // If not scrolled enough, hide the button
    scrollToTop.style.display = "none";
  }
}

// Add a click event listener to the scroll-to-top button
scrollToTop.addEventListener("click", topFunction);

// Define the topFunction
function topFunction() {
  // Scroll the page back to the top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
