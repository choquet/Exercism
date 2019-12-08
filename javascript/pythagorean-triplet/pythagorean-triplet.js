export class Triplet {
  constructor(a, b, c) {
    this._a = a
    this._b = b
    this._c = c
  }

  sum() {
    return this._a + this._b + this._c
  }

  product() {
    return this._a * this._b * this._c
  }

  isPythagorean() {
    return this._a**2 + this._b**2 == this._c**2
  }

  toString() {
    return (this._a + '').padStart(15, '0');
  }

  static where({ sum = 0, minFactor = 1, maxFactor }) {
    let triplets = []
    for (let b = minFactor + 1; b < maxFactor; b++) {
      for (let a = minFactor; a < b; a++) {
        let c = Math.sqrt(a**2 + b**2)
        if(c <= maxFactor && Number.isInteger(c)){
          const triplet = new Triplet(a, b, c)
          if (triplet.isPythagorean() && (!sum || sum == triplet.sum())) triplets.push(triplet)
        }
      }
    }
    return triplets
  }
}
