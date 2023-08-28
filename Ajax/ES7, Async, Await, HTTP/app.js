class Request {
    
    async get(url) {
        // return new Promise((resolve, reject) => {

        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })

        const response = await fetch(url)
        const data = await response.json()
        return data

    }

    async post(url, data) {
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .then(err => console.log(err))

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const data = response.json()
        return data
    }

    async put(url, data) {
        // fetch(url, {
        //     method: 'PUT',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .then(err => console.log(err))

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const data = response.json()
        return data
    }

    async delete(url){
        // return new Promise((resolve,reject) => {
        //     fetch("https://jsonplaceholder.typicode.com/albums/1", {
        //         method: 'DELETE'
        //     })
        //     .then(response => resolve("veri silme işlemi başarılı"))
        //     .catch(err => reject(err))
        // })

        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1", {
            method: 'DELETE'
            })

        // const data = response.json()
        // return data
        return "veri silme işlemi başarılı"
    }
}

const request = new Request()

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums)
})
.catch(err => console.log(err))

