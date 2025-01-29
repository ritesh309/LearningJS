const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","bataman","flash"]

// marvelHeros.push(dcHeros) // add dcHeros array as 1 element array
const newArr = marvelHeros.concat(dcHeros)  //merges both the arrays
// spread operator  - to concat diff arrays / multiple arrays

const allHeros = [...marvelHeros,...dcHeros]  //merges both the array 

const mixArr = [1 , [12,14,13],[123,[254,456,23]]] //array inside array
const usableArr = mixArr.flat(Infinity) // we can give the number of depth //splits all the arrays from subarrays
// console.log(usableArr)  // [ 1,  12,  14, 13,123, 254, 456, 23]

Array.isArray("Ritesh")  //not aray
console.log(Array.isArray("Ritesh"))  //false 
console.log(Array.from("Ritesh"))  //returns array of all the chars
console.log(Array.from({nbame:"ritesh"})) //returns empy arr
// console.log(Array.from({nbame:"ritesh"})) //returns empy arr
let score1 =100;
let score2=200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)) // returns the concat of array elements[ 100, 200, 300 ]

