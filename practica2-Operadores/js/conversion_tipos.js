//Conversión de tipos
let cadena1= "6";
let num1 = 4;
console.log(cadena1 + num1); //Muestra 64

let holaMundo = 'hola mundo';
console.log(num1 + holaMundo);//Muestra 4hola mundo

console.log(num1 + 8);//Muestra 12

num1 = 'hola';
console.log(num1 + 8);//Muestra hola8;

let isNumber = false; //Caso particular de boolean interpretado como 1 ó 0
console.log(isNumber + 8);

console.log(8/num1);//Muestra NaN (Not a Number). Mecanismo de JS para convertir operaciones aritméticas entre tipos no compatibles.

console.log(8/0);

let cadena2 = '7';
let num2 = 3;
//Primera operación:
console.log(num2 + cadena2);//Muestra 37
console.log(cadena2 - num2);//Muestra 7
console.log(num2 * cadena2);//Muestra 21

let cadena3 = "4987438h";
console.log(num2 * cadena3);//Muestra NaN