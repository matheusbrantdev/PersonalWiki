const cartItems = [
  { name: "Laptop", quantity: 1, inStock: true },
{ name: "Camera", quantity: 1, inStock: false },
  { name: "Phone", quantity: 2, inStock: true },
];

const hasOutOfStock = cartItems.some((e) => {
  console.log("run it");
  return e.inStock == false;
});

console.log(hasOutOfStock)
// output true

// at least one must be true to satisfied the condition. Similar to find, breaks it if condition satisfied