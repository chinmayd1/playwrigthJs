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
