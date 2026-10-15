const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const drawsCountElem = document.querySelector('.draws-count');
const currentRoundElem = document.querySelector('.current-round');
const totalRoundElem = document.querySelector('.total-rounds');
const playerChoiceImgElem = document.querySelector('.player-choice-img');
const computerChoiceImgElem = document.querySelector('.computer-choice-img');
const playerChoiceNameElem = document.querySelector('.player-choice-name');
const computerChoiceNameElem = document.querySelector('.computer-choice-name');
const roundResElem = document.querySelector('.round-result-message');
const gameResElem = document.querySelector('.game-result-message');
const newGameBtn = document.querySelector('.new-game-button');
const optionsElems = document.querySelectorAll('.option');

// Initialize the game variables
let playerScore = 0;
let computerScore = 0;
let drawsCount = 0;
let roundsCount = 0;
const MAX_ROUNDS = 3;

