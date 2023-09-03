class Storage {
    //get all user names from storage
    static getSearchedUsersFromStorage(){
        let users

        if(localStorage.getItem("searched") === null){
            users = []
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"))
        }

        return users
    }

    static addSearchedUserToStorage(userName){
        let users = this.getSearchedUsersFromStorage()

        //indexof
        if(users.indexOf(userName) === -1){
            users.push(userName)
        }

        localStorage.setItem("searched", JSON.stringify(users))
    }
    //delete all searched users
    static clearAllSearchedUsersFromStorage(){
        localStorage.removeItem("searched")
    }
}