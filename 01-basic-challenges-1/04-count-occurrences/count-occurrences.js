// function countOccurrences(str, char) {
//   let count = 0;
//   const lowercaseChar = char.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element.toLowerCase() === lowercaseChar) {
//       count++;
//     }
//   }
//   return count;
// }

const countOccurrences = (str, char) => {
  return str.split(char).length - 1;
};

module.exports = countOccurrences;
