let Phrase = require("my-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester();
  });
});

// Exercise (a form plus a Submit button instead of a simple button):
// document.addEventListener("DOMContentLoaded", function() {
//   let form = document.querySelector("#palindromeTesterBis");
//   form.addEventListener("submit", function() {
//     palindromeTester();
//   });
// });
