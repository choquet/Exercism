export class Words {
  count(sentence) {
    let words = {}
    sentence.toLowerCase().trim().split(/\s+/).forEach(word => {
      if (Number.isInteger(words[word])) {
        words[word]++
      } else {
        words[word] = 1
      }
    })
    return words
  }
}
