//BUCLE FOR
document.write('Bucle FOR:')
for (i=1;i<=6;i++) { 
    document.write('<h' + i + '>Encabezado de nivel ' + i + '</h' + i + '>') 
}

//BUCLE WHILE
var color = "" 
while (color != "rojo"){ 
   	color = prompt("dame un color (escribe rojo para salir)","") 
}

/**
 * Nota: Hemos utilizado en este ejemplo la función prompt de Javascript, que no hemos visto todavía en este manual. Esta función sirve para que mostrar
 *  una caja de diálogo donde el usuario debe escribir un texto. Esta función pertenece al objeto window de Javascript, que veremos más adelante.
 */