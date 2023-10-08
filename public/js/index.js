// The carousel custom selector
let previousSlide = 0;
const heroImgList = document.querySelectorAll(".img-hero-container button");
const heroCarousel = new bootstrap.Carousel('#heroCarousel')

for (let i = 0; i < heroImgList.length; i++) {
    heroImgList[i].addEventListener("click", (e) => {
            heroCarousel.to(i);
    });
}