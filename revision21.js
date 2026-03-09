
// fn(3)  fn(2)  fn(1) sync  -----> 6 seconds

//fn(3)   ----> 3 seconds
//fn(2) 
//fn(1)

// promise.all()
// promise.race()
// promise.allSettled()
// promise.any()

// .then and async await ----> Promise combinators ---> parallel


function task1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task one")
        }, 3000)
    })
}

function task2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task two")
        }, 2000)
    })
}

function task3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("task three")
        }, 1000)
    })
}
function task4() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("task four")
        }, 2000)
    })
}
// Promise.allSettled()


// Promise.allSettled([
//     task1(),
//     task2(),
//     task3(),
//     task4()
// ])
//     .then(function (arr) {
//         console.log(arr)
//     })

async function PromsiseSettled() {
    let pro2 = await Promise.allSettled([
        task1(),
        task2(),
        task3(),
        task4()
    ])
    console.log(pro2)
}

PromsiseSettled()





//  Promise.all()
// // async await
// async function PromiseAll() {
//     try {
//         let pro = await Promise.all([
//             task1(),
//             task2(),
//             task3(),
//             task4()
//         ])
//         console.log(pro)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
// PromiseAll()

// Promise.all([
//     task1(),
//     task2(),
//     task3(),
//     task4()
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(error){
//     console.log(error)
// })

