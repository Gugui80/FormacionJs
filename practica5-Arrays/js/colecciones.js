/**
 * Ejercicios objeto MAP
 */
const primerMap = new Map();
 
primerMap.set( 'primero', 1 );
primerMap.set( 'segundo', 2 );
primerMap.set( 'tercero', 3 );
 
console.log( primerMap.get('segundo') );//Muestra 2
 
primerMap.delete('tercero');
 
console.log( primerMap.has('tercero') );//Muestra false

//Utilizando claves que no sean cadenas
const obj = {
    a: 1,
    b: 2
};

mult = (a, b) => {
    return a * b;
}
 
const segundoMap = new Map();
 
segundoMap.set( false, 0 );
segundoMap.set( obj, "is a object" );
segundoMap.set( mult, "function mult" );
 
console.log( segundoMap.get(mult) );//Muestra function mult

//Uso de MAP con objeto como clave
var obj1 = {
    a: 1,
    b: 2
};
 
var obj2 = {
    a: 1,
    b: 2
};
 
var tercerMap = new Map();
tercerMap.set( obj1, 1 );
 
console.log( tercerMap.has(obj1) );//Muestra true
console.log( tercerMap.has(obj2) );//Muestra false

//Iteraciones sobre MAP
//Para inicializar los mapas con datos, se introduce como parámetro un array de entradas (un array de arrays).
const cuartoMap = new Map( [ [0, "zero"], [1, "one"], [2, "two"] ] );
 
for (var [key, value] of cuartoMap) {
    console.log(key + " = " + value);
}

/**
 * Ejercicios objeto SET
 */
const objSet1 = {
    a: 1,
    b: 2
};
 
const objSet2 = {
    a: 3,
    b: 4
};
 
var primerSet = new Set();
 
primerSet.add( objSet1 );
primerSet.add( objSet2 );
 
console.log( 'map.has(obj1) = ', primerSet.has(objSet1) );//Muestra true
console.log( 'map.has(obj2) = ', primerSet.has(objSet2) );//Muestra true

primerSet.add(objSet2);//Intentamos volver a insertar el segundo objeto otra vez

primerSet.forEach( elementSet => {
    console.log(elementSet);//Al recorrer el SET vemos que no lo ha añadido, por estar repetido.
})