const sonnet = `Let me not to the marriage of true minds
                Admit impediments. Love is not love
                Which alters when it alteration finds,
                Or bends with the remover to remove:
                O, no! it is an ever-fixed mark,
                That looks on tempests and is never shaken;
                It is the star to every wandering bark,
                Whose worth's unknown, although his height be taken.
                Love's not Time's fool, though rosy lips and cheeks
                Within his bending sickle's compass come;
                Love alters not with his brief hours and weeks,
                But bears it out even to the edge of doom.
                  If this be error and upon me prov'd,
                  I never writ, nor no man ever lov'd.`;

// This time, a new Map object is initialized
let uniques = new Map();

// Improved matching syntax, to include apostrophes in words like "prov'd".
// (It could be improved more to distinguish between apostrophes in the middle of a word (i.e. "prov'd") and instances like "Love's" or "Time's").
// ---> \w matches any [a-zA-Z0-9] character, while the syntax [abc] matches EITHER a, b or c, or bb, or ccc etc (here b is the character '):
let words = sonnet.match(/[\w']+/g);

// With Maps, it appears you need to use .get() and .set() methods (to check a
// value, and to modify it). Otherwise, the code might not work correctly in
// some checks Example: the check 'if (uniques.get(word))' - that should return
// 'true' if a key for the word already exists, 'false' otherwise - was not
// working on a previous instance.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques.get(word)) {
    currentValue = uniques.get(word);
    uniques.set(word, currentValue + 1);
  } else {
    uniques.set(word, 1);
  }
}
console.log(uniques);
