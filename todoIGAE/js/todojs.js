//Array con ámbito global donde vamos a almacenar el listado de todos, y que iremos actualizando según vayamos añadiendo o borrando elementos.
let todos = [];

const newTodo = document.querySelector('#newTodo');
const listTodos = document.querySelector('#listTodos');

const addTodo = () => {
    let textTodo = newTodo.value;
    if (textTodo !== '') {
        updateList(textTodo);

        let idTodo = listTodos.children.length;
        let todo = document.createElement('li');
        todo.setAttribute('value', idTodo);
        todo.setAttribute('class', 'display_success');
        todo.innerHTML = `<i class="fa-sharp fa-regular fa-trash" onclick="deleteTodo(${idTodo})"></i>${textTodo}`;
        listTodos.appendChild(todo);

        newTodo.value = '';
    }
    render();
}

const deleteTodo = (idTodo) => {
    console.log(idTodo);
}

const clearList = () => {
    todos = [];
    render();
}

const updateList = (textTodo) => {
    todos.push(textTodo);
}

const render =  () => {
    console.log(todos);
}

document.querySelector('#addTodo').addEventListener('click', addTodo);
document.querySelector('#deleteTodo').addEventListener('click', clearList);

