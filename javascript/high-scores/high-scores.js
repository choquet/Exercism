export class HighScores {
  constructor(scores) {
    this._scores = scores 

    this._best = Math.max(...this._scores)

    this._first = -Infinity
    this._second = -Infinity
    this._third = -Infinity

    this._scores.forEach(score => {
      if (score > this._first) {
        this._third = this._second
        this._second = this._first
        this._first = score
      } else if (score > this._second) {
        this._third = this._second
        this._second = score
      } else if (score > this._third) {
        this._third = score
      }
    })

    this._topThree = []
    if (this._first > -Infinity) {
      this._topThree.push(this._first)
    }
    if (this._second > -Infinity) {
      this._topThree.push(this._second)
    }
    if (this._third > -Infinity) {
      this._topThree.push(this._third)
    }
  }

  get scores() {
    return this._scores
  }

  get latest() {
    return this._scores[this._scores.length - 1]
  }

  get personalBest() {
    return this._best
  }

  get personalTopThree() {
    
    return this._topThree
  }
}
