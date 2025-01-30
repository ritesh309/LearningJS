 // Immediatly invoked funtion expression (IIFE)


//  function hell(){
//     console.log("This is hell")
//  }
//  hell()


// directly runs the function

//  (
//     function helloji (){
//         console.log("DB connected")
//     }
//  )() ; // we need to use semi colon to end this function weather it gives err

//  //invoking arrow function
//  (
//       ()=>{
//         console.log("DB ")
//     }
//  )();

//  (
//     (name)=>{
//       console.log(name)
//     }
//  )()  // undefined

// (
//     (name )=>{
//       console.log(name )
//     }
//  )("Ritesh" );  // returns Ritesh

//  (
//     (...name )=>{
//       console.log(name )
//     }
//  )("Ritesh" , "Hell")  // returns the array [ 'Ritesh', 'Hell' ]