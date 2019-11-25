export const validate = input =>  ("" + input).split("").reduce((acc, val, idx, src) => acc + Math.pow(+val, src.length), 0) == input
