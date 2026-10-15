const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const drawsCountElem = document.querySelector('.draws-count');
const currentRoundElem = document.querySelector('.current-round-counter');
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
let drawsCount = 1;
let roundsCount = 1; 
const MAX_ROUNDS = 3;

totalRoundElem.textContent = MAX_ROUNDS;
// Randomly selects and returns the computer's choice.
function getComputerChoice() {
    const options = ['rock', 'scissors', 'paper'];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

//  round winner determination logic
function determineRoundWinner(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return 'tie';
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'player';
    } else {  
        return 'computer';
    }
}

function playRound(playerSelection) {

    if (roundsCount > MAX_ROUNDS) return;

    console.log(roundsCount);
    
    const computerChoice = getComputerChoice();
    const playerChoice = playerSelection;
    showChoice(playerChoiceImgElem, playerChoiceNameElem, playerChoice);
    showChoice(computerChoiceImgElem, computerChoiceNameElem, computerChoice);

    const winner = determineRoundWinner(playerChoice, computerChoice);

    updateScore(winner);
       roundsCount++;
    // Never show 4 / 3 after the last round
    currentRoundElem.textContent =  Math.min(roundsCount, MAX_ROUNDS);;

    updateRoundResult(winner);

     // Show the final result right after the last round
    if (roundsCount > MAX_ROUNDS) {
        const gameWinner = determineGameWinner(playerScore, computerScore);
        updateFinalResult(gameWinner);
    }
}

// get player choice 
optionsElems.forEach( option => {
    option.addEventListener('click', (event) => {
        event.preventDefault();
        const selection = option.dataset.value;
        playRound(selection);
    })
})

// rest and start new gridTemplateAreas: 
newGameBtn.addEventListener('click', () => {
    resetGame();
})

function updateScore(winner) {
    if(winner === 'player') {
        ++playerScore;
        playerScoreElem.textContent = playerScore;
    } else if (winner === 'computer') {
        ++computerScore;
        computerScoreElem.textContent = computerScore;

    } else  if (winner === 'tie'){
        ++drawsCount;
        drawsCountElem.textContent = drawsCount;
    }
}

function updateRoundResult(winner) {
    if (winner === 'player') {
        roundResElem.textContent = '🎉 Victory! You won the round!';
    } else if (winner === 'computer') {
        roundResElem.textContent = '🤖 The computer wins this round!'
    } else {
        roundResElem.textContent = '🤝 It’s a tie! Great minds think alike!';
    }
}

function showChoice(imgElem, nameElem, choice){
    imgElem.src = `res/${choice}.png`;
    nameElem.textContent = choice;
}

function resetGame() {
    // reset game variables
    roundsCount = 0;
    computerScore = 0;
    playerScore = 0;
    drawsCount = 0;

    // Reset the page
    playerScoreElem.textContent = 0;
    computerScoreElem.textContent = 0;
    drawsCountElem.textContent = 0;
    currentRoundElem.textContent = 0;

    playerChoiceImgElem.src = '';
    computerChoiceImgElem.src = '';
    playerChoiceNameElem.textContent = '';
    computerChoiceNameElem.textContent = '';

    roundResElem.textContent = '';
    gameResElem.textContent = '';
}

function updateFinalResult(gameWinner) {
    if (gameWinner === 'player') {
        gameResElem.textContent = '🏆 You won the game!';

    } else if (gameWinner === 'computer') {
        gameResElem.textContent = '🤖 The computer won the game!';

    } else {
        gameResElem.textContent = '🤝 The game ended in a tie!';
    }
}

function determineGameWinner(player_score, computer_score) {
    if (player_score > computer_score) {
        return 'player';
    } else if (computer_score > player_score) {
        return 'computer'
    } else {
        return 'tie';
    }
}