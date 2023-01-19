var slider = document.getElementById("myCanvas");
var ctx = slider.getContext("2d");
var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
var currentImage = 0;

function drawImage() {
  var img = new Image();
  img.src = images[currentImage];
  img.onload = function () {
    ctx.drawImage(img, 0, 0, slider.width, slider.height);
  };
}

drawImage();
setInterval(function () {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  drawImage();
}, 5000);
