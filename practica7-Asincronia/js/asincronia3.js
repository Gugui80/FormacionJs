//PROMESAS
const myPromise = fetch('https://jsonplaceholder.typicode.com/todos/5');
console.log(myPromise); //Muestra un objeto de tipo Promise.

//Procesamos la respuesta de la llamada a la API mediante métodos estáticos del objeto Promise.
Promise
    .resolve(myPromise)
    .then( response => {
        console.log(response); //Muestra un objeto de tipo Response de Js.
    });

//Acabamos de envolver una promesa dentro de otra, cosa no necesaria. Realmente podríamos haber hecho, directamente:
myPromise
    .then( result => {
        console.log(result)
    });

//Ejercicio: Mostrar por consola la respuesta json que hemos obtenido de la llamada a la API.+