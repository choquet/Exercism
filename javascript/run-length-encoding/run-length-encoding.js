export const encode = (input = "") => {
  var chars = input.match(/( |\w)\1*/g) || []
  return chars.reduce((acc, value) => {
    return acc + (value.length > 1 ? value.length : "") + value[0]
  }, "")
};

export const decode = (input = "") => {
  var chars = input.match(/([1-9]* |[1-9]*\w)\1*/g) || []
  return chars.reduce((acc, value) => {
    var number = value.match(/[1-9]+/) || 1
    return acc + value.slice(-1).repeat(number)
  }, "")
};
