let mainImage = document.getElementById("mainImage");
let imgArray = [
  "/img/image1.jpg",
  "/img/image2.avif",
  "/img/image3.avif",
  "/img/image4.jpg",
  "/img/image5.avif",
  "/img/image6.avif",
  "/img/image7.avif",
];
let imgIndex = 0;

function slideRight() {
  if (imgIndex < imgArray.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  mainImage.src = imgArray[imgIndex];
}

function slideLeft() {
  if (imgIndex > 0) {
    imgIndex--;
  } else {
    imgIndex = imgArray.length - 1;
  }
  mainImage.src = imgArray[imgIndex];
}

setInterval(slideRight, 5000);
