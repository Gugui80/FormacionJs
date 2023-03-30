//MANEJO DE CALLBACKS
setTimeout(() => {
    console.log('Ejecución asíncrona de un callback')
},3000);

//ORDEN DE EJECUCIÓN ENTRE CÓDIGO SÍNCRONO Y ASÍNCRONO
setTimeout(() => console.log("Código asíncrono."), 2000);
console.log("Código síncrono.");

//Si guardamos nuestro callback en una variable:
const mensaje = (contador) => { 
    console.warn('Ejecución número: ' + contador + ' de la función.'); 
};

setTimeout(mensaje, 1500, 34);

//Averiguar en que orden de ejecución se mostrarán los mensajes de todo el script.

let x = 1;

setTimeout( function() {
  x = 3;
  console.log(x);
  x = 20;
}, 100);

setTimeout( function() {
  x += 10;
  console.log(x);
}, 10);

setTimeout( function() {
  console.log(x);
}, 1);