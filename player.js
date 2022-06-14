class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.currentChoice = ''
  }

  takeTurn(event) {
    this.currentChoice = event.target.id
  }

setComputerChoice() {
  if (game.gameType === 'Classic') {
    game.computerPlayer.currentChoice = classicFighters[this.generateComputerIcon(classicFighters)]
  } else if (game.gameType === 'Difficult') {
    game.computerPlayer.currentChoice = difficultFighters[this.generateComputerIcon(difficultFighters)]
  }
}

generateComputerIcon(array) {
return Math.floor(Math.random() * array.length)
}

}



// if (event.target.id === 'zombie-rock') {
//   return 'zombie-rock'
// } else if (event.target.id === 'knife') {
//   return 'knife'
// } else {
//   return 'paper'
//   }
