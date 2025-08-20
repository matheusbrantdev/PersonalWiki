const array1 = [1,2,3 , [1,2, 4]]

// same as flat(1)
console.log(array1.flat())
//output [1,2,3,1,2,4]

const array2  = [1,2,3, [1,2, [6,2]]]
console.log(array2.flat())
//output [1,2,3, 1,2, [6,2]]

const array3 = [1,2, [1,2, [52,2, [2]]]]
console.log(array3.flat(Infinity))
// output [1, 2, 1, 2,52, 2, 2]

// flat deep.
