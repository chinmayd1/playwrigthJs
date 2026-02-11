// Modules in Js

// some()
let numbers = [11,22,33,44,55]
let q1 = numbers.some(function(el){
    return el > 50
})
console.log(q1)

//every()
numbers = [11,22,33,44,55]
let q2 = numbers.every(function(el){
    return el > 10
})
console.log(q2)
let q3 = numbers.every( el=>el > 10)
console.log(q3)

// find()
//              0  1  2   3  4  5
let numbersC = [55,66,77,88,99,100]
let q4 = numbersC.filter(function(el){
    return el > 60
})
console.log(q4)

let q5 = numbersC.find(function(el){
    return el > 60
})
console.log(q5)

// findIndex()
let q6 = numbersC.findIndex(function(el){
    return el > 60
})
console.log(q6)

// Objects 
// Properties and methods 

let info = {
    // prop :value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    firstName:"amol"
}

// retrive (dot notation and bracket)
console.log(info.firstName)
console.log(info['firstName'])

// update (dot notation and bracket)
info.firstName = "tanmay"
info['firstName'] = "kranti"
console.log(info)

// add  (dot notation and bracket)

info.city = "pune"
info['language'] = "marathi"
console.log(info)

// delete (dot notation and bracket)

delete info.city
delete info['language']
console.log(info)



let info2 = { 
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}
console.log(Object.keys(info2))
console.log(Object.values(info2))


info2 = { 
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}
let obj3 = Object.assign(info2,{city:"pune",language:"marathi"})
console.log(obj3)


info3 = {
    name:"raj",
    role:"tester",
    exp:3
};

Object.freeze(info3)
info3.exp2 = 4
console.log(info3)


// numbers methods



// math 



// date
