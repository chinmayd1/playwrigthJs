


// promise 

// Promise combinators 

// parallel execution ??

// Promise.all()           // .then() , and async await
// Promise.allSettled()    // .then() , and async await
// Promise.race()
// Promise.any()

function task4() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task 4 complete")
        }, 3000)
    })
}
function task5() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task 5 complete")
        }, 2000)
    })
}
function task6() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("task 6 complete")
        }, 1000)
    })
}

// Promise.any()


async function promiseAny() {
    try {
        let pro = await Promise.any([
            task4(),
            task5(),
            task6()

        ])
        console.log(pro)
    }
   catch{
    console.log("error")
   }

   return "hello"

}
promiseAny()
.then(function(str){
    console.log(str)
})



// Promise.any([
//     task4(),
//     task5(),
//     task6()

// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("str")
// })











// async function promiseRace(){
//     try {
//         let stra = await Promise.race([
//             task4(),
//             task5(),
//             task6()
//         ])
//         console.log(stra)
//     }
//     catch(str){
//         console.log(str)
//     }

// }
// promiseRace()

// Promise.race([
//      task4(),
//      task5(),
//      task6()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     cosnole.log(str)
// })




