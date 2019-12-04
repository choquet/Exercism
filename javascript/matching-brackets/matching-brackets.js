export const matchingBrackets = (expression) => {
  if (expression.length == 0) {
    return true
  } else {
    while (expression.length) {
      var len = expression.length
      expression = expression.replace(/\{\}/g, "")
      expression = expression.replace(/\[\]/g, "")
      expression = expression.replace(/\(\)/g, "")
      if (len === expression.length) return false
    }
    return true
  }
}