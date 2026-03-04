
// function additionA(){
//     console.log("A is called")
// }
// function additionB(){
//     console.log("B is called")
// }
// additionB()
// additionA()

// function additionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },2000)

// }
// function additionD(){
//     setTimeout(function(){
//         console.log("D is called")
//     },1000)

// }
// additionC()
// additionD()

// userCreate ---> getId ----> getInfo
function getInfo() {

    setTimeout(function () {
        console.log("user create")
    }, 3000)

    setTimeout(function () {
        console.log("getId")
    }, 2000)

    setTimeout(function () {
        console.log("getInfo")
    }, 1000)

}
//getInfo()

function getInfo() {
    setTimeout(function () {
        console.log("user create")
        setTimeout(function () {
            console.log("getId")
            setTimeout(function () {
                console.log("getInfo")
            }, 1000)
        }, 2000)

    }, 3000)
}
//getInfo()


// async --- sync -- without call back hell --- promises
// promise ---> 
// mahesh - 2000 ,  2month - pending -- 2k given resolve  2k - reject

let proOne = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello i am success")
    }
    else {
        reject("hello i am fail")
    }
})
// consuming the promise

// proOne
// .then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })

// proOne
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })

// proOne
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


proOne
.then(function(a){
    console.log(a)
    return "success-1"
})
.then(function(b){
    console.log(b)
    return "success-2"
})
.then(function(c){
    console.log(c)
})
.catch(function(a){
    cosnole.log(a)
})
.finally(function(){
    console.log("i will always execute")
})