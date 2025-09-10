 let slideIndex = 0;
showSlide(slideIndex);

// Next/Prev controls
function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

// Auto slideshow every 6 sec (optional)
setInterval(() => {
  changeSlide(1);
}, 6000);