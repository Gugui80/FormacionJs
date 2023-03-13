/**
 * Declaración de variables globales y locales
*/
var holaMundo = 'Hola mundo';

function mostrarVariableLocal() {
    var holaMundo = 'Hola mundo desde variable local';
    document.write(holaMundo);//Imprime: LLamada a función mostrar variable local 
}

document.write(holaMundo + '<br>');//Imprime: Hola mundo

mostrarVariableLocal();

/**
* Closures
*/
let count = 1;

function contador() {
    document.write('<br>' + count);
}

contador(); // imprime 1
count = 2;
contador(); // imprime 2