//ARRAYS BÁSICOS
var grupoMusica = new Array(6); //Declaramos un array con 6 posiciones y mediante la palabra reservada NEW
/**
 * Rellenamos las 6 posiciones del array, en este caso, con datos de tipo string. Los índices de un aray siempre van de 0 a n-1, siendo n el número de posiciones del array.
 */
grupoMusica[0] = 'Steve Harris';
grupoMusica[1] = 'Bruce Dickinson';
grupoMusica[2] = 'Nicko McBrain';
grupoMusica[3] = 'Dave Murray';
grupoMusica[4] = 'Janick Gers';
grupoMusica[5] = 'Adrian Smith';

for(let i = 0; i < grupoMusica.length; i++) { //Recorremos las posiciones del array, utilizando la propiedad length del objeto Array como limitador, para mostrar la info por pantalla.
    if (i === 0) {
        document.write('<h4>Iron Maiden Members</h4>');
    }
    document.write(grupoMusica[i]);
    if(i < grupoMusica.length - 1) {
        document.write(', ');
    }
}

//ARRAYS MULTIDIMENSIONALES
/**
 * Instanciamos arrays de otra forma, con el símbolo []. Rellenamos estos arrays por índice.
 */
var temperaturas_medias_ciudad0 = [];
temperaturas_medias_ciudad0[0] = 12;
temperaturas_medias_ciudad0[1] = 10;
temperaturas_medias_ciudad0[2] = 11;

var temperaturas_medias_ciudad1 = [];
temperaturas_medias_ciudad1[0] = 5 
temperaturas_medias_ciudad1[1] = 0 
temperaturas_medias_ciudad1[2] = 2 

var temperaturas_medias_ciudad2 = [];
temperaturas_medias_ciudad2[0] = 10; 
temperaturas_medias_ciudad2[1] = 8;
temperaturas_medias_ciudad2[2] = 10;

console.log(temperaturas_medias_ciudad0)
console.log(temperaturas_medias_ciudad1)
console.log(temperaturas_medias_ciudad2)

/**
 * Con las anteriores líneas hemos creado tres arrays de 1 dimensión y tres elementos, como los que ya conocíamos. Ahora crearemos un nuevo array de tres elementos, 
 *  instanciando con la palabra reservada NEW, e introduciremos dentro de cada una de sus casillas los arrays creados anteriormente, con lo que tendremos un array de arrays, 
 * es decir, un array de 2 dimensiones.
 */
var temperaturas_ciudades = new Array (3);
temperaturas_ciudades[0] = temperaturas_medias_ciudad0;
temperaturas_ciudades[1] = temperaturas_medias_ciudad1;
temperaturas_ciudades[2] = temperaturas_medias_ciudad2;

console.log(temperaturas_ciudades)

document.write('<h4>Temperaturas medias por ciudades:</h4>');
document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); //Creamos una tabla para pintar los resultados.
for (i = 0; i < temperaturas_ciudades.length; i++) { 
   	document.write("<tr>");
   	document.write("<td><b>Ciudad " + i + "</b></td>");
   	for (j = 0; j < temperaturas_ciudades[i].length; j++) { 
      	document.write("<td>" + temperaturas_ciudades[i][j] + "</td>");
   	} 
   	document.write("</tr>");
} 
document.write("</table>");
