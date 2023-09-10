function validatePassword(password) {
  const splittedPassword = password.split("");
  console.log(splittedPassword);
  const isLengthValid = splittedPassword.length >= 8;
  const isUppercase = splittedPassword.some(
    (char) => char === char.toUpperCase() && char !== char.toLowerCase()
  );
  const isLowercase = splittedPassword.some(
    (char) => char === char.toLowerCase() && char !== char.toUpperCase()
  );

  const hasDigit = splittedPassword.some((char) => !isNaN(char, 10));
  return isLengthValid && isUppercase && isLowercase && hasDigit;
}

module.exports = validatePassword;
