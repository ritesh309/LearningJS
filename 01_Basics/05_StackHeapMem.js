//stack -= > store primitive data types -> call by value
//heaps = > store non primitve -> call by reference

///assigns the copy value

// let user= "ritesh"
// let user2 =user = "nite"
// console.log(user2) //nite
// console.log(user)  //nite

//heap memory chanes the original values assigned to it - refereance  is changes , 
let user={
    name:":rites",
    email:"rite@gmail.com"
}
let user2= user
user2.email="hello@gmail"

// user2={
//     name:"hello",
//     email:"hello@gmail.com"
// }

console.log(user)
console.log(user2)