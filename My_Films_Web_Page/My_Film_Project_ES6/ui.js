class UI {

    //add new film to UI
    static addFilmToUI(newFilm) {

        const filmList = document.getElementById("films")

        filmList.innerHTML += `

        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width:100px; height:100px;"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    `

    }

    //clear all present input values
    static clearInputs(element1, element2, element3) {
        element1.value = ""
        element2.value = ""
        element3.value = ""

    }

    //display alert messages on UI
    static displayMessages(message, type) {
        // <div class="alert alert-${type}" role="alert">
        //     message
        // </div>
        const cardBody = document.querySelector(".card-body")

        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-' + type);
        alertDiv.setAttribute('role', 'alert');
        alertDiv.textContent = message;

        cardBody.appendChild(alertDiv)

        //show alert 1 second
        setTimeout(function () {
            alertDiv.remove()
        }, 1000)


    }

    //load all films to UI
    static loadAllFilms(films) {
        const filmList = document.getElementById("films")

        films.forEach(function (film) {
            filmList.innerHTML += `

        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail" style="width:100px; height:100px;"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    `
        })
    }

    //delete selected film from UI
    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove()
    }

    //delete all films from UI
    static deleteAllFilmFromUI() {
        const filmList = document.getElementById("films")

        //filmList.innerHTML = "" //slow version

        while (filmList.firstElementChild != null) { //while there is a child
            filmList.firstElementChild.remove()
        }

        secondCardBody
    }
}

