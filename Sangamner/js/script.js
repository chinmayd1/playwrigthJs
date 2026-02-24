
// conditional statement

// one input and multiple 

// numT > 0   && numT <= 5    ----> 10 % discount
// numT > 5   && numT <= 10   ----> 20 % discount 
// numT > 10                  ----> 30 % discount
// if(condition){
//     // statement
// }

// let numT = 17
// if(numT > 0 && numT <= 5 ){
//     console.log("10 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10 ){
//     console.log("30 % discount")
// }

// program 2

let numT = -17

if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
else if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
else if(numT > 10){
    console.log("20 % discount")
}
else {
    console.log("incorrect")
}

// program 2


// let marks = 56
// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks >= 75){
//     console.log("Grade B")
// }
// else if(marks >= 65){
//     console.log("Grade C")
// }
// else {
//     console.log("please try again ...")
// }








// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }

let a = 10
let b = 50

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// condition ? statementA : statement B

a = 100
b = 50
a > b ? console.log("a is greater"): console.log("b is greater")


// program 3

let age = 16
let q1 = age >= 18 ? "candrive":"cannot drive"
console.log(q1)

















