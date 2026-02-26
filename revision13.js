// concept ----> class better ---> objects -----> properties and method
// inheritance
// encapsulation
// polymorphism
// abstraction 

// playwright - encapsulation 


// class Student {

//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastname = ln
//     }

//     displayName() {
//         console.log(this.firstName + this.lastname)
//     }

// }


//playwright



// class LoginPage {
//     constructor(page){
//         this.page = page
//         this.username = '#username';
//         this.password = '#password';
//         this.loginBtn = '#loginBtn'
//     }

//     async enterUserPasswordAndLogin(user){
//         await  this.page.fill(this.username,'ram')
//         await  this.page.fill(this.password,'ram')
//         await  this.page.click(this.loginBtn)
//     }

// }

// Inheritance

// class BasePage{
//     constructor(page){
//         this.page = page
//     }
//     async navigate(url){
//         await this.page.goto(url)
//     }
// }

// class LoginPage  extends BasePage{
//     constructor(page){
//         super(page)
//         this.username = '#username';
//         this.password = '#password';
//         this.loginBtn = '#loginBtn'
//     }

//     async enterUserPasswordAndLogin(user){
//         await  this.page.fill(this.username,'ram')
//         await  this.page.fill(this.password,'ram')
//         await  this.page.click(this.loginBtn)
//     }

// }


// class Student {
//     constructor(fn,ln){
//         this.firstname = fn 
//         this.lastName = ln
//     }
//     displayName(){
//        console.log(this.firstname + this.lastName)
//     }

// }

// class Teacher extends Student {

//     constructor(fn,ln,salary){
//         super(fn,ln)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }

// }
// let amolT  = new Teacher("amolT","raoT",12000)
// console.log(amolT.firstName)
// console.log(amolT.lastName) 
// console.log(amolT.salary)

// abstraction 
// polymorphism 
// css Selector , Xpath