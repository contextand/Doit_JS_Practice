let slides = document.querySelectorAll("#container > img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

// console.log(slides);

let current = 0;

showSlide(current);
prev.onclick = preSlide;
next.onclick = nextSlide;

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function preSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  showSlide(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlide(current);
}
