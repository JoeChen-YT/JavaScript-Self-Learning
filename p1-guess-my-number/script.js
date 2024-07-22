"use strict";

let score = 20;
const secreteNumber = Math.trunc(Math.random() * 20 + 1);

// TODO: Remove this line after finish the code
document.querySelector(".number").textContent = secreteNumber;

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
        messageElement.textContent = "🎉 You got it";
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
