
let arr  = [10,20,30]
// let a1 = arr[0]
// let a2 = arr[1]
// let a3 = arr[2]

// console.log(a1)
// console.log(a2)
// console.log(a3)

// program 6
let [a1,a2,a3] = arr
console.log(a1)
console.log(a2)
console.log(a3)

arr  = [10,20,30]
let [x1,,x2] = arr
console.log(arr)
console.log(x1)
console.log(x2)

let arr2 = [5]
let [x11 =0 ,y11 = 0]= arr2
console.log(x11)
console.log(y11)


// program 6
let names  = ["ram","sham","sai","sarika"]
let [n1,...n2] = names
console.log(n1)
console.log(names)



// program 5
function addE(...arr){
    console.log(arr)
}
addE(1,2,3,4,5,6,7,8,9,9,3,4)
// 1,2,3,4 ---> [1,2,3,4]
// [1,2,3,4] ---> 1,2,3,4

// program 4
let arr5 = [11,222,333,444]
function displayFirstTwo(x,y){
    console.log(x,y)
}
displayFirstTwo(...arr5)


// object destructing
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}

// program 3
let {firstName:fn,lastName:ln,age:ag} = info
console.log(fn)
console.log(ln)
console.log(ag)
let {firstName,...userd} = info
console.log(userd)
console.log(firstName)


// program 2
let arr11 =[11,22,33]
let arr22 = [44,55,66] 
//[11,22,33,44,55,66]
let arr3 = [...arr11,...arr22] // new copy


// program 1
let infoA = {
    firstName:"chinmay",
    lastName:"deshpande"
}
let infoB = {
    language:"marathi",
    city:"pune"
}
let infoC = {...infoA,...infoB}
console.log(infoC)


