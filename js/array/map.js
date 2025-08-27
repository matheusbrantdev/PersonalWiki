const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 400 }
];

const taxRate = 0.1;

const newArray = products.map((element) => {
    return {
        ...element,
    priceWithTax: (element.price * (1 + taxRate)).toFixed(2)
    }
})


// it creates a new array.