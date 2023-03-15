//SENTENCIA RETURN
function parametrosPorDefecto(num1, num2 = 4) {
    return(num1 + num2);
}

console.log(
    typeof(parametrosPorDefecto(1,2))
    );//Muestra number
console.log(
    typeof(parametrosPorDefecto(1))
    );//Muestra number
console.log(
    typeof(parametrosPorDefecto())//revisar
    );//Muestra number
console.log(
    typeof(parametrosPorDefecto('hola'))
    );//Muestra string

//Parámetros por defecto en arrow functions
parametrosDesordenados = (num1 = 4, num2) => {
    return(num1 - num2)
}

console.log(parametrosDesordenados(2));//Muestra NaN
console.log(parametrosDesordenados(2,6));//Muestra -4

/**
 * En este ejemplo vamos a manejar el return en varios puntos de la misma función, para ver su comportamiento. Las buenas prácticas en programación recomiendan utilizar una
 * única sentencia return en cada función, para que el comportamiento de la misma sea más fácil de depurar.
 */
function edadDentroDiezAños(edadActual) {
    if (typeof(edadActual) != Number) { //Evaluamos si en valor recibido a través de la caja de texto es válido para calcular una edad.
        var edadResultado = parseInt(edadActual);

        if (isNaN(edadResultado)) {
            alert('Debes introducir una edad numérica');
            return;
        }

        return edadResultado + 10;
    }
    return edadActual + 10;
}

/**
 * En este caso, la función edadDentroDiezAños solo se ocupa de devolver el valor de la edad incrementado en 10 años, pero no utliza la sentencia document.write() para mostrarlo
 * en pantalla. Para ello, almacenaremos el resultado de la llamada a esa función en una variable, y utilizaremos esa varible para pintar el resultado.
 */
document.getElementsByTagName('button')[0].onclick = function() { //Esta línea la explicaremos más adelante, cuando veamos interacciones con el DOM ;)
    var edadActual = document.getElementById('edadActual').value; //Recogemos el valor introducido en la caja de texto del formulario.
    
    var edadEnDiezAños = edadDentroDiezAños(edadActual); //Almacenamiento del resultado de la llamada a la función, que tomará la decisión de que hacer con el valor recibido.
    
    if (edadEnDiezAños) { //Tomamos decisiones sobre el pintado de la información en función de lo que nos ha devuelto nuestra función calcular edad dentro de 10 años.
        document.getElementById('edadDentroDiezAños').classList.remove('display_error');
        document.getElementById('edadDentroDiezAños').classList.toggle('display_success');
        document.getElementById('edadDentroDiezAños').innerHTML = edadEnDiezAños + ' años';     
    } else {    
        document.getElementById('edadDentroDiezAños').classList.remove('display_success');
        document.getElementById('edadDentroDiezAños').classList.toggle('display_error');
        document.getElementById('edadDentroDiezAños').innerHTML = 'Dato incorrecto';    
    }

    document.getElementById('edadActual').value = ''; //Limpiamos la caja de texto.
}

