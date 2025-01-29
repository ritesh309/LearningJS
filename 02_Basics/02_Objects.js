//using symbol - Its for uniqueness
const mySym = Symbol("sym")

const myObj={
    name:"ritesh",
    work:"TCS",
    email:"rit@tcs.com",
    [mySym] : "Symbol" ,//denotes its a symbol we need to use []
}
// console.log(myObj)
// console.log(myObj)  //  [Symbol(sym)]: 'Symbol'


// Object.freeze(myObj)  //it makes the objects immutable - values cant be changed now

// myObj.email="Hello@gmai.com"
// console.log(myObj)  // email: 'rit@tcs.com',

//decalare function'

myObj.greet = function(){
    console.log(this.name + "Good morning")

}
console.log(myObj.greet()) 
myObj.greet2 = function(){
    console.log(this.name + " Good morning")

}
// console.log(myObj.greet2())  //ritesh Good morning