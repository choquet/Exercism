const distance = (str1, str2) => {
  if (!str1.length || !str2.length) return 0;
  let cost = 0;
  if (str1[0] != str2[0]) cost = 1;
  return cost + distance(str1.substr(1), str2.substr(1));
}

export const compute = (dna1, dna2) => {

  if (!dna1.length && dna2.length) throw new Error('left strand must not be empty');
  if (dna1.length && !dna2.length) throw new Error('right strand must not be empty');
  if (dna1.length != dna2.length) throw new Error('left and right strands must be of equal length');

  return distance(dna1, dna2)
};
