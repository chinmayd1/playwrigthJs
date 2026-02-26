class Student {
    constructor(fn,ln,ag){
        // property
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let s1 = new Student("amol","rao",13)
let s2 = new Student("amol","rao",13)
let s3 = new Student("amol","rao",13)
// "skill":"playwright"
console.log(s1)
console.log(s2)
console.log(s3)

let students = [s1,s2,s3]
console.log(students)
students.forEach(function(el){
    el['skill'] = "playwright"
})

// fixtures 
//let f1 =
// {
//     "firstName":"chinmay",
//     "lastName":"deshpande",
//     "age":23,
//     "amount":10,
//      "age":34
// }
//test()
//f1.amount = f1.amount +  Math.floor(Math.random()*6) + 1

// inheritance
class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student {
    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }
}
let ram = new Teacher("ram","rao",23)
// fe , be , excel , sql , python - llm












