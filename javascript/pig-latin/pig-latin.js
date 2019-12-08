export class translator {
  static translate(sentence) {
    return sentence.split(" ").map(word => {

      const rule1 = /^([aeiou]+|[x][r]|[y][t])/gi
      const rule2 = /^([zrtpqsdfghklmwxcvbn]+|[y])/gi
      const rule3 = /^([zrtpqsdfghklmwxcvbn]*[q][u])/gi

      if (rule1.test(word)) {
        word = word + "ay"
      }
      else if (rule3.test(word)) {
        word = word.replace(rule3, "") + rule3.exec(word)[0] + "ay"
      }
      else if (rule2.test(word)) {
        word = word.replace(rule2, "") + rule2.exec(word)[0] + "ay"
      }
      return word
    }).join(" ")
  }
}
