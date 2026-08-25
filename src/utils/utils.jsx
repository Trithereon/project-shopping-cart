function formatCurrency(number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(number);
}

function incrementItem(item) {}

export { formatCurrency };
