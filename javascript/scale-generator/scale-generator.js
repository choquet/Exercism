const FULL_SCALE_FLAT = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab']
const FULL_SCALE_SHARP = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
const USE_SHARPS = ['G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#']
const USE_FLATS = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb']

export class Scale {

  constructor(tonic) {
    
    this._tonic = tonic.charAt(0).toUpperCase() + tonic.slice(1)

    this._useFlats = (USE_FLATS.indexOf(tonic) != -1)
    this._useSharps = (USE_SHARPS.indexOf(tonic) != -1)

    this._chromatic = this._useFlats ? FULL_SCALE_FLAT : FULL_SCALE_SHARP
    
    while (this._tonic != this._chromatic[0]) {
      this._chromatic.push(this._chromatic.shift())
    }
    
  }

  chromatic() {
    return this._chromatic
  }

  interval(intervals) {
    let scale = [this._tonic]
    let indexTune = 0
    for(let interval of intervals) {
      switch(interval) {
        case "m":
          indexTune += 1
          break;
        case "M":
          indexTune += 2
          break;
        case "A":
          indexTune += 3
          break;
        default: 
          throw new Error("Invalid interval")
      }
      if (this._chromatic[indexTune]) scale.push(this._chromatic[indexTune])
    }
    return scale
  }
}
