export class Triangle {
  
  constructor(nbRows) {
    this._rows = []

    for(let i = 0; i < nbRows ; i++) {
      let row = []

      // initialization
      row.push(1)

      // next value computed from above value
      for (let j = 1; j <= i; j++) {
        let upValue1 = this._rows[i - 1][j - 1]
        let upValue2 = (this._rows[i - 1][j]) ? this._rows[i - 1][j] : 0
        row.push(upValue1 + upValue2)
      }

      this._rows.push(row)
    }
  }

  get lastRow() {
    return this._rows[this._rows.length - 1]
  }

  get rows() {
    return this._rows
  }
}
