function asyncFun1() {
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
           console.log("data1")
           resolve("success");
        },4000)
    })
}

function asyncFun2() {
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
           console.log("data2")
           resolve("success");
        },4000)
    })
}

console.log("fetching data1.....")
let p1=asyncFun1();
p1.then((res)=>{
    
    console.log("fetching data2....")
    let p2=asyncFun2();
    p2.then((res)=>{

    })
})



// console.log("fetching data1.....")
// let p2=asyncFun2();
// p2.then((res)=>{
//     console.log(res);
// })




// const getPromise = ()=>{
//     return new Promise((resolve ,reject)=>{
//         console.log("promises in javascript");
//         // resolve("success")
//         reject("error")
//     })
// }

// const promise=getPromise();
// promise.then((res)=>{
//    console.log("promise fulfilled ", res);
// })

// promise.catch((res)=>{
//     console.log("promise rejected ",res);
// })


// let promise= new Promise((resolve , reject)=>{
//     console.log("promises in javascript");
//     resolve("success")
// })