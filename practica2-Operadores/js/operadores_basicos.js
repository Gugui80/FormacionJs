//OPERADORES ARITMÉTICOS
document.write('<h5>OPERADORES ARITMÉTICOS</h5>')
precio = 128 //introduzco un 128 en la variable precio
document.write(precio + '<br>')
unidades = 10 //otra asignación
document.write(unidades + '<br>')
factura = precio * unidades //multiplico precio por unidades, obtengo el valor factura
document.write(factura + '<br>')
resto = factura % 3 //obtengo el resto de dividir la variable factura por 3
document.write(resto + '<br>')
precio++ //incrementa en una unidad el precio (ahora vale 129)
document.write(precio++ + '<br>')

//OPERADORES DE ASIGNACIÓN
document.write('<h5>OPERADORES DE ASIGNACIÓN</h5>')
ahorros = 7000 //asigna un 7000 a la variable ahorros
document.write(ahorros + '<br>')
ahorros += 3500 //incrementa en 3500 la variable ahorros, ahora vale 10500
document.write(ahorros + '<br>')
ahorros /= 2 //divide entre 2 mis ahorros, ahora quedan 5250
document.write(ahorros + '<br>')

//OPERADORES LÓGICOS
document.write('<h5>OPERADORES LÓGICOS</h5>')
miBoleano = true
document.write(miBoleano + '<br>')
miBoleano = !miBoleano //miBoleano ahora vale false
document.write(miBoleano + '<br>')
tengoHambre = true
tengoComida = true
comoComida = tengoHambre && tengoComida
document.write(comoComida + '<br>')

//OPERADORES CONDICIONALES
document.write('<h5>OPERADORES CONDICIONALES</h5>')
comparacionDeCondiciones = 7 == 7 //devuelve true
document.write(comparacionDeCondiciones + '<br>')
comparacionDeCondiciones = 7 != 'texto' //devuelve true
document.write(comparacionDeCondiciones + '<br>')
comparacionDeCondiciones = 7 > 7 //devuelve false
document.write(comparacionDeCondiciones + '<br>')
comparacionDeCondiciones = 7 < 8 //devuelve true
document.write(comparacionDeCondiciones + '<br>')
comparacionDeCondiciones = 7 <= 7 //devuelve true
document.write(comparacionDeCondiciones + '<br>')
comparacionDeCondiciones = 3 >= 5 //devuelve false
document.write(comparacionDeCondiciones + '<br>')

//DIFERENCIAS ENTRE DOBLE Y TRIPLE IGUAL
let foo = "prueba" 
let bar = "prueba"  
console.log(foo == bar) //true
console.log(foo === bar) //true

const numero = 1234 
const numeroComoCadenaDeTexto = '1234'  
console.log(numero == numeroComoCadenaDeTexto) //true
console.log(numero === numeroComoCadenaDeTexto)  //false

console.log(0 == false) //true - Esto ocurre por que Js transforma el 0 a false
console.log(0 === false) //false - Aquí también se transforma el 0 a false, pero como no son del mismo tipo, la comparación es falsa

