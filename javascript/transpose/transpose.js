export const transpose = (matrix) => {
  var transposed = []
  matrix.forEach((row, indexRow) => {
    row += " ".repeat(matrix.slice(indexRow).reduce((acc, val) => (val.length > acc) ? val.length : acc, 0) - row.length)
    row.split("").forEach((value, index) => {
      if (!transposed[index]) transposed[index] = ""
      transposed[index] += value
    })
  })
  return transposed
};
