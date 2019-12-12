export const largestProduct = (string, sliceLength) => {
  
  if (sliceLength < 0 || /(\D)/.test(string)) throw 'Invalid input.'
  if (sliceLength > string.length) throw 'Slice size is too big.'
  if (sliceLength == 0) return 1

  const array = string.split("");
  
  let maxProduct = -Infinity
  
  let productArray = []

  array.forEach(element => {
    
    if (productArray.length == sliceLength) productArray.shift()
    productArray.push(element)

    if (productArray.length == sliceLength) {
      const product = productArray.reduce((acc, el) => acc * el, 1)
      if(product > maxProduct) {
        maxProduct = product
      }
    }

  })

  return maxProduct
};
