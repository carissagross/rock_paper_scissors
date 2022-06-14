// --- GLOBAL VARIABLES ---
var game = new Game();
var classicFighters = ['zombie-rock', 'knife', 'paper']
var difficultFighters = ['zombie-rock', 'knife', 'paper', 'chainsaw', 'two-zombies']

// --- QUERY SELECTORS ---
var classicGame = document.querySelector('.classic-game');
var classicIcons = document.querySelector('.classic-icons');
var changeGameButton = document.querySelector('.change-game-button')
var chooseBattle = document.querySelector('.choose-battle');
var chooseFighter = document.querySelector('.choose-fighter');
var difficultGame = document.querySelector('.difficult');
var difficultIcons = document.querySelector('.difficult-icons');
var gamePanel = document.querySelector('.game-panel');
var humanScore = document.querySelector('.human-score-counter');
var resultsPanel = document.querySelector('.results-panel');
var resultsPanelText = document.querySelector('.results-panel-text')
var zombieScore = document.querySelector('.zombie-score-counter');

// --- EVENT LISTENERS ---
changeGameButton.addEventListener('click', changeGame);
classicGame.addEventListener('click', pickClassicGame);
classicIcons.addEventListener('click', playGame);
difficultGame.addEventListener('click', pickDifficultGame);
difficultIcons.addEventListener('click', playGame);

// 1--- FUNCTIONS ---
function pickClassicGame() {
game.gameType = 'Classic'
classicIcons.classList.remove('hidden');
classicGame.classList.add('hidden');
difficultGame.classList.add('hidden');
chooseFighter.classList.remove('hidden');
chooseBattle.classList.add('hidden');
}

function pickDifficultGame() {
game.gameType = 'Difficult'
classicIcons.classList.add('hidden');
classicGame.classList.add('hidden');
difficultIcons.classList.remove('hidden')
difficultGame.classList.add('hidden');
chooseFighter.classList.remove('hidden');
chooseBattle.classList.add('hidden');
}

function playGame() {
game.humanPlayer.takeTurn(event);
game.computerPlayer.setComputerChoice();
game.showFighters();
game.determineWinner();
showResultsPanel();
updateScore();
}

function showResultsPanel() {
chooseFighter.classList.add('hidden');
classicIcons.classList.add('hidden');
difficultIcons.classList.add('hidden');
changeGameButton.classList.remove('hidden')
resultsPanel.classList.remove('hidden')
resultsPanelText.classList.remove('hidden')

if (game.humanPlayer.currentChoice === game.computerPlayer.currentChoice) {
  resultsPanelText.innerHTML = `<p class="tie">TIE!</p>`
  setTimeout(resetGame, 4000)
} else if (game.winner === game.humanPlayer) {
  resultsPanelText.innerHTML = `<p class="human-wins">Human Wins!<br>You're safe for now!</p>`
  setTimeout(resetGame, 4000)
} else if (game.winner === game.computerPlayer) {
  resultsPanelText.innerHTML= `<p class="computer-wins">BRRRAAAAIINNNNS!</p>`
  setTimeout(resetGame, 4000)
}
  resultsPanel.innerHTML = `
  <img class="fighter-icon" id="zombie-rock" src="./assets/${game.humanPlayer.currentChoice}.png">
  <img class="fighter-icon" id="zombie-rock" src="./assets/${game.computerPlayer.currentChoice}.png">`
}

function updateScore() {
humanScore.innerText = `Wins: ${game.humanPlayer.wins}`
zombieScore.innerText = `Wins: ${game.computerPlayer.wins}`
}

function resetGame() {
if (game.gameType === 'Classic') {
  pickClassicGame()
} else {
  pickDifficultGame()
} resultsPanel.innerHTML = ''
  resultsPanelText.innerHTML = ''
}

function changeGame() {
classicGame.classList.remove('hidden');
classicIcons.classList.add('hidden');
difficultGame.classList.remove('hidden');
resultsPanel.classList.add('hidden')
resultsPanelText.classList.add('hidden')
}
