"use strict";

const initialScore = 20;
const initialNumberTextContent = "?";
const initialMessageTextContext = "Start guessing...";
const initialGuessInputFieldTextContext = "";

let highestScore = 0;
let score = initialScore;
let secreteNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".again").addEventListener("click", function () {
  score = initialScore;
  secreteNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = initialMessageTextContext;
  document.querySelector(".number").textContent = initialNumberTextContent;
  document.querySelector(".score").textContent = initialScore;
  document.querySelector(".guess").value = initialGuessInputFieldTextContext;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").style.visibility = "visible";
});

// Add a click event listener on "Check Button"
document.querySelector(".check").addEventListener("click", function () {
  // Get the input value from user
  const guess = Number(document.querySelector(".guess").value);
  const messageElement = document.querySelector(".message");

  if (!guess) {
    messageElement.textContent = "⛔️ Must give a guess";
  } else {
    if (score > 0) {
      if (guess === secreteNumber) {
        document.querySelector("body").style.backgroundColor = "#60b347";
        const numberElement = document.querySelector(".number");
        numberElement.style.width = "30rem";
        numberElement.textContent = secreteNumber;
        messageElement.textContent = "🎉 You got it";

        if (score > highestScore) {
          highestScore = score;
          document.querySelector(".highscore").textContent = highestScore;
          document.querySelector(".check").style.visibility = "hidden";
        }
      } else {
        score--;
        const scoreElement = (document.querySelector(".score").textContent =
          score);
        if (guess > secreteNumber) {
          messageElement.textContent = "📈 Your guess is high";
        } else {
          messageElement.textContent = "📉 Your guess is low";
        }
      }
    } else {
      messageElement.textContent = "😩 You lose.";
    }
  }
});
