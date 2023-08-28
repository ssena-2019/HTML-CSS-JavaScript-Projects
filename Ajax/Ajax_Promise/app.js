//return promise object
// function getData(data){ 
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){

//             // resolve("olumlu sonuç")
//             reject("olumsuz sonuç")
//         },5000)
//     })
// }


//using resolve and reject together
function getData(data){
    return new Promise(function(resolve, reject){
        setTimeout(function(){

            if(typeof data === "string"){
                resolve(data)
            }
            if(typeof data === "number"){
                // reject("please enter string value")
                reject(new Error("please enter string value"))
            }

        },5000)
    })
}

// console.log(getData("merhaba"))

//when the result is resolved
// getData("merhaba").then(function(response){
//     console.log(response)
// })

//when the result is reject
// getData("merhaba").catch(function(err){
//     console.log(err)
// })

// getData(8900).then(function(response){
//     console.log("gelen değer: " + response)
// }).catch(function(err){
//     console.log(err)
// })

//by using arrow function
getData(24)
.then(response => console.log("Gelen Değer: " + response))
.catch(err => console.log(err))