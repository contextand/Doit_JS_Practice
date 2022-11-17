let pics = document.querySelectorAll(".pic");
let lightbox = document.querySelector("#lightbox");
let lightboxImage = document.querySelector("#lightboxImage");

for (let i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  let bigLocation = this.getAttribute("data-src");
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}

// lightbox.onclick = function () {
//   lightbox.style.display = "none";
// };

function closeBox() {
  lightbox.style.display = "none";
}
