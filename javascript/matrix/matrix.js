export class Matrix {
  
  constructor(stringMatrix) {
    
    this._rows = stringMatrix.split("\n").map(row => row.split(" ").map(value => +value))
    
    this._columns = this._rows[0].map((_, indexRow) => this._rows.map(row => row[indexRow]));
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._columns
  }

}
