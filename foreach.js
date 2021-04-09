// Iterates through an array and prints the elements to the console.
let anArray = ["ant", "bat", "cat", 42];
anArray.forEach(function(element) {
  console.log(element);
});

// Same thing, with fat arrow notation.
let anArray = ["ant", "bat", "cat", 42];
anArray.forEach((element) => {
  console.log(element);
});

// Iterates through the characters of a string.
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});
