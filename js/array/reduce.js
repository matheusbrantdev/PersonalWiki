const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Sneakers", category: "Clothing" },
  { name: "Chair", category: "Furniture" }
];


const groupByCategory =products.reduce((acc, item) => {

    // se não tiver uma key, crie uma key.
    if(!acc[item.category]) {
        acc[item.category] = []
    }

    // pegue a key, e da push no array.
    acc[item.category].push(item)

    return acc
}, {})

console.log(groupByCategory)
// {
//   Electronics: [
//     { name: 'Laptop', category: 'Electronics' },
//     { name: 'Phone', category: 'Electronics' }
//   ],
//   Clothing: [
//     { name: 'Shirt', category: 'Clothing' },
//     { name: 'Sneakers', category: 'Clothing' }
//   ],
//   Furniture: [ { name: 'Chair', category: 'Furniture' } ]
// }