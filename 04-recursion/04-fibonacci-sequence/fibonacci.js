function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  console.log(fibonacci(num - 1), fibonacci(num - 2));
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
