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

  static compare(one, two) {
    return one._a - two._a || one._b - two._b || one._c - two._c
  }

  static where({ sum = 0, minFactor = 1, maxFactor }) {
    let triplets = []
    for (let c = minFactor + 2; c <= maxFactor; c++) {
      for (let b = minFactor + 1; b < c; b++) {
        for (let a = minFactor; a < b; a++) {
          const triplet = new Triplet(a, b, c)
          if (triplet.isPythagorean()) {
            if (!sum || sum == triplet.sum()){
              triplets.push(triplet)
            }
          }
        }
      }
    }
    return triplets
  }
}
