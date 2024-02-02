function calculateTotal(productList) {
  let total = 0;
  productList.forEach((productList) => {
    total += productList.quantity * productList.price;
  });
  return total;
}

const productList = [
  { name: "happy", price: 50, quantity: 2 },
  { name: "car", price: 40, quantity: 1 },
  { name: "toy", price: 30, quantity: 2 },
];

function printvalue(value) {
  console.log(value);
}

const result = calculateTotal(productList);
printvalue(result); // 90
// console.log("grand total", result);

// printvalue();
