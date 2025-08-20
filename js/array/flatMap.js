const arr = [1, 2, 3];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : num));

console.log(result);
// Expected output: Array [1, 2, 2, 3]


// same as map then flat.

const arrMap = arr.map((e) => e === 2 ? [e, e] : e)
console.log(arrMap)
// output [ 1, [ 2, 2 ], 3 ]

console.log(arrMap.flat())
// output [ 1, 2, 2, 3 ]


// better example

const phare = "hello world".split(" ")
console.log(phare) 
// ['hello', 'world']

const word = "word".split(" ")
console.log(word)
// ["word"]

const phares = ["hello world", "javascript"]

const words = phares.map((e) => e.split(' '))
console.log(words)
// output [ ['hello', 'world'], ['javascript']]

console.log(words.flat())
// [hello, world, javascript]


// same as
console.log(phares.flatMap((e) => e.split(" ")))

// another better example
const users = [
  { name: "Alice", orders: [1001, 1002] },
  { name: "Bob", orders: [1003] },
  { name: "Carol", orders: [1004, 1005] }
];

const orders = users.flatMap((e) => e.orders)
console.log(orders)
// output [ 1001, 1002, 1003, 1004, 1005 ]