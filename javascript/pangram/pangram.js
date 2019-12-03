/**
 * Using Regex with backtracking
 * 
 * @param {String} sentence 
 */
export const isPangram = sentence => (sentence.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26

/**
 * Using Set and match
 * 
 * @param {String} sentence 
 */
export const isPangram2 = sentence => (new Set(sentence.toLowerCase().match(/[a-z]/g)).size) == 26

/**
 * Use every and includes
 * 
 * @param {String} sentence 
 */
export const isPangram3 = sentence => "abcdefghijklmnopqrstuvwxyz".every((letter) => sentence.includes(letter))

