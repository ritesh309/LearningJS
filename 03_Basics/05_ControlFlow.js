// if(2=="2"){
//     console.log("true")  // true
// }
// if(2==="2"){
//     console.log("false")  // it will not execute
// }

const score = 200

// if(score>100){
//     const power = "fly" // its block scope
//     var powe = "Try"  // its global scope
//     console.log(power)
// }

// console.log(power) // it is not defined

//shorthandNotation

//brake = > it breaks the control flow of cases

//falsy values -? 0 ,-0,BigInd , "" ,null , undefined , NaN
//truthy valus -> "0"," " , "false" , [] {}, function(){}

///factorial of a number
// function fact(n){
//     return n<2?1:n*fact(n-1);

// }

// console.log(fact(3))

//function deifined by another function


function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cubedNumbers = map(function (x) {
    return x * x * x;
  }, numbers);
  console.log(cubedNumbers); // [0, 1, 8, 125, 1000]