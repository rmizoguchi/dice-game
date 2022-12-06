// player 1
var randomNumber1 = Math.ceil(Math.random() * 6);

var player1Dice = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", player1Dice);

// player2
var randomNumber2 = Math.ceil(Math.random() * 6)

var player2Dice = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", player2Dice);

// Heading
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!"
}
