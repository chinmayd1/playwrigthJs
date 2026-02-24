
// for(intialization; conditionCheck; increment/decrement){
//     // statement
// }

for(let i = 1 ; i <= 5 ; i++){ //2 // 3 // 4 //5 //6
    console.log(i) // 1 //2 // 3 // 4 // 5
}
// 1 <= 5 ---> true
// 2 <= 5 ---> true
// 3 <= 5 ---> true
// 4 <= 5 ---> true
// 5 <= 6 ---> false

// program 2
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1  0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 3
for(let i = 1 ; i <= 3 ; i++){ // 2 //3 //4
    console.log("hello") // "hello" , "hello" , "hello"
}

// program 4


for(let i = 1 ; i <= 10 ; i++){
    console.log(i)
}
for(let i = 1 ; i <= 10 ; i++){
    console.log(i*2)
}

for(let i = 2; i <= 20 ; i = i + 2){ // 4 // 6 ------ 22
    console.log(i)//2 // 4 ------ 20
}

for(let i = 3 ; i <= 30 ; i = i + 3){
    console.log(i)
}


for(let i = 50 ; i >= 5 ; i = i - 5){ // 45 ------0
    console.log(i) // 50 // 45 ------- 5
}
// break statement

for(let i = 1 ; i <= 5 ; i++){ //2 //3
    console.log(i) //1 //2 //3
    if(i == 3){
        break
    }
}

for(let i = 1 ; i <= 5 ; i++){ //2  //3
    if(i == 3){
        break
    }
    console.log(i)//1 //2
}

// continue statement with for loop 
for(let i = 1 ; i <= 5 ; i++){ //2 //3 //4 //5 // 6
    if(i == 3){
        continue
    }
    console.log(i) //1 //2 //4 //5
}





