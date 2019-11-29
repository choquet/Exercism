export const isPangram = sentence => (sentence.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26
