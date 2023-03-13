//DEFINICIÓN DE FUNCIÓN
function holaMundo() {
    alert('Hola mundo');
}

/**
 * Por si misma la función no hace nada. Es necesario invocarla en cualquier parte de nuestro código para que la instrucción encerrada entre las llaves se ejecute.
 */

//INVOCACIÓN
holaMundo(); //Esta LLAMADA a la función definida en la línea 2 del código provocará que se muestre el mensaje 'Hola Mundo'

//PASO DE PARÁMETROS
function holaMundoIgae(mensaje) {
    alert(mensaje + ' saluda al mundo.');
}

holaMundoIgae('IGAE');

function escribirBienvenida(nombre,colorTexto){
    document.write('<font color=' + colorTexto + '>')
    document.write('<h3>Hola ' + nombre + '</h3>')
    document.write('</font>')
}

escribirBienvenida('Gugui', 'blue')