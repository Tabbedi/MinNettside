const gunImage = document.getElementById('gun-image');
const playerShootBtn = document.getElementById('player-shoot');
const robotShootBtn = document.getElementById('robot-shoot');
const restartBtn = document.getElementById('restart');
const gameOverDiv = document.getElementById('game-over');
const resultText = document.getElementById('result-text');

// Paths for the images
const defaultImagePath = '../Bilder/RevolverBildet.png'; // Default gun image
const shotImagePath = '../Bilder/RevolverShot.png'; // Image shown when shooting

// Game state variables
let bullets = 6;
let currentChance = 1 / bullets;
let isPlayerTurn = true;
let gameOver = false;

// Function to rotate the gun with a delay
function moveGun(toPlayer) {
  setTimeout(() => {
    gunImage.style.transform = toPlayer ? 'rotate(0deg)' : 'rotate(180deg)';
  }, 500); // Delay of 0.5 seconds before rotating
}

// Function to update the gun image when a bullet is fired
function showShotImage() {
  gunImage.src = shotImagePath; // Change to shot image
  setTimeout(() => {
    gunImage.src = defaultImagePath; // Revert back after 80ms
  }, 90);
}

// Function to play shot sound
function playShotSound() {
  const shotSound = document.getElementById('shot-sound');
  shotSound.play();
}

// Function to play "no shot" sound
function playNoShotSound() {
  const noShotSound = document.getElementById('no-shot-sound');
  noShotSound.play();
}

// Function to shoot
function shoot() {
  const shot = Math.random();
  if (shot < currentChance) {
    showShotImage(); // Show the shooting image
    playShotSound(); // Play shot sound when a shot is triggered
    setTimeout(() => {
      endGame(isPlayerTurn ? 'Du DØDE!' : 'Du lever!');
    }, 1000); // Add delay before ending the game
  } else {
    playNoShotSound(); // Play no shot sound when there is no shot
    bullets--;
    currentChance = 1 / bullets;

    // Delay rotation for missed shots
    isPlayerTurn = !isPlayerTurn;
    moveGun(isPlayerTurn);

    if (!gameOver) {
      setTimeout(shoot, 1500); // Automatic shot after 1.5 seconds
    }
  }
}

// Function to end the game
function endGame(message) {
  gameOver = true;
  resultText.textContent = message;
  gameOverDiv.style.display = 'block';
}

// Function to reset the game
function resetGame() {
  bullets = 6;
  currentChance = 1 / bullets;
  isPlayerTurn = true;
  gameOver = false;
  moveGun(true);
  gunImage.src = defaultImagePath; // Reset gun image
  gameOverDiv.style.display = 'none';
}

// Add event listeners for the player and robot buttons
playerShootBtn.addEventListener('click', () => {
  if (!gameOver) {
    isPlayerTurn = true;
    setTimeout(shoot, 1000); // Adding a delay of 1 second before the first shot
  }
});

robotShootBtn.addEventListener('click', () => {
  if (!gameOver) {
    isPlayerTurn = false;
    moveGun(false);
    setTimeout(() => {
      setTimeout(shoot, 1900); // Robot starts after 1.5 seconds delay
    }, 1000); // Delay before robot's first turn
  }
});

// Add event listener to restart the game
restartBtn.addEventListener('click', resetGame);

// Initialize game
resetGame();
