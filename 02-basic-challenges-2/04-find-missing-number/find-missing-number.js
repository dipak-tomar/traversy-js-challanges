function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  if (!arr) return undefined;
  let n = arr.length + 1;
  const sumOfNumbers = (n * (n + 1)) / 2;
  let sumofArray = arr.reduce((sum, num) => sum + num, 0);
  //   for (let i = 0; i < arr.length; i++) {
  //     sumofArray += arr[i];
  //   }

  return sumOfNumbers - sumofArray;
}

module.exports = findMissingNumber;
