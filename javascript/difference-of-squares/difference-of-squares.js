export class Squares {
  constructor(n) {
    this.number = n
  }

  get sumOfSquares() {
    return (this.number * (this.number + 1) * (2 * this.number + 1))/6
  }

  get squareOfSum() {
    return (this.number * (this.number + 1) / 2)**2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
