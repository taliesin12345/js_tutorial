// Reverses a string. Doesn't work with emopjis. (Better solutions right below)
// function reverse(string) {
//   return string.split("").reverse().join("");
// }

// Reverses a string. Works with emopjis.
// Example sentence to try it out: The quick brown 🦊 and the faithful 🐕
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise. Case-insensitive.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// (Exercise) Splits username and domain in an email address.
function emailSplitter(email) {
  return emailArray = email.toLowerCase().split("@");
}
