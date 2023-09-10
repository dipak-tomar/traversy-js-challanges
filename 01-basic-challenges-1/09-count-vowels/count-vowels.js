function countVowels(str) {
  const isVowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (isVowels.includes(element)) {
      console.log(element);
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
