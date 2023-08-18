const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")

const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]

const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")

eventListeners()

//definition of event listeners
function eventListeners() {
    form.addEventListener("submit", addTodo)
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI)
    secondCardBody.addEventListener("click", deleteTodo)
    filter.addEventListener("keyup", filterTodos)
    clearButton.addEventListener("click", clearAllTodos)

}

//add todo 
function addTodo(e) {
    const newTodo = todoInput.value.trim()
    console.log(newTodo)

    if (newTodo === "") {
        showAlert("Bir Todo Eklemediniz...")
    }
    else {
        addTodoToUI(newTodo)
        addTodoToStorage(newTodo)
    }

    e.preventDefault()
}

//delete todo
function deleteTodo(e){
    console.log(e.target)

    if(e.target.className === "fa fa-remove"){
        console.log("silme işlemi")
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        e.target.parentElement.parentElement.remove()


    }
}

//delete todo from local storage
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage() //load all todos from storage to an array

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1) //delete todo from array
        }
    })

    //update local storage
    localStorage.setItem("todos", JSON.stringify(todos))

}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase()

        if(text.indexOf(filterValue) === -1){
            //could not find value

            listItem.setAttribute("style", "display: none !important")
        }
        else{
            listItem.setAttribute("style", "display: block")
        }
    })
}

//clear all Todos From UI
function clearAllTodos(){
    if(confirm("Tümünü silmek istediğinize emin misiniz?")){
        // todoList.innerHTML = "" //slow process

        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild)
        }
        localStorage.removeItem("todos")
    }
}

//load all todos from storage to UI
function loadAllTodosToUI(){ //load all todos from storage to UI
    let todos = getTodosFromStorage()

    todos.forEach(function(todo){
        addTodoToUI(todo)
    })

    localStorage.setItem("todos", JSON.stringify(todos))

}

//show alert method
function showAlert(message) {
    const alert = document.createElement("div")

    alert.className = 'alert alert-danger'
    alert.textContent = message
    console.log(alert)

    firstCardBody.appendChild(alert)

    setTimeout(function(){
        alert.remove()
    }, 1000)
}

//create new todo and add to UI
function addTodoToUI(newTodo) { //method that adds new value as list item

    // create list item
    const listItem = document.createElement("li")
    listItem.className = "list-group-item d-flex justify-content-between"

    //create link
    const link = document.createElement("a")
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    console.log(listItem)

    //textNode Ekleme
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)

    //adding list item to todo list
    todoList.appendChild(listItem)
    todoInput.value = ""

}

//get all todos from local storage
function getTodosFromStorage(){ //get all todos from storage
    let todos

    if(localStorage.getItem("todos") === null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    return todos
}

//put new todo to local storage
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo)

    localStorage.setItem("todos", JSON.stringify(todos))

}
