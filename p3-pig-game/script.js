"use strict";

// Define the state of the game:
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

// Retrieve the HTMLElements:
const firstPlayerElement = document.querySelector(".player--0");
const scoreOf1stPlayer = document.getElementById("score--0");
const currentScoreOf1stPlayer = document.getElementById("current--0");
const secondPlayerElement = document.querySelector(".player--1");
const scoreOf2ndPlayer = document.getElementById("score--1");
const currentScoreOf2ndPlayer = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const newGameBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

// Define re-usable function
const initiateGame = function () {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;

  if (!firstPlayerElement.classList.contains("player--active")) {
    firstPlayerElement.classList.add("player--active");
  }
  firstPlayerElement.classList.remove("player--winner");
  if (secondPlayerElement.classList.contains("player--active")) {
    secondPlayerElement.classList.remove("player--active");
  }
  secondPlayerElement.classList.remove("player--winner");

  scoreOf1stPlayer.textContent = 0;
  currentScoreOf1stPlayer.textContent = 0;
  scoreOf2ndPlayer.textContent = 0;
  currentScoreOf1stPlayer.textContent = 0;

  diceElement.classList.add("hidden");
};

const getActivePlayerElement = function () {
  return document.querySelector(`.player--${activePlayer}`);
};

const getCurrentScoreOfActivePlayerElement = function () {
  return document.getElementById(`current--${activePlayer}`);
};

const getScoreOfActivePlayerElement = function () {
  return document.getElementById(`score--${activePlayer}`);
};

const switchPlayer = function () {
  getCurrentScoreOfActivePlayerElement().textContent = 0;
  getActivePlayerElement().classList.remove("player--active");
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  getActivePlayerElement().classList.add("player--active");
};

// Game logic:
initiateGame();

// 1. Add event listener on roll dice button:
rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    // Show the dice picture with corresponding nubmer
    let diceNum = Math.ceil(Math.random() * 6);
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${diceNum}.png`;

    // Retrieve the element of the current player:
    const currentScoreOfActivePlayer = document.getElementById(
      `current--${activePlayer}`
    );

    if (diceNum !== 1) {
      currentScore += diceNum;
      currentScoreOfActivePlayer.textContent = currentScore;
    } else {
      // Swtich the player
      switchPlayer();
    }
  }
});

// 2. Add event listener on hold button:
holdBtn.addEventListener("click", function () {
  if (playing) {
    // Determine the whether the score of the active player >= 100
    score[activePlayer] += currentScore;
    getScoreOfActivePlayerElement().textContent = score[activePlayer];
    if (score[activePlayer] >= 20) {
      getActivePlayerElement().classList.add("player--winner");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

// 3. Add event listner on new game button:
newGameBtn.addEventListener("click", initiateGame);
