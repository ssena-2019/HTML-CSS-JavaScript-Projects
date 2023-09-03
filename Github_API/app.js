//choosing elements
const githubForm = document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const searchButton = document.getElementById("araButton")
const clearLastUsers = document.getElementById("clear-last-users")

const github = new Github()
const ui = new UI()

const lastUsers = document.getElementById("last-users")

evenListeners()

function evenListeners(){
    githubForm.addEventListener("submit", getData)
    clearLastUsers.addEventListener("click", clearAllSearched)
    document.addEventListener("DOMContentLoaded", getAllSearched)
}
//get data
function getData(e){
    let userName = nameInput.value.trim()

    if(userName === ""){
        alert("Lütfen geçerli bir kullanıcı adı giriniz!!!")
    }
    else{
        github.getGithubData(userName)
        .then(response => {
            if(response.user.message === "Not Found"){
                // console.log("Hata")
                ui.displayErrorMessage("Geçersiz Kullanıcı Adı!")
            }
            else{
                // console.log(response)
                ui.addSearchedUserToUI(userName)

                Storage.addSearchedUserToStorage(userName) 

                ui.showUserInfo(response.user)
                ui.showRepos(response.repo)
            }

        })
        .catch(err => ui.displayErrorMessage(err))
    }

    ui.clearInputs()
    e.preventDefault()
}
//clear all searched before
function clearAllSearched(){
    if(confirm("Tüm Arama Sonuçlarını Silmek İstedğinizden Emin misiniz?")){
        Storage.clearAllSearchedUsersFromStorage()
        ui.clearAllSearchedFromUI()
    }
    
}
//get search datas from storage and add to ui
function getAllSearched(){
    let users = Storage.getSearchedUsersFromStorage()

    let result = ""

    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`
    }) 

    lastUsers.innerHTML = result
}