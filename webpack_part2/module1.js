//only one function can be exported
// module.exports = function test1() {
//     console.log("Test 1")
// }

// module.exports = function test2() {
//     console.log("Test 2")
// }

// module.exports = {
//     name: "Sena",
//     test1: function() {
//         console.log("Test1")
//     },

//     person: {
//         name: "Sena",
//         mail: "safiyesenam@gmail.com"
//     }
// }

//ES6 ile birlikte gelen özellikler
export const name = "Mustafa"
export function test() {
    console.log("test1....")
}

export class Person {
    static Test() {
        console.log("person test")
    }
}

export const Employee = {
    name: "Sena",
    salary: 40.000
}