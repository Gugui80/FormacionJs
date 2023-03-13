(function() {
    
    let todoList = [];

    window.addEventListener('load', ()=> {
        document.querySelector('#nuevo-todo').onkeypress =  (event) => {
            console.log(event)
            if(event.key === 'Enter') {
                var textTodo = document.getElementById('nuevo-todo').value;
                addTodo(textTodo)
            }
        };
        
        addTodo = (text) => {
            let liTodo = document.createElement('li');
            liTodo.innerHTML = text;
            document.getElementById('todo-list').appendChild(liTodo);
            todoList.push(liTodo);
            console.log(todoList);
        }
    })

})();