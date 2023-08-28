class Request {
    get(url) {
        return new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    post(url, data) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(err => console.log(err))
    }

    put(url, data) {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(err => console.log(err))
    }

    delete(url){
        return new Promise((resolve,reject) => {
            fetch("https://jsonplaceholder.typicode.com/albums/1", {
                method: 'DELETE'
            })
            .then(response => resolve("veri silme işlemi başarılı"))
            .catch(err => reject(err))
        })
    }
}

const request = new Request()
// let albums

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums) //senkron
// })
// .catch(err => console.log(err))

// console.log(albums) //asenkron

//GET Request
// request.post("https://jsonplaceholder.typicode.com/albums", {userId:3,title:"merhaba dünya"})

//PUT Request
// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title:"tarkan"})

//DELETE Request
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err))


