
const CODONS = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine", 
  "UCC": "Serine",
  "UCA": "Serine", 
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan",
  "UAA": "STOP", 
  "UAG": "STOP", 
  "UGA": "STOP"
}

export const translate = (rna = "") => {
  var codons = rna.match(/.{1,3}/g) || []
  var proteins = codons.reduce((a, b) => { 
    if (CODONS[b]) a.push(CODONS[b])
    else throw new Error('Invalid codon')
    return a
  }, [])

  while(proteins.indexOf("STOP") != -1) {
    proteins = proteins.slice(0, -1)
  }

  return proteins
};
