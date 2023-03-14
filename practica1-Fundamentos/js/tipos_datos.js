//Declaración de variables de cada tipo
var tipoNumero = 34;
var tipoTexto = 'Giannis Antetokounmpo';
var tipoTexto2 = "Tannasis Antetokoumpo";
var tipoBoolean = true;

document.write('Valor: ' + tipoNumero + ', Tipo: ' + typeof(tipoNumero) + '<br>' );
document.write('Valor: ' + tipoTexto + ', Tipo: ' + typeof(tipoTexto) + '<br>');
document.write('Valor: ' + tipoTexto2 + ', Tipo: ' + typeof(tipoTexto2) + '<br>');
document.write('Valor: ' + tipoBoolean + ', Tipo: ' + typeof(tipoBoolean) + '<br>');

console.log( typeof(tipoNumero));
console.log(typeof(tipoTexto));
console.log(typeof(tipoTexto2));
console.log(typeof(tipoBoolean));

//Cambio de tipo de dato dentro de una misma variable
tipoNumero = '34';
document.write('Valor: ' + tipoNumero + ', Tipo: ' + typeof(tipoNumero) + '<br>' );

//Manejo del null en JS
var tipoNull = null;
document.write('Valor: ' + tipoNull + ', Tipo: ' + typeof(tipoNull) + '<br>' );

//Comportamientos de JS al combinar variables de distintos tipos
tipoNumero = 34;
var tipoNumero2 = '34';
//Imprime 3434, no suma los valores, los concatena.
document.write('La suma entre ' + tipoNumero + ' y ' + tipoNumero2 + ' = ' + tipoNumero + tipoNumero2);
