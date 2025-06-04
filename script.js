// Array of background image filenames
const backgroundImages = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'me.webp'];
let currentIndex = 0;

// Function to change the body's background image
function changeBackground() {
  document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Set the initial background image when the page loads
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 5000);
