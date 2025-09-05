// +1 B,A; -1 A,b; 0 keep order.


animals = ["Zebra", "Bear", "Kangaroo", "Giraffe", "Lion", "Tiger", "Dog"];
animals.sort();
console.log(animals);

// behind the hood, item is compute as string. So, for string, works fine. Default asc
// Output :  ['Bear', 'Dog', 'Giraffe', 'Kangaroo', 'Lion', 'Tiger', 'Zebra']

// sort alter the main array, in this case numbers.
const numbers = [1, 50, 101, 4, 90, 40, 1000, 78, 9];
const notSorted = numbers.sort();
console.log("not sorted: " + notSorted);

// Expected  Output :   [1, 4, 9, 40, 50, 78, 90, 101, 1000]
// Actual Output :   [1, 1000, 101, 4, 40, 50, 78, 9, 90]

const numbersAsc = [1, 50, 101, 4, 90, 40, 1000, 78, 9];

// in order to sort numbers.
const asc = numbersAsc.sort((a, b) => a - b);

console.log("asc: " + asc);
// output: [1,4,9,40, 50, 78, 90, 101, 1000]

const numbersDesc = [1, 50, 101, 4, 90, 40, 1000, 78, 9];

const desc = numbersDesc.sort((a, b) => b - a);
console.log("desc: " + desc);
// output: [1000, 101,90,78, 50,40,9,4,1]

// positive: places b before a
// negative: places a before b
// zero: keep the order as it is

console.log('------')
// This is how the contract works in javascript. So, you either return a positive, negative or zero. 
const numbersCompare = [1, 50, 101, 4, 90, 40, 1000, 78, 9];
const compare = (array, order) => {
  console.log(array)
  return array.sort((a, b) => {
    if (order === "asc") {
      console.log({a,b,})
      if(a > b){
        return 1
      }
      if(a < b){
        return -1
      }
      else {
       return 0
      }
    }

    if(order === 'desc'){
      if(a > b ){
        return -1
      }

      if(a < b){ 

        return 1
      }

      else {
        return 0
      }
    }
  });
};

console.log("compare: ", compare(numbersCompare, "asc"));
console.log("------------------------------------")
const numbersCompare1 = [1, 50, 101, 4, 90, 40, 1000, 78, 9];

console.log("compare: ", compare(numbersCompare1, "desc"));


