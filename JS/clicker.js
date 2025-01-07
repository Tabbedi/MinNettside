let score = 0;

// Get references to the DOM elements
const scoreDisplay = document.getElementById('score');
const clickerImg = document.getElementById('clicker-img');

// Image sources
const defaultImage = "../Bilder/ViggoClicker.png"; // Default image
const clickedImage = "../Bilder/ViggoClicker2.png"; // Image when clicked

// Event listener for the click event
clickerImg.addEventListener('click', () => {
  // Increment the score
  score++;
  scoreDisplay.textContent = `Score: ${score}`;

  // Change the image to the clicked version
  clickerImg.src = clickedImage;

  // Add bounce effect
  clickerImg.classList.add('bounce');

  // Revert the image back to the default and remove bounce after 1 second
  setTimeout(() => {
    clickerImg.src = defaultImage;
    clickerImg.classList.remove('bounce');
  }, 200);
});
