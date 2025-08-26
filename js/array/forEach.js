const array = ["a", "b", "c"];

// like map, for each loop each element, but foreach does not return a array after it.

const forEachArray = array.forEach((e) => console.log("element: " + e))
// element: a
// element: b
// element: c

console.log(forEachArray)
// undefined

// usefull when index is not necessary. cleaner to read.
const newArray = []
const callback = (element) => newArray.push(`element: ${element}`)

array.forEach(callback)

console.log(newArray)
//output [ 'element: a', 'element: b', 'element: c' ]