class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.currentChoice = ''
  }

// takeTurn(event) {
//   console.log('hi')
  takeTurn(event) {
    this.currentChoice = event.target.id
  }
  // if (event.target.id === 'zombie-rock') {
  //   return 'zombie-rock'
  // } else if (event.target.id === 'knife') {
  //   return 'knife'
  // } else {
  //   return 'paper'
  //   }

setComputerChoice() {
  if (game.gameType === 'Classic') {
    game.computerPlayer.currentChoice = classicFighters[this.generateComputerIcon(classicFighters)]
  } else {
    game.computerPlayer.currentChoice = difficultFighters[this.generateComputerIcon(classicFighters)]
  }
}
  generateComputerIcon() {
  this.computerPlayer.currentChoice = this.fighters[Math.floor(Math.random() * this.fighters.length)]
  return this.computerPlayer.currentChoice;
  }

}
