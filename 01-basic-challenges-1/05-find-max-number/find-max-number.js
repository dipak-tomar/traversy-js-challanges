// function findMaxNumber(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element > max) {
//       max = element;
//     }
//   }
//   return max;
// }
function findMaxNumber(arr) {
  return Math.max(...arr);
}

module.exports = findMaxNumber;
