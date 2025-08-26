const array = ["hello", "world", "javascript"]

// returns a string of each elements, separate my comma.

console.log(array.join())
// hello,world,javascript

console.log(array.join(", "))
// hello, world, javascript


// technally works it too.
const array2=[{id: 1, isFinite: true}, {id: 2, isFinite: false}]
console.log(array2.join(", "))

// random example

const phrases = ["hello world", 'javascript']

const words = phrases.flatMap((e) => e.split(" "))
console.log(words)
// [ 'hello', 'world', 'javascript' ]
const message = words.join(" ") + "."
console.log(message)