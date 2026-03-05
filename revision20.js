
// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 5
//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }

// })

// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str2)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str2)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str2)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// function getInfo(){

//     setTimeOut(function(){
//         console.log("user created")
//     },3000)

//     setTimeOut(function(){
//         console.log("getid")
//     },2000)

//     setTimeOut(function(){
//         console.log("get info")
//     },1000)
// }
// getInfo()


// function getInfo() {
//     setTimeOut(function () {
//         console.log("user created")
//         setTimeOut(function () {
//             console.log("getid")
//             setTimeOut(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()




function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)
    })
}
function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getId")
        }, 2000)
    })
}
function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getInfo")
        }, 1000)
    })
}

async function getInfoUser() {
    try {
        let str1 = await createUser()
        console.log(str1)
        let str2 = await getId()
        console.log(str2)
        let str3 = await getInfo()
        console.log(str3)
    }
    catch{
        console.log("i will execute")
    }  
}
getInfoUser()





// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("Error")
// })
// .finally(function(){
//     console.log("i will always execute")
// })





