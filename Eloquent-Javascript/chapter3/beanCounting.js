// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
const countBs = (str) => [...str].reduce((count, letter) => { letter === 'B' && count++; return count }, 0);

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
const countChar = (str, char) => [...str].reduce((count, letter) => { letter === char && count++; return count }, 0);
