// Usage: <array>.sort(numberCompare);
// This is not the best implementation (see below).
function numberCompare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

// This is a better way to sort numerically, using anonymous functions:
let anArray = [17, 8, 99, 42]
anArray.sort(function(a, b) {
  return (a - b);
});
// The anonymous function alone, for number sorting criteria:
function(a, b) {
  return (a - b);
}
