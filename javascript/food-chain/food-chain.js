const FOOD_CHAIN = ['old lady', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse']
const EATING = [
  '',
  '',
  'It wriggled and jiggled and tickled inside her.',
  'How absurd to swallow a bird!',
  'Imagine that, to swallow a cat!',
  'What a hog, to swallow a dog!',
  'Just opened her throat and swallowed a goat!',
  'I don\'t know how she swallowed a cow!'
]
export class Song {
  verse(number) {
    let verse = `I know an old lady who swallowed a ${FOOD_CHAIN[number]}.\n`
    if (number == FOOD_CHAIN.length - 1) {
      verse += `She's dead, of course!\n`
      return verse
    }

    if (number > 1) {
      verse += EATING[number] + "\n"
      for(let i = number; i > 1 ; i--) {
        verse += `She swallowed the ${FOOD_CHAIN[i]} to catch the ${FOOD_CHAIN[i - 1]}`
        if (i == 3) {
          verse += ` that wriggled and jiggled and tickled inside her.\n`
        } else {
          verse += `.\n`
        }
      }
    }

    verse += `I don't know why she swallowed the fly. Perhaps she'll die.\n`

    return verse
  }

  verses(start = 1, end = 8) {
    var verses = []
    for (let i = start; i <= end; i++) {
      verses.push(this.verse(i))
    }
    return verses.join("\n") + "\n"
  }
}
