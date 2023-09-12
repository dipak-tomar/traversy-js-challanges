function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  console.log("numbers", numbers);
  numbers.push(endNum);
  return numbers;
}

module.exports = numberRange;
