var c= 10
if (true) {
    // let a = 20;  // this cant be accessed outside the ifelse
    //const b= 30;  // this cant be accessed outside the ifelse
    var c = 40;  // this can be accessed globally 
    
}

// console.log(a)
// console.log(b)
// console.log(c)

//============================Nested scope =========================

function  one(){
    const username = "Rietsh"
    function two(){
        const web = "Google"
        console.log(username)
    }
    // console.log(web) //not defined cant access
    two() //"Rietsh" //if we dont call this function it will not be executed
}

one()