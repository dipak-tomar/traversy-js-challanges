function generateHashtag(str) {
  const splittedStr = str.trim().split(" ");
  if (str.trim() === "") {
    return false;
  }
  console.log(splittedStr);
  const firstWordCapital = splittedStr.map((item) => {
    item = item.slice(0, 1).toUpperCase() + item.slice(1);
    return item;
  });
  const addHashToString = `#${firstWordCapital.join("").trim()}`;
  console.log(firstWordCapital, addHashToString);
  return addHashToString.length > 140 ? false : addHashToString;
}

module.exports = generateHashtag;
