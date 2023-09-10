// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

function reverseString(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString = reverseString + str[i];
  }

  return reverseString;
}

module.exports = reverseString;
