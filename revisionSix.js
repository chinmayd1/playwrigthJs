
let info = {
    fn:"chinmay",
    ln:"deshpande",
    age:23,
    exp:2
}

Object.keys(info) // ["fn","ln","age","exp"]
Object.values(info)//["chinmay","deshpande",23,2]
Object.entries(info)//

// [
//     ["fn","chinmay"],
//     ["ln","deshpande"],
//     ["age",23],
//     ["exp",2]
// ]

let address = {
    city:"pune",
    country:"india"
}

let obj6 = Object.assign(info,address)
console.log(obj6)

// Object.freeze

Object.assign(obj6)
let Obj7 = {
    fn:"chinmay",
    ln:"deshpande",
    age:23,
    exp:2
}
let q1 = Object.hasOwn(Obj7,'fn')
let q2 = Object.hasOwn(Obj7,'Fn')
console.log(q1)
console.log(q2)

let q3 = Obj7.hasOwnProperty('fn')
let q4 = Obj7.hasOwnProperty('Fn')

// NUumbers 
Number("123") // 123
parseFloat("10.99") // number --> 10.99
parseInt("10.99") // 10
isNaN(10) // false
isFinite(100) // true

// Math

Math.ceil(10.5)//
Math.floor(10.5)//
Math.floor(-10.5)//
Math.ceil(-10.5)//
Math.round(10.5)//
Math.round(10.4)//
Math.round(-10.5)//
Math.round(-10.6)//
Math.abs(-10.6)//
Math.pow(2,3)// 8
