const PERFECT = "perfect"
const ABUNDANT = "abundant"
const DEFICIENT = "deficient"

export const classify = (number) => {

  if (!number || number < 0) throw new Error('Classification is only possible for natural numbers.')

  let sumFactors = divisors(number).reduce((acc, val) => acc + val, 0)
  
  if (sumFactors > number) {
    return ABUNDANT
  } else if(sumFactors < number) {
    return DEFICIENT
  } else {
    return PERFECT
  }
};

const divisors = (n) => {
  let divisors = []
  let i = 1
  while (i <= (n + 1) / 2) {
    if (n % i == 0 && i != n) {
      divisors.push(i)
    }
    i++
  }
  return divisors
}