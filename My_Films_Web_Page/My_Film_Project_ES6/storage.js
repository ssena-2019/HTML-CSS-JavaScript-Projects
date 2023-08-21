class Storage {

    //set films from local storage
    static addFilmToStorage(newFilm) {
        let films = this.getFilmFromStorage()

        films.push(newFilm)
        localStorage.setItem("films", JSON.stringify(films))
    }

    //get films from local storage
    static getFilmFromStorage() {
        let films

        if (localStorage.getItem("films") === null) {
            films = []
        }
        else {
            films = JSON.parse(localStorage.getItem("films"))


        }

        return films
    }

    //delete selected film from local storage
    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmFromStorage()

        //delete film from array by using splice()
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1)
            }
        })

        localStorage.setItem("films", JSON.stringify(films))

    }

    //delete all films from local storage
    static deleteAllFilmFromStorage() {
        localStorage.removeItem("films")
    }
}

