function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return reversedStr === formattedStr;
}

module.exports = isPalindrome;
