
//object literal -----------------
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

// myObj.greet = function(){
//     console.log(this.name + "Good morning")

// }
// console.log(myObj.greet()) 
// myObj.greet2 = function(){
//     console.log(this.name + " Good morning")

// }
// console.log(myObj.greet2())  //ritesh Good morning

//-----------------------object singlton
 const user = new Object()  // this is singlton object

 user.id="123"
 user.name="Riesh"
 user.isLoggedIn = false

//  console.log(user)

//optional chaining
const regUser ={
    email:"ritesh@gmail.com",
    fullName:{
        firstName:"Ritesh",
        lastName:"Kumar"
    }

}
// console.log(regUser?.fullName?.firstName)  //?. it check the null values

const obj1={
    1:"a",
    2:"b"
}

// const obj3 = {regUser , user}  //returbs object inside object

// {
//     regUser: {
//       email: 'ritesh@gmail.com',
//       fullName: { firstName: 'Ritesh', lastName: 'Kumar' }
//     },
//     user: { id: '123', name: 'Riesh', isLoggedIn: false }
//   }

const obj3 = Object.assign(user,regUser)
const obj4 = Object.assign({},user,regUser) //using {} same returns guaranteed target and sourcs all the values goes to {} empty object
// {
//     id: '123',
//     name: 'Riesh',
//     isLoggedIn: false,
//     email: 'ritesh@gmail.com',
//     fullName: { firstName: 'Ritesh', lastName: 'Kumar' }
//   }


//spread operatior

const obj5 = {...obj1,...myObj,...user}
// console.log(obj5)


// console.log(user)
console.log(Object.keys(user))  //returns array
console.log(Object.values(user))  //  returns array

console.log(user.hasOwnProperty("nam"))  //returns true/false