// async function test(data){
//     //definitely says it returns new promise
//     // return data

//     return new Promise((resolve,reject) => {
//         resolve(data)
//     })
// }

// console.log(test("merhaba"))

// async function test(data){
    
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("bu bir değerdir")
//         },5000)
//     })

//     let response = await promise //only valid in async function
//     console.log(promise)
//     console.log("naber")
// }

// async function testData(data){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data)
//             }
//             else{
//                 reject(new Error("lütfen string bir değer giriniz"))
//             }
//         },5000)
//     })

//     const response = await promise
//     return response
// }

// // testData("thriller")
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// testData(24)
// .then(data => console.log(data))
// .catch(err => console.log(err))


async function getCurrency(url){
    const response = await fetch(url) //response object

    const data = await response.json() //json object

    return data

    // console.log(data)
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(ahmet => console.log(ahmet))
