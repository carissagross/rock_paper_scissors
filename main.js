// --- GLOBAL VARIABLES ---
var game = new Game();
var classicFighters = ['zombie-rock', 'knife', 'paper']
var difficultFighters = ['zombie-rock', 'knife', 'paper', 'chainsaw', 'two-zombies']

// --- QUERY SELECTORS ---
var classicGame = document.querySelector('.classic-game');
var classicIcons = document.querySelector('.classic-icons');
var changeGame = document.querySelector('.change-game-button')
var chooseBattle = document.querySelector('.choose-battle');
var chooseFighter = document.querySelector('.choose-fighter');
var difficultGame = document.querySelector('.difficult');
var difficultIcons = document.querySelector('.difficult-icons');
var gamePanel = document.querySelector('.game-panel');
var humanScore = document.querySelector('.human-score-counter');
var resultsPanel = document.querySelector('.results-panel');
var zombieScore = document.querySelector('.zombie-score-counter');


// --- EVENT LISTENERS --
classicGame.addEventListener('click', pickClassicGame)
difficultGame.addEventListener('click', pickDifficultGame)
classicIcons.addEventListener('click', playGame)
difficultIcons.addEventListener('click', playGame)
changeGame.addEventListener('click', changeGame)


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
showResultsPanel();
updateScore();
setTimeout(resetGame, 3000)
console.log(game)
}

function showResultsPanel() {
chooseFighter.classList.add('hidden');
classicIcons.classList.add('hidden');
difficultIcons.classList.add('hidden');
changeGame.classList.remove('hidden')
resultsPanel.innerHTML = `
<img class="fighter-icon" id="zombie-rock" src="./assets/${game.humanPlayer.currentChoice}.png">
<img class="fighter-icon" id="zombie-rock" src="./assets/${game.computerPlayer.currentChoice}.png">`

if (game.winner === 'tie') {
  resultsPanel.innerHTML = `<p class="tie">TIE!</p>`
} else if (game.winner === game.humanPlayer) {
    resultsPanel.innerHTML = `<p class="human-wins">Human Wins!<br>You're safe for now!</p>`
  } else if (game.winner === game.computerPlayer) {
    resultsPanel.innerHTML = `<p class="computer-wins">BRRRAAAAIINNNNS!</p>`
  }
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

function changeGame() {

}

}
