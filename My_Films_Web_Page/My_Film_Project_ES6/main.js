const form = document.getElementById("film-form")
const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const urlInput = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")



//loading all events
eventListeners()

function eventListeners(){
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmFromStorage()
        UI.loadAllFilms(films)
    })

    secondCardBody.addEventListener("click", deleteFilm)
    clear.addEventListener("click", deleteAllFilm)
}

//add film
function addFilm(e){
    const title = titleInput.value
    const director = directorInput.value
    const url = urlInput.value

    if(title === "" || director === "" || url === ""){
        UI.displayMessages("Tüm Alanları Doldurunuz...", "danger")
    }
    else{
        //create new film
        const newFilm = new Film(title,director,url)

        UI.addFilmToUI(newFilm) //add film to UI

        Storage.addFilmToStorage(newFilm) //add film to Storage

        //succes message
        UI.displayMessages("Film Başarıyla Eklendi.", "success")
    }

    UI.clearInputs(titleInput,directorInput,urlInput)


    e.preventDefault()
}

//delete film
function deleteFilm(e){
    //console.log(e.target)

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        UI.displayMessages("silme işlemi başarılı...", "success")
    }
}

//delete all film 
function deleteAllFilm(e){

    if(confirm("emin misiniz?")){
        if(e.target.id === "clear-films"){
            UI.deleteAllFilmFromUI(e.target)
            Storage.deleteAllFilmFromStorage()
        }
    
        UI.displayMessages("tüm filmler başarıyla silindi...", "success")
    }
    
}