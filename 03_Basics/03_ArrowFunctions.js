// ==================This keyword ==================\

// this - > Curent context

// const user = {
//     userName : "Ritesh",
//     email : "Rites@gmail.com",
//     welcome : function(){
//         console.log("WElcome to my site" + this.userName) // if we dont use this - > returns username not defined
//     }
// }

// user.welcome()
// user.userName = "KKKKK"
// user.welcome()

// console.log(this)  // returns empty obj {} if node env //browser - > We get window object

// function hello(){
//     const user = "Riesh"
//     console.log(this) // returns the global object with so many functions
//     console.log(this.user) // undefined => it doesnt work with funtions , but objects
// }  

// hello()

// const hello = () =>{
//     let user = "Ritesh"
//     console.log(this) // {}
//     console.log(user) //Ritesh
//     console.log(this.user) // undefined 
// }
// hello()

const addTwo =(n1,n2) =>{
   return n1+n2
}
console.log(addTwo(1,4))  //5

//Implicit return

const addThree = (n1) => n1 // we dont use return reworrd

console.log(addThree(4))

const objReturn =() =>({username:"Ritseh"}) // need to use () to return any object
console.log(objReturn())