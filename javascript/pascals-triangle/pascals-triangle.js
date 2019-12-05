export class Triangle {
  
  constructor(nbRows) {
    this._rows = []

    for(let i = 0; i < nbRows ; i++) {
      
      // initialization
      let row = [1]

      // next value computed from above value
      for (let j = 1; j <= i; j++) {
        const upValue1 = this._rows[i - 1][j - 1]
        const upValue2 = this._rows[i - 1][j] || 0
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
