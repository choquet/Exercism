export class Matrix {
  
  constructor(stringMatrix) {
    this._rows = stringMatrix.split("\n").map((row) => {
      return row.split(" ").map(value => +value)
    })

    this._columns = []
    for (let i = 0; i < this._rows[0].length; i++) {
      this._columns[i] = this._rows.map(row => row[i])
    }
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._columns
  }

}
