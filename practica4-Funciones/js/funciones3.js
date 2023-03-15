//EVAL
document.write('<h4>EVAL</h4>')
var miTexto = "3 + 5" 
eval('document.write(' + miTexto +')') //Pinta un 8 en pantalla
//eval('document.write('`${miTexto}`')')

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

//ENCODE URI
document.write('<h4>ENCODEURI</h4>')
miCadena = "Cadena no valida - para URL * ]"
document.write('Cadena sin tratar: ' + miCadena + "<br>")
document.write(encodeURI(miCadena));

//DECODE URI
document.write('<h4>DECODEURI</h4>')
miCadenaCodificada = "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
document.write('Cadena codificada: ' + miCadenaCodificada + "<br>")
document.write(decodeURI(miCadenaCodificada));