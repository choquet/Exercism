const countMinesArround = (matrix, i, j) => {
  const topLeft = (matrix[i - 1] && matrix[i - 1][j - 1] == "*") ? 1 : 0
  const top = (matrix[i - 1] && matrix[i - 1][j] == "*") ? 1 : 0
  const topRight = (matrix[i - 1] && matrix[i - 1][j + 1] == "*") ? 1 : 0
  const left = (matrix[i] && matrix[i][j - 1] == "*") ? 1 : 0
  const right = (matrix[i] && matrix[i][j + 1] == "*") ? 1 : 0
  const bottomLeft = (matrix[i + 1] && matrix[i + 1][j - 1] == "*") ? 1 : 0
  const bottom = (matrix[i + 1] && matrix[i + 1][j] == "*") ? 1 : 0
  const bottomRight = (matrix[i + 1] && matrix[i + 1][j + 1] == "*") ? 1 : 0
  return topLeft + top + topRight + left + right + bottomLeft + bottom + bottomRight
}

export const annotate = (input) =>  {
  return input.map((row, i) => row.split("").map((val, j) => {
    if(val == "*") {
      return "*"
    } else {
      return countMinesArround(input, i, j) || " "
    }
  }).join(""))
}
