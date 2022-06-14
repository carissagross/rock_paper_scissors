// --- GLOBAL VARIABLES ---
var game = new Game();
var classicFighters = ['zombie-rock', 'knife', 'paper']
var difficultFighters = ['zombie-rock', 'knife', 'paper', 'chainsaw', 'two-zombies']


// --- QUERY SELECTORS ---
var classicGame = document.querySelector('.classic-game'); // classic game section
var classicIcons = document.querySelector('.classic-icons'); // classic icons
var chooseBattle = document.querySelector('.choose-battle'); //choose your battle text
var chooseFighter = document.querySelector('.choose-fighter'); // choose fighter text
var difficultGame = document.querySelector('.difficult');
var difficultIcons = document.querySelector('.difficult-icons'); // difficult icons
var gamePanel = document.querySelector('.game-panel');
var computerIcon = document.querySelector('.computer-icons');
var playerChoices = document.querySelector('.player-choices');
var humanWins = document.querySelector('.human-win');
var resultsPanel = document.querySelector('.results-panel');
// var computerWins = document.querySelector('.computer-wins');
// var resetGame = document.querySelector('.reset-game');
// var changeGame = document.querySelector('.change-game');


// --- EVENT LISTENERS --
classicGame.addEventListener('click', pickClassicGame)
difficultGame.addEventListener('click', pickDifficultGame)
classicIcons.addEventListener('click', playGame)
difficultIcons.addEventListener('click', playGame)



//--- FUNCTIONS---
function pickClassicGame() {
game.gameType = 'Classic'
classicIcons.classList.remove('hidden');
classicGame.classList.add('hidden');
difficultGame.classList.add('hidden');
chooseFighter.classList.remove('hidden');
chooseBattle.classList.add('hidden');
console.log(game)
// player.takeTurn();
}

function pickDifficultGame() {
game.gameType = 'Difficult'
classicIcons.classList.add('hidden');
difficultIcons.classList.remove('hidden')
classicGame.classList.add('hidden');
difficultGame.classList.add('hidden');
chooseFighter.classList.remove('hidden');
chooseBattle.classList.add('hidden');
console.log(game)
}

function playGame() {
game.humanPlayer.takeTurn(event);
game.computerPlayer.setComputerChoice();
game.showFighters();
game.determineWinner();
showResultsPanel()
setTimeout(resetGame, 3000)
console.log(game)
}


function showResultsPanel() {
chooseFighter.classList.add('hidden');
classicIcons.classList.add('hidden');
difficultIcons.classList.add('hidden');
resultsPanel.innerHTML = `
<img class="fighter-icon" id="zombie-rock" src="./assets/${game.humanPlayer.currentChoice}.png">
<img class="fighter-icon" id="zombie-rock" src="./assets/${game.computerPlayer.currentChoice}.png">`
}


function resetGame() {
if (game.gameType === 'Classic') {
  pickClassicGame()
} else {
  pickDifficultGame()
} resultsPanel.innerHTML = ''
}

// // function should display the user choice and computer choice
// // funtion should display text
//
// if (event.target.classList.contains('zombie-rock') === true) {
//   player.currentChoice.innerHTML =
//   `<img class="fighter-icon" id="${event.target.id}" src="${event.target.src}">
//   <img class="fighter-icon" id="${this.computerPlayer.computerChoice}" src="./assets/${computerChoice}.png">`
// } else if (event.target.classList.contains('weapon') === true) {
//   playerChoices.innerHTML =
//   `<img class="fighter-icon" id="${event.target.id}" src="${event.target.src}">
//   <img class="fighter-icon" id="${computerChoice}" src="./assets/${computerChoice}.png">`
// } else {
//   playerChoices.innerHTML =
//   `<img class="fighter-icon" id="${event.target.id}" src="${event.target.src}">
//   <img class="fighter-icon" id="${computerChoice}" src="./assets/${computerChoice}.png">`
// }
// }
