// AJAX, callback, http requests

class Request {

    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    //get request
    get(url, callback){
        this.xhr.open("GET", url) //bağlantı açık

        // this.xhr.onload() = function(){


        //     console.log(this)
        //     if(this.xhr.status === 200){
        //         console.log(this.xhr.responseText)
        //     }

        // }.bind(this)

        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }
            else{
                //error message
                callback("herhangi bir hata oluştu", null)
            }

        }

        this.xhr.send()
            
        
    }

    post(url,data,callback){
        this.xhr.open("POST", url) //open connection
        this.xhr.setRequestHeader("Content-type", "application/json") //sending json data

        this.xhr.onload = () => {

            if(this.xhr.status === 201){
                //successful
                callback(null, this.xhr.responseText)
            }
            else{
                callback("herhangi bir hata oluştu", null)
            }
        }

        this.xhr.send(JSON.stringify(data))
    }

    put(url,data,callback){
        this.xhr.open("PUT", url) //open connection
        this.xhr.setRequestHeader("Content-type", "application/json") //sending json data

        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                //successful
                callback(null, this.xhr.responseText)
            }
            else{
                callback("herhangi bir hata oluştu", null)
            }
        }

        this.xhr.send(JSON.stringify(data))
    }

    delete(url, callback){
        this.xhr.open("DELETE", url) //bağlantı açık

        // this.xhr.onload() = function(){


        //     console.log(this)
        //     if(this.xhr.status === 200){
        //         console.log(this.xhr.responseText)
        //     }

        // }.bind(this)

        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                callback(null, "veri silme işlemi başarılı")
            }
            else{
                //error message
                callback("herhangi bir hata oluştu", null)
            }

        }

        this.xhr.send()
            
        
    }

}

const request = new Request()
// GET Request
// const albums = request.get("https://jsonplaceholder.typicode.com/albums/50", function(err,response){
//     if(err === null){
//         //successful
//         console.log(response)
//     }
//     else{
//         //error occured
//         console.log(err)
//     }
// })

//POST Request

// request.post("https://jsonplaceholder.typicode.com/albums", {userId:2,title:"Thriller"}, function(err,album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         console.log(err)
//     }
// })

//PUT Request

// request.put("https://jsonplaceholder.typicode.com/albums/10", {userId:2,title:"Magic"}, function(err, album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         console.log(err)
//     }
// })

//DELETE Request

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err,response){
    if(err === null){
        //successful
        console.log(response)
    }
    else{
        //error occured
        console.log(err)
    }
})







