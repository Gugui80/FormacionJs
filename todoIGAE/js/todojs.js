//Array con ámbito global donde vamos a almacenar el listado de todos, y que iremos actualizando según vayamos añadiendo o borrando elementos.
let todos = [];

const newTodo = document.querySelector('#newTodo');
const listTodos = document.querySelector('#listTodos');

const addTodo = () => {
    let textTodo = newTodo.value;
    if (textTodo !== '') {
        updateList(textTodo);
        paintTodo(textTodo);
        storageTodos();
    }
}

const paintTodo = (textTodo) => {
    let idTodo = listTodos.children.length;
    let todo = document.createElement('li');
    todo.setAttribute('value', idTodo);
    todo.setAttribute('class', 'display_success');
    todo.innerHTML = `<i class="fa-sharp fa-regular fa-trash" onclick="deleteTodo(${idTodo})"></i>${textTodo}`;

    //Añadir a cada todo un botón para terminar una tarea.

    listTodos.appendChild(todo);

    newTodo.value = '';
}

const deleteTodo = (idTodo) => {
    todos = todos.filter( 
        (todo, index) =>  {
           return (index !== idTodo) 
        });

    storageTodos();

    if (todos.length === 0) {
        localStorage.removeItem('misTodos');
    }

    render();
}

const checkTodo = () => {
    
}

const clearList = () => {
    todos = [];
    //Vaciamos el localstorage de la aplicación.
    localStorage.removeItem('misTodos');
    render();
}

const updateList = (textTodo) => {
    todos.push(textTodo);
    console.log(todos);
}

const render = () => {
    //Primero vaciamos la lista en el html
    while( listTodos.children.length > 0 ) {
        listTodos.removeChild(listTodos.children[0]);
    }

    todos = retrieveTodos();

    //Segundo: Recorremos el array de objetos todo para elaborar una nueva lista en el html.
    todos.forEach( todo => paintTodo(todo) );
    console.log(todos);
}

//Almacenamiento de los todos en el localstorage
const storageTodos = () => {
    localStorage.setItem('misTodos', JSON.stringify(todos));
}

//Recuperar la información del localstorage
const retrieveTodos = () => {
    let todosStorage = localStorage.getItem('misTodos');
    return todosStorage !== null ? JSON.parse(todosStorage) : [];
}

document.querySelector('#addTodo').addEventListener('click', addTodo);
document.querySelector('#deleteList').addEventListener('click', clearList);