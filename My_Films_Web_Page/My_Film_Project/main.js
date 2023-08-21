const form = document.getElementById("film-form")
const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const urlInput = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")

//create UI object
const ui = new UI()

//create Storage object
const storage = new Storage()

//loading all events
eventListeners()

function eventListeners(){
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmFromStorage()
        ui.loadAllFilms(films)
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
        ui.displayMessages("Tüm Alanları Doldurunuz...", "danger")
    }
    else{
        //create new film
        const newFilm = new Film(title,director,url)

        ui.addFilmToUI(newFilm) //add film to UI

        storage.addFilmToStorage(newFilm) //add film to Storage

        //succes message
        ui.displayMessages("Film Başarıyla Eklendi.", "success")
    }

    ui.clearInputs(titleInput,directorInput,urlInput)


    e.preventDefault()
}

//delete film
function deleteFilm(e){
    //console.log(e.target)

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        ui.displayMessages("silme işlemi başarılı...", "success")
    }
}

//delete all film 
function deleteAllFilm(e){

    if(confirm("emin misiniz?")){
        if(e.target.id === "clear-films"){
            ui.deleteAllFilmFromUI(e.target)
            storage.deleteAllFilmFromStorage()
        }
    
        ui.displayMessages("tüm filmler başarıyla silindi...", "success")
    }
    
}