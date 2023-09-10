function formatPhoneNumber(numbers) {
  const firstThreeNumbers = `(${numbers.slice(0, 3).join("")})`;

  const nextSevenNumbers = `${numbers.slice(3, 6).join("")}-${numbers
    .slice(6)
    .join("")}`;
  console.log(firstThreeNumbers, nextSevenNumbers);

  return `${firstThreeNumbers}  ${nextSevenNumbers}`;
}

module.exports = formatPhoneNumber;
