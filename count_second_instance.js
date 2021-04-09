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

// Sembra non funzionare, ma è da riverificare con una versione più avanzata di Node (pare che il supporto per Map funzioni solo con Node > 0.12.0)
let words = sonnet.match(/[\w']+/g);
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques[word]) {
    let currentValue = uniques.get(word);
    uniques.set(word, currentValue + 1);
  } else {
    uniques.set(word, 1);
  }
}
console.log(uniques);
