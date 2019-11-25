export const steps = input => {
  
  if (input <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  let step = 0
  while (input != 1) {
    step++
    if (input % 2 === 0) {
      input = input / 2
    } else {
      input = input * 3 + 1
    }
  }
  return step
};
