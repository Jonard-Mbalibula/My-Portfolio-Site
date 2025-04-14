
const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'me.webp'];
let current = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

setInterval(changeBackground, 5000);
