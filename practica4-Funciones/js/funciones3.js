//EVAL
document.write('<h4>EVAL</h4>')
var miTexto = "3 + 5" 
eval('document.write(' + miTexto +')') //Pinta un 8 en pantalla

//PARSEINT
document.write('<h4>PARSEINT</h4>')
document.write(parseInt('34') + '</br>') //Pinta el numero 34
document.write(parseInt('101011',2) + '</br>') //Pinta el numero 43
document.write(parseInt("Igae formación")) //Pinta NaN

//ISNAN
document.write('<h4>ISNAN</h4>')
numberExample = parseInt("A3.6") 
document.write(isNaN(numberExample) + '</br>') //Pinta true

miFloat = parseFloat("4.7") 
document.write(isNaN(miFloat) + '</br>') //Pinta false