function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    console.log(reverseString(str.substr(1)));
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

module.exports = reverseString;
