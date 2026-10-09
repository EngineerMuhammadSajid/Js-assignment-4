// step 2: logical AND(&&) operator use
// it is use when both or all condition is true the answer is always true otherwise false
// In this output in console is enter the exam


let age = 18;
let feePaid = true;
if(age>=18 && feePaid==true){
    console.log("Enter the exam")
}else{
    console.log("con't enter exam");
}

// one is correct and second is false the output is con't enter exam


// let age = 18;
// let feePaid = false;
// if(age>=18 && feePaid==false){
//     console.log("Enter the exam")
// }else{
//     console.log("con't enter exam");
// }



// Logical OR(||) Operator ,it is use when atlest one condition is true the answer is always true and otherwise false


// step 3 logical OR(||) in this case one condition is true the output is true


let emailCorrect = false;
let phoneCorrect =true;

if(emailCorrect || phoneCorrect ){
    console.log("login")

}else{
    console.log("plese correct input");
}




// Step: 4 Logial Not(!) its use for when condition is wrong it's not correct

// this output is "Access allowed"

let isBlocked =false;
if(!isBlocked){
    console.log("Access allowed")
}
else{
    console.log("Access denied")
}



// step 5: Combine Logical Operator

// this output get discount

let isLoggedIn=true;
let isPremium=true;
let hasCoupon=false;
if(isLoggedIn && isPremium || hasCoupon){
    console.log("get special discount")
}else{
    console.log("you have not allowed for this")
}s