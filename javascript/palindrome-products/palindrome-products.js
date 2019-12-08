const isPalindromic = (numberOrString) => {
  if (+numberOrString < 10) return true
  let s = "" + numberOrString
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[(s.length - 1) - i]) return false
  }
  return true
}

export class Palindromes {
  static generate({maxFactor, minFactor}) {

    if(minFactor > maxFactor) {
      throw new Error("min must be <= max")
    }

    let returnValue = {
      smallest: {
        value: null,
        factors: []
      },
      largest: {
        value: null,
        factors: []
      }
    }
    
    for(let i = minFactor; i <= maxFactor ; i++) {
      for (let j = i; j <= maxFactor; j++) {
        if(isPalindromic(i*j)){
          if (!returnValue.smallest.value) {
            returnValue.smallest.value = i * j
            returnValue.smallest.factors.push([i, j])
            returnValue.largest.value = i * j
            returnValue.largest.factors.push([i, j])
          } else {
            if ((i * j) == returnValue.smallest.value){
              returnValue.smallest.factors.push([i, j])
            } else if ((i * j) > returnValue.largest.value){
              returnValue.largest.value = i * j
              returnValue.largest.factors = [[i, j]]
            } else if ((i * j) == returnValue.largest.value) {
              returnValue.largest.factors.push([i, j])
            }
          } 
        }
      }  
    }
    return returnValue
  }
}