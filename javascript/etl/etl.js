export const transform = oldScore => {
  var newScore = {}
  Object.keys(oldScore).forEach(score => {
    oldScore[score].forEach(letter => {
      newScore[letter.toLowerCase()] = +score
    })
  })
  return newScore
};
