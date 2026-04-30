document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const icon = hamburgerBtn.querySelector("i");

  hamburgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = navMenu.classList.toggle("active");

    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);

    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    hamburgerBtn.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.classList.remove("active");

      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");

      hamburgerBtn.setAttribute("aria-expanded", "false");
      hamburgerBtn.setAttribute("aria-label", "Open navigation menu");
    }
  });

/* Inspiration:  https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels */
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

/* Inspiration:  https://www.w3schools.com/howto/howto_js_lightbox.asp*/
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const images = document.querySelectorAll(".slide img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});
});

