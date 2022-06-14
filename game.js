class Game {
  constructor() {
    this.humanPlayer = new Player("Human", "💀")
    this.computerPlayer = new Player("Computer", "💻")
    this.gameType = "Classic" || "Difficult"
    this.fighters = [];
    this.winner;
}

//displaying available fighters
showFighters() {
if (this.gameType === 'Classic') {
  this.fighters = ['zombie-rock', 'knife', 'paper']
} else if (this.gameType === 'Diffcult') {
    this.fighters = ["zombie-rock", "knife", "paper", "chainsaw", "anotherone"]
  }
}




// determineWinner() {
//   if (this.humanPlayer.currentChoice === this.computerPlayer.currentChoice) {
//       return this.winner = 'tie';
//   } else if (this.humanPlayer.currentChoice === 'zombie-rock') && (this.computerPlayer.currentChoice === 'paper') ||
//             (this.humanPlayer.currentChoice === 'paper') && (this.comuterPlayer.currentChoice === 'zombie-rock') ||
//             (this.humanPlayer.currentChoice === 'knife') && (this.computerPlayer.currentChoice === 'paper') {
//
//             }
//
//   }
// }
