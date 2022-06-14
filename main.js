// --- GLOBAL VARIABLE ---
var game = new Game();
var classicFighters = ["zombie-rock", "knife", "paper"]
var difficultFighters = ["zombie-rock", "knife", "paper", "chainsaw", "anotherone"]

// --- QUERY SELECTORS ---
var classicGame = document.querySelector('.classic-game'); // classic game section
var classicIcons = document.querySelector('.classic-icons');
var difficultIcons = document.querySelector('.difficult-icons');
var chooseBattle = document.querySelector('.choose-battle'); //choose your battle text
var chooseFighter = document.querySelector('.choose-fighter'); // choose fighter text
var gamePanel = document.querySelector('.game-panel');

var difficultGame = document.querySelector('.difficult');
var computerIcon = document.querySelector('.computer-icons');
var playerChoices = document.querySelector('.player-choices');
// var humanWins = document.querySelector('.human-wins');
// var computerWins = document.querySelector('.computer-wins');
// var resetGame = document.querySelector('.reset-game');
// var changeGame = document.querySelector('.change-game');


// --- Event Listeners --
classicGame.addEventListener('click', pickClassicGame)
difficultGame.addEventListener('click', pickDifficultGame)
classicIcons.addEventListener('click', playGame)



//--- Functions ---
function pickClassicGame() {
game.gameType = "Classic"
classicIcons.classList.remove('hidden');
classicGame.classList.add('hidden');
difficultGame.classList.add('hidden');
chooseFighter.classList.remove('hidden');
chooseBattle.classList.add('hidden');
console.log(game)
// player.takeTurn();
}

function pickDifficultGame() {
difficultIcons.classList.remove('hidden')
classicIcons.classList.add('hidden');
classicGame.classList.add('hidden');
difficultGame.classList.add('hidden');
chooseFighter.classList.remove('hidden');
chooseBattle.classList.add('hidden');
}

function playGame() {
game.showFighters();
game.humanPlayer.takeTurn(event);
game.computerPlayer.generateComputerIcon();
console.log(game)
}



// gamePanel.addEventListener.('click', function(event)) {
//   if (event.target.classList.contains('zombie-rock') === true) {
//     playerChoices.innerHTML =
//     `<img class="fighter-icon" id="${event.target.id}" src="${event.target.src}">
//     <img class="fighter-icon" id="${computerChoice}" src="./assets/${computerChoice}.png">`
//   } else if (event.target.classList.contains('weapon') === true) {
//     playerChoices.innerHTML =
//     `<img class="fighter-icon" id="${event.target.id}" src="${event.target.src}">
//     <img class="fighter-icon" id="${computerChoice}" src="./assets/${computerChoice}.png">`
//   } else {
//     playerChoices.innerHTML =
//     `<img class="fighter-icon" id="${event.target.id}" src="${event.target.src}">
//     <img class="fighter-icon" id="${computerChoice}" src="./assets/${computerChoice}.png">`
//   }
// });
