//OPCIONES DE INICIALIZACIÓN DE ARRAYS
/**
 * Repetimos el ejemplo de las temperaturas de las ciudades, inicializando de forma más corta y simple los arrays.
 */
var temperaturas_ciudades = new Array(new Array (12,10,11), new Array(5,0,2),new Array(10,8,10));

//Como podemos observar, en una única línea conseguimos lo que en 12 líneas del ejercicio anterior.
document.write('<h4>Arrays bidimensionales:</h4>');
document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
for (i = 0; i < temperaturas_ciudades.length; i++) { 
   	document.write("<tr>");
   	document.write("<td><b>Ciudad " + i + "</b></td>");
   	for (j = 0; j < temperaturas_ciudades[i].length; j++) { 
      	document.write("<td>" + temperaturas_ciudades[i][j] + "</td>");
   	} 
   	document.write("</tr>");
} 
document.write("</table>");

/**
 * Repetimos el ejemplo de las temperaturas de las ciudades, utilizando la potencia de Javascript para almacenar datos de distinto tipo en un mismo array..
 */
temperaturas_ciudades = new Array(new Array ('Madrid',12,10,11), new Array('Santander',5,0,2),new Array('Badajoz',10,8,10));

//Como podemos observar, en una única línea conseguimos lo que en 12 líneas del ejercicio anterior.
document.write('<h4>Arrays que almacenan datos de distinto tipo:</h4>');
document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
for (i = 0; i < temperaturas_ciudades.length; i++) { 
   	document.write("<tr>");
   	document.write("<td><b> " + temperaturas_ciudades[i][0] + "</b></td>"); //En esta línea pintamos el primer valor de cada array, que es el nombre de la ciudad.
   	for (j = 1; j < temperaturas_ciudades[i].length; j++) { //Inicializamos el iterador j = 1, para que no tenga en cuenta el nombre de la ciudad otra vez.
      	document.write("<td>" + temperaturas_ciudades[i][j] + "</td>");
   	} 
   	document.write("</tr>");
} 
document.write("</table>");

/**
 * Mostramos la misma tabla pero verficando el tipo de dato que tiene almacenada cada posición de los arrays. Utilizamos el operador typeof
 */
document.write('<h4>Tipo de dato almacenado en cada posición de los arrays:</h4>');
document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
for (i = 0; i < temperaturas_ciudades.length; i++) { 
   	document.write("<tr>");
   	document.write("<td><b> " + typeof(temperaturas_ciudades[i][0]) + "</b></td>"); 
   	for (j = 1; j < temperaturas_ciudades[i].length; j++) { 
      	document.write("<td>" + typeof(temperaturas_ciudades[i][j]) + "</td>");
   	} 
   	document.write("</tr>");
} 
document.write("</table>");

/**
 * Operador de propagación
 */
let colores = new Array('azul', 'amarillo', 'rojo', 'verde');
console.log(colores);

let copiaColores = new Array(...colores);
console.log(copiaColores);//Almacena el mismo contenido que el array colores.

