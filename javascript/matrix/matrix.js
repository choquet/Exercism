import { thisExpression } from "@babel/types";

export class Matrix {
  
  constructor(stringMatrix) {
    this.matrix = []
    let rows = stringMatrix.split("\n")
    for(let i = 0; i< rows.length; i++){
      let values = rows[i].split(" ").map(value => +value)
      this.matrix[i] = values
    }
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    let columnMatrix = []
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (!columnMatrix[j]) columnMatrix[j] = []
        columnMatrix[j].push(this.matrix[i][j])
      }
    }
    return columnMatrix
  }

}
