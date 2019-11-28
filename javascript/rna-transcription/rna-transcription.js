const TRANSCRIPTION = {
  A: "U",
  T: "A",
  G: "C",
  C: "G"
}

/**
 * Array.reduce solution
 * 
 * Better performance than Regexp and Array.map solutions
 *
 * @param {String} dna
 * @return {String} rna
 */
export const toRna = dna => dna.split('').reduce((acc, val) => acc + TRANSCRIPTION[val], "")

/**
 * Array.map solution
 * 
 * Better perf than Regexp solution
 * 
 * @param {String} dna
 * @return {String} rna
 */
export const toRna1 = dna => dna.split('').map((val) => TRANSCRIPTION[val]).join("")

/**
 * Regexp solution
 * 
 * @param {String} dna
 * @return {String} rna
 */
export const toRna2 = dna => dna.replace(/[ATCG]/g, x => TRANSCRIPTION[x])