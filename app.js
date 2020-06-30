function getTodos() {
    let todosString = localStorage.getItem("todos");
    if (todosString) {
        return todos = JSON.parse(todosString);
    }
    return new Array();
}

function activateButtons(numberOfButtons) {
    for (let i = 0; i < numberOfButtons; i++) {
        document.getElementById('button' + i).addEventListener('click', removeTodo)
    }
}

function show(todos) {
    let html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += '<li id="item' + i +'">' + todos[i] + '<button id="button' + i + '">x</button></li>'
    }
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
    activateButtons(todos.length);
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
    let todos = getTodos();

    let textBoxContent = document.getElementById('itemToAdd').value;
    todos.push(textBoxContent);

    saveTodos(todos);
    show(todos);
}

function removeTodo() {
    let i = this.id.substring(6, this.id.length);
    let todos = getTodos();

    todos.splice(i, 1);

    saveTodos(todos);
    show(todos);
}

document.getElementById('addTodo').addEventListener('click', addTodo);