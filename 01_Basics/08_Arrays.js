const myArray = [0,1,2,3,4] 
console.log(myArray)

//copy makes shallow coppies - > shares the reference

// const myHors = ["Marvel"] ;

// console.log(myArray.length) //5

//Array methods

// myArray.push(6)  //adds new data at end to the array
// myArray.push(7)
// myArray.pop()  //removes the last data from array
// myArray.unshift(9) //adds at start of aray
// myArray.shift()  //removes the fist element


// console.log(myArray.includes(9)) //false
// console.log(myArray.indexOf(3)) 
// const newArr = myArray.join()  //convert the array to string
// console.log(newArr) // returns string array
const myarr1 = myArray.slice(1,3) //returns the arr index including 1 to excluding index 3
const myarr2 = myArray.splice(1,3)
console.log(myarr1) //
console.log(myarr2) //this cuts the original array , index1 - index 3
console.log(myArray)