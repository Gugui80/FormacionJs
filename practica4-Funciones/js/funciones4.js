//ARROW FUNCTIONS
let multipli = (x,y) => {
    return x * y;
};
   
let potencia =  (x,y) => {
    return Math.pow(x, y);
};
   
let suma = (x,y) => {
    return x + y;
};
   
   
let result = multipli(5,2);
alert ('El producto de 5 y 2 es: ' + result);
   
result = suma (3,4);
alert ('La suma de 5 y 2 es: ' + result);

result = potencia(5,2);
alert ('5 elevado a 2 es: ' + result);