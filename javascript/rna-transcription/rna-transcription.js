export const toRna = dna => dna.replace(/A/g, "U").replace(/T/g, "A").replace(/G/g, "_").replace(/C/g, "G").replace(/_/g, "C")
