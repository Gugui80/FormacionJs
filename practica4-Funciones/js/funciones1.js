//DEFINICIÓN DE FUNCIÓN
function holaMundo() {
    console.log('Hola mundo');
}

/**
 * Por si misma la función no hace nada. Es necesario invocarla en cualquier parte de nuestro código para que la instrucción encerrada entre las llaves se ejecute.
 */

//INVOCACIÓN
holaMundo(); //Esta LLAMADA a la función definida en la línea 2 del código provocará que se muestre el mensaje 'Hola Mundo'

//PASO DE PARÁMETROS
function holaMundoIgae(mensaje) {
    console.log(mensaje + ' saluda al mundo.');
}

holaMundoIgae('IGAE');

function escribirBienvenida(nombre,colorTexto){
    document.write('<font color=' + colorTexto + '>')
    document.write('<h3>Hola ' + nombre + '</h3>')
    document.write('</font>')
}

escribirBienvenida('Igae', 'red')

//ARROW FUNCTIONS
escribirDespedida = (mensaje) => {
    console.log('Mensaje de despedida IGAE a: ' + mensaje)
}

escribirDespedida('Equipo formación Js')

//ARROW FUNCTIONS sin parámetros
escribirDespedidaSinParametro = () => {
    console.log('Fin de la práctica')
}

escribirDespedidaSinParametro()

//Parámetros por defecto en la llamada a funciones
function parametrosPorDefecto(num1, num2 = 4) {
    console.log(num1 + num2);
}

parametrosPorDefecto(1,2);//Muestra 3
parametrosPorDefecto(1);//Muestra 5
parametrosPorDefecto();//Muestra NaN
parametrosPorDefecto('hola');//Muestra hola4

//Parámetros por defecto en arrow functions
parametrosDesordenados = (num1 = 4, num2) => {
    console.log(num1 - num2)
}

parametrosDesordenados(2);//Muestra Nan
parametrosDesordenados(2,6);//Muestra -4

