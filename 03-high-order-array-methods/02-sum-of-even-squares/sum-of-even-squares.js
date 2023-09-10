function sumOfEvenSquares(nums) {
  const evenNumbers = nums.filter((i) => i % 2 === 0);
  console.log(evenNumbers);

  const sum = evenNumbers.reduce((sum, i) => sum + i ** 2, 0);
  console.log(sum);
}

module.exports = sumOfEvenSquares;
