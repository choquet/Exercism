export const valid = (key) => {
  key = key.replace(/\s/g, "")
  if (key.length < 2 || /\D/.test(key)){
    return false
  } else {
    return !([...key].reverse().reduce((acc, val, ind) => {
      val = +val
      if(ind % 2 != 0) {
        val *= 2
        if(val > 9) val -=9
      }
      return acc + val
    }, 0) % 10)
  }
};


