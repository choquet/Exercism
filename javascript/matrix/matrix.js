export class Matrix {
  
  constructor(stringMatrix) {
    this.matrix = []
    stringMatrix.split("\n").map((row, index) => {
      let values = row.split(" ").map(value => +value)
      this.matrix[index] = values
    })
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    let columnMatrix = []
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (i == 0) columnMatrix[j] = []
        columnMatrix[j].push(this.matrix[i][j])
      }
    }
    return columnMatrix
  }

}
