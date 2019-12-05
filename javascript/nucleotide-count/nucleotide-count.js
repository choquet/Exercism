export class NucleotideCounts {
  static parse(dna) {
    let A = 0
    let C = 0
    let G = 0
    let T = 0

    dna.split("").forEach(element => {
      if (element == "A") A++
      else if (element == "C") C++
      else if (element == "G") G++
      else if (element == "T") T++
      else throw new Error('Invalid nucleotide in strand')
    })

    return `${A} ${C} ${G} ${T}`
  }
}
