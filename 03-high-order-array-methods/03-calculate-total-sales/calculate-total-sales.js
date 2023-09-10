function calculateTotalSalesWithTax(products, taxRate) {
  const totalSalesAmount = products.reduce((totalAmount, product) => {
    return totalAmount + product.price * product.quantity;
  }, 0);

  console.log(totalSalesAmount);

  const totalAmountIncludingTax =
    totalSalesAmount + (taxRate * totalSalesAmount) / 100;
  console.log(totalAmountIncludingTax);
  return parseFloat(totalAmountIncludingTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
