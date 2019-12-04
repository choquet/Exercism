export class BeerSong {
  static verse(number) {
    let verse = `${number != 0 ? number : 'No more' } bottle${number > 1 || number == 0 ? 's' : '' } of beer on the wall, ${number != 0 ? number : 'no more' } bottle${number > 1 || number == 0 ? 's' : '' } of beer.\n`
    if(number > 0) {
      verse += `Take ${ number > 1 ? 'one' : 'it' } down and pass it around, ${ (number - 1) > 0 ? number - 1 : 'no more' } bottle${ (number - 1) > 1 || (number - 1) == 0 ? 's' : '' } of beer on the wall.\n`
    } else {
      verse += `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
    }
    return verse
  }

  static sing(start=99, end = 0) {
    var verses = []
    for(let i = start ; i >= end ; i--) {
      verses.push(this.verse(i))
    }
    return verses.join("\n")
  }
}
