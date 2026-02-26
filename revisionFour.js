// includes()
// string --> boolean 
let firstName = "chinmay"
let q1 = firstName.includes("May")
console.log(q1)

// trim()
//<h1>Chinmay </h1> // "Chinmay "
// "Chinmay"
let q2 = " chinmay "
console.log(q2.trim())

// toLowerCase()
let firstNameC = "Chinmay"
let q4 = firstNameC.toLowerCase()
console.log(q4)

// replace()
let info = `I am chinmay and login time ${new Date()}`
//10-02-2026
console.log(info)
let info2 = "I am learning js"
console.log(info2.replace("js",'python'))

// map()

let apiValues = ['january',"january","march"]
{/* <ul>
    <li>january</li>
    <li>january</li>
    <li>march</li>
</ul> */}

let birthYear = [2006,2007,2008,2009]
let q5 = birthYear.map(function(el,index,arr){
   return 2026 - el 
})
console.log(q5)

// filter()
// Api --> 100
// Ui -- filter --> DXC

let employee = [
    {
        fullName:"chinmay deshpande",
        companyName:"dxc"
    },
    {
        fullName:"sarika pansare",
        companyName:"bitwise"
    },
    {
        fullName:"amol rao",
        companyName:"dxc"
    }

]

let filteredDate = employee.filter(function(el){
    return el.companyName == "dxc"
})
console.log(filteredDate)

// every()
let numbers = [19,20,21,22,23]
let q3 = numbers.every(function(el){
    return el >= 19
})
console.log(q3)

