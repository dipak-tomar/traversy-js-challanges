function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All Done!");
    return;
  }

  // recursive case
  console.log(num);
  num--;
  countDown(num);
}

module.exports = countDown;
