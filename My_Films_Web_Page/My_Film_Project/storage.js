function Storage() {

}

//set films from local storage
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmFromStorage()

    films.push(newFilm)
    localStorage.setItem("films", JSON.stringify(films))
}

//get films from local storage
Storage.prototype.getFilmFromStorage = function() {
    let films

    if(localStorage.getItem("films") === null){
        films = []
    }
    else{
        films = JSON.parse(localStorage.getItem("films"))


    }

    return films
}

//delete selected film from local storage
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmFromStorage()

    //delete film from array by using splice()
    films.forEach(function(film, index){
        if(film.title === filmTitle){
            films.splice(index,1)
        }
    })

    localStorage.setItem("films", JSON.stringify(films))

}

//delete all films from local storage
Storage.prototype.deleteAllFilmFromStorage = function(){
    localStorage.removeItem("films")
}