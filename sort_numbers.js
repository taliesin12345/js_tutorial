function numberCompare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

// Usage: <array>.sort(numberCompare);
// NB: There is a better way to sort numerically, using anonymous functions.
