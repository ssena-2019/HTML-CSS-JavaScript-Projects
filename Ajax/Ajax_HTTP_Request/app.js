// HTTP status
// 200: OK
// 403: Forbidden
// 404: Not Found
// 505: Internal Server Error


//old version
// document.getElementById("btn").addEventListener("click", function(){

//     //XML HTTP Request

//     const xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function(){
//         if(this.status == 200 && this.readyState == 4){
//             //response is ready
//             console.log((this.responseText))
//         }
//     }
    
//     xhr.open("GET", "example.txt", true)

//     xhr.send()
// })