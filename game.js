class Game {
  constructor(game) {
    this.humanPlayer = new Player('Human', '💀');
    this.computerPlayer = new Player('Zombie', '🧟');
    this.gameType = game;
    this.fighters = [];
    this.winner;
}

//displaying available fighters
showFighters() {
  if (this.gameType === 'Classic') {
    this.fighters = ['zombie-rock', 'knife', 'paper']
    } else if (this.gameType === 'Diffcult') {
    this.fighters = ['zombie-rock', 'knife', 'paper', 'chainsaw', 'two-zombies']
  }
}

determineWinner() {
  if (this.humanPlayer.currentChoice === this.computerPlayer.currentChoice) {
      return this.winner = 'tie';
  } else if ((this.humanPlayer.currentChoice === 'zombie-rock' && (this.computerPlayer.currentChoice === 'knife' || this.computerPlayer.currentChoice === 'chainsaw')) ||
            (this.humanPlayer.currentChoice === 'paper' && (this.computerPlayer.currentChoice === 'zombie-rock' || this.computerPlayer.currentChoice === 'two-zombies')) ||
            (this.humanPlayer.currentChoice === 'knife' && (this.computerPlayer.currentChoice === 'paper' || this.computerPlayer.currentChoice === 'two-zombies')) ||
            (this.humanPlayer.currentChoice === 'chainsaw' && (this.computerPlayer.currentChoice === 'two-zombies' || this.computerPlayer.currentChoice === 'paper'))
            (this.humanPlayer.currentChoice === 'two-zombies' && (this.computerPlayer.currentChoice === 'knife' || this.computerPlayer.currentChoice === 'chainsaw')))
          {
            this.winner = this.humanPlayer
            this.humanPlayer.wins ++
        } else {
          this.winner = this.computerPlayer
          this.computerPlayer.wins ++
        }
      }
    }
