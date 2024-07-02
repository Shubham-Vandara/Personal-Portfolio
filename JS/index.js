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
    // autoplay: true,
    // autoplaySpeed: 1500,
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
    scrollToTop.style.display = "grid";
    // Apply a smooth transition effect
    scrollToTop.style.transition = "0.5s";
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

// FORM TO GOOGLE SHEETS
// https://github.com/jamiewilson/form-to-google-sheets

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzO5v5udcE894vANVtvOQtzo8XVeUIjnMKRgqkILNW-F6JNe4YPiTfiiESENWZk8fug/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector("#submit-msg");
const spinner = document.querySelector(".spinner");
const btnText = document.querySelector(".btn-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show spinner and hide button text
  spinner.style.display = "block";
  btnText.style.display = "none";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.style.display = "block";
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
        msg.style.display = "none";
      }, 5000);
      form.reset();

      // Hide spinner and show button text after successful submission
      spinner.style.display = "none";
      btnText.style.display = "block";
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // Hide spinner and show button text in case of error
      spinner.style.display = "none";
      btnText.style.display = "block";
    });
});
// LAZY LOAD IMAGES

// Select all images with a data-src attribute
const imageTargets = document.querySelectorAll("img[data-src]");

// Function to handle lazy loading of images
const loadImg = function (entries, observer) {
  // Loop through each entry
  entries.forEach((entry) => {
    // If the entry is not intersecting with the viewport, return
    if (!entry.isIntersecting) return;
    // Replace the src attribute with the data-src attribute to load the image
    entry.target.src = entry.target.dataset.src;
    // Once the image is loaded, remove the lazy-img class
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });
    // Stop observing the image after it's loaded to prevent unnecessary intersection checks
    observer.unobserve(entry.target);
  });
};

// Initialize an IntersectionObserver to asynchronously load images when they enter the viewport.
const imgObserver = new IntersectionObserver(loadImg, {
  root: null, // Use the viewport as the root element for intersection checking.
  threshold: 0, // Trigger the intersection event when any part of the image enters the viewport.
  rootMargin: "0px", // No additional margin around the viewport to trigger intersection, ensuring the entire image is visible.
});

// Observe each image to lazy load them
imageTargets.forEach((img) => imgObserver.observe(img));
