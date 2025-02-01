// function sayMy(){
//     console.log("Ritesh")
// }

// sayMy()

// function addTwo (num1,num2){ //parameters
//     console.log(num1+num2)
// }

// const result = addTwo(1,2) //arguments 1,2
// addTwo()  //returns NAN 

// console.log(result) //undefined

// function addTwoN (n1,n2){
//     return n1+n2  // we can store this value to some cosnt or var
// }

// const res = addTwoN(3,5)
// const rest = addTwoN() //return undefined if we dont pass any args in case of string return / number return NaN
// console.log(res)
// console.log(rest)

// // ** undefined / empyString - > Its always false value 

// function greeting ( greet = "Morning"){
//     return ` Hello Good ${greet}`
// }
// console.log(greeting()) //takes the default value if we dont pass any args


//// ------------Functions with objects and arr

// function calculateCartPrice (val1,val2,...num1){  //rest operator 
//   return num1
// }

// console.log(calculateCartPrice(3,4,5,6,78,8))  //rest [ 5, 6, 78, 8 ]

// const userName ={
//     name:"ritesh",
//     email:"google.com"
// }

// function handleObj (obj){
//     return obj
// }
// console.log(handleObj(userName))

//=================================== function scopes 

// A function that calls itself is called a recursive function
const foo = function bar() {
    // statements go herec
    console.log("Tecursiv")
  };