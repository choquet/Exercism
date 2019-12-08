import BigInt from './lib/big-integer';

export class Grains {

  constructor() {
    this._square = []
    this._square[0] = 1
    for(let i = 1 ; i < 64; i++) {
      const previous = new BigInt(this._square[i - 1])
      this._square[i] = new BigInt(previous.add(previous))
    }
  }

  square(number) {
    return this._square[number-1].toString()
  }

  total() {
    return this._square.reduce((acc, val) => new BigInt(new BigInt(acc).add(val)), 0).toString()
  }
}
