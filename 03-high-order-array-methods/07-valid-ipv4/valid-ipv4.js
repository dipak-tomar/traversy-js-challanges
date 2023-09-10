const isValidIPv4 = (str) => {
  const splittedStr = str.split(".");
  console.log(splittedStr);
  if (splittedStr.length !== 4) {
    return false;
  }
  const checkForIPv4 = splittedStr.every((item) => +item > 0 && +item <= 255);
  console.log(checkForIPv4);

  return checkForIPv4;
};

module.exports = isValidIPv4;
