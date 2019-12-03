const arraysEqual = (a, b) => {
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length) return false
    for (var i = 0; i < a.length; i++) {
      if (!arraysEqual(a[i], b[i])) return false
    }
    return true
  } else {
    return a == b  
  }
}

export class Anagram {
  constructor(word) {
    this._word = word
  }

  matches(listOfWord) {
    return listOfWord.filter((word) => {
      var sameWord = this._word.toUpperCase() == word.toUpperCase()
      if (sameWord) {
        return false
      } else {
        return arraysEqual(this._word.toUpperCase().split("").sort(), word.toUpperCase().split("").sort())
      }
    })
  }

}
