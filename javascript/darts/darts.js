export const solve = (x, y) => {
  
  var dst = Math.sqrt(x**2 + y**2)
  if(dst <= 1) {
    return 10
  } else if (dst <= 5) {
    return 5
  } else if (dst <= 10) {
    return 1
  } else {
    return 0
  }
};
