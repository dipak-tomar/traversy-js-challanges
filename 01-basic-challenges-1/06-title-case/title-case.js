function titleCase(str) {
  const spliteedStr = str.toLowerCase().split(" ");
  for (let index = 0; index < spliteedStr.length; index++) {
    spliteedStr[index] =
      spliteedStr[index][0].toUpperCase() + spliteedStr[index].slice(1);
  }
  return spliteedStr.join(" ");
}

module.exports = titleCase;
