export class Bowling {

  constructor(){
    this.currentRound = 1
    this.rounds = {}
  }

  roll(number) {
    if (number < 0) throw 'Negative roll is invalid'
    if (number > 10) throw 'Pin count exceeds pins on the lane'
    if (this.currentRound > 10) throw 'Cannot roll after game is over'
    if (this.currentRound < 10) {
      // Rounds 1-9
      if(!this.rounds[this.currentRound]) {
        // First shot
        const isStrike = (number == 10)
        this.rounds[this.currentRound] = {
          strike: isStrike,
          spare: false,
          firstShot: number
        }
        if (isStrike) this.currentRound++
      } else {
        // Second shot
        if (this.rounds[this.currentRound].firstShot + number > 10) throw 'Pin count exceeds pins on the lane'
        const isSpare = (this.rounds[this.currentRound].firstShot + number == 10)
        this.rounds[this.currentRound].secondShot = number
        this.rounds[this.currentRound].spare = isSpare
        this.currentRound++
      }
    } else {
      // Round 10
      if (!this.rounds[this.currentRound]) {
        // First shot
        const isStrike = (number == 10)
        this.rounds[this.currentRound] = {
          strike: isStrike,
          spare: false,
          firstShot: number
        }
      } else if (this.rounds[this.currentRound].secondShot == undefined) {
        if (this.rounds[this.currentRound].strike) {
          this.rounds[this.currentRound].secondShot = number
        } else {
          if (this.rounds[this.currentRound].firstShot + number > 10) throw 'Pin count exceeds pins on the lane'
          const isSpare = (this.rounds[this.currentRound].firstShot + number == 10)
          this.rounds[this.currentRound].secondShot = number
          this.rounds[this.currentRound].spare = isSpare
          if(!isSpare) this.currentRound ++
        }

      } else if (this.rounds[this.currentRound].thirdShot == undefined) {
        if (this.rounds[this.currentRound].secondShot == 10) {
          this.rounds[this.currentRound].thirdShot = number
        } else if (this.rounds[this.currentRound].spare) {
          this.rounds[this.currentRound].thirdShot = number
        } else {
          if (this.rounds[this.currentRound].secondShot + number > 10) throw 'Pin count exceeds pins on the lane'
          this.rounds[this.currentRound].thirdShot = number
        }
        this.currentRound ++
      }
    }
  }

  score() {
    if (this.currentRound != 11) throw 'Score cannot be taken until the end of the game'
    let score = 0
    for(let i = 1; i < 10 ; i++) {
      if (this.rounds[i].strike) {
         // Strike => score += 10 + next shot + next shot
        score += this.rounds[i].firstShot + this.rounds[i + 1].firstShot
        if (this.rounds[i + 1].strike && i < 9){
          // next is strike again
          score += this.rounds[i + 2].firstShot
        } else {
          // next isn't strike
          score += this.rounds[i + 1].secondShot 
        }
      } else if(this.rounds[i].spare) {
        // Spare => score += 10 + next shot 
        score += this.rounds[i].firstShot + this.rounds[i].secondShot + this.rounds[i+1].firstShot
      } else {
        // No strike / No spare
        score += this.rounds[i].firstShot + this.rounds[i].secondShot
      }
    }
    score += this.rounds[10].firstShot + this.rounds[10].secondShot
    if (this.rounds[10].spare || this.rounds[10].strike) {
      score += this.rounds[10].thirdShot
    }
    return score
  }
}
