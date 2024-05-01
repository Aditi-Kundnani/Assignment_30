// Preload dice images
var diceImages = [];
for (var i = 1; i <= 6; i++) {
    var img = new Image();
    img.src = "dice-" + i + ".png";
    diceImages.push(img);
}

function rollDice() {
    var diceImage = document.getElementById("diceImage");
    var randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
    var imagePath = "dice-" + randomNumber + ".jpeg";
    diceImage.style.transform = "rotateX(360deg)"; // Add animation for rolling
    setTimeout(function() {
        diceImage.src = imagePath; // Change dice image after rolling animation completes
        diceImage.style.transform = "rotateX(0deg)"; // Reset rotation
    }, 500); // Wait for 500 milliseconds for the rolling animation to complete
}
