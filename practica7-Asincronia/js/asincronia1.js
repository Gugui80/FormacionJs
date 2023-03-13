//ASYNC AWAIT
async function funcionAsincrona() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/5'); //Invocamos una API externa
    const json = await response.json();

    document.write('Llamada a la URL: <b>https://jsonplaceholder.typicode.com/todos/5</b> (Consulta la pestaña NETWORK en la consola del navegador.)<br>');
    document.write('Código HTTP de respuesta:<strong>' + response.status + '</strong><br>');
    document.write('Objeto respuesta: <strong>{ ');
    for(objectParse in json) {
        document.write(objectParse + ':' + json[objectParse] + ', ');
    }
    document.write('}</strong>');
    console.log(json); //Muestra: {userId: 1, id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis', completed: false}
}

//Vinculamos la llamada a la función asíncrona al evento onClick del botón de la página.
document.getElementById('llamarUrl').onclick = function() {
    funcionAsincrona();
}