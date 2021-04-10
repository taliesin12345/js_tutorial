let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota".
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// Maps all the strings of an array into URL-friendly strings.
// --> Non-functional version of this algorithm (imperative version):
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));

// Same thing, but with functional programming (using Map), fat arrow notation
// and compact syntax:
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Creates a URL out of the 'urlified' version of a string.
function createUrls(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(createUrls(states));

// Filters out strings that have only ONE word.
// --> Non-functional version of this algorithm (imperative version):
// function imperativeSingles(elements) {
//   let singles = [];
//   elements.forEach(function(element) {
//     if (element.split(/\s+/).length === 1) {
//       singles.push(element);
//     }
//   });
//   return singles;
// }
// console.log(imperativeSingles(states));

// Better version, executed with functional programming and Filter:
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Tests for the presence of the word "Dakota" using String#includes:
function dakotaTest(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(dakotaTest(states));

// Tests for elements composed of TWO words:
function functionalTwoWorders(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalTwoWorders(states));

// Sums numbers. A non-functional, imperative version of this algorithm:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function imperativeSum(elements) {
//   let total = 0;
//   elements.forEach(function(n) {
//     total += n;
//   });
//   return total;
// }
// console.log(imperativeSum(numbers));

// A better, functional-programming implementation of sumNumbers with 'Reduce':
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// Create a plain object (aka an associative array), with key = 'name of the
// state' (see variable 'states', above) and value = their number of letters.
// Non-functional, imperative version of the solution:
// function imperativeLengths(elements) {
//   let lengths = {};
//    elements.forEach(function(element) {
//      lengths[element] = element.length;
//    });
//    return lengths;
// }
// console.log(imperativeLengths(states));

// A better, functional-programming implementation:
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));

// Returns the product of all the elements in an array.
function functionalProduct(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));









blah
