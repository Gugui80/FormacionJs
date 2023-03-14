//OPERADOR TERNARIO
document.write('<h5>OPERADOR TERNARIO</h5>')
cadenaCorta = 'Iron Maiden'
cadenaLarga = 'Metallica'
document.write('¿Qué cadena es más larga?: <b>' + cadenaCorta + '</b> ó <b>' + cadenaLarga + '</b><br>')
queCadenaMuestro = (cadenaCorta.length > cadenaLarga.length) ? cadenaCorta : cadenaLarga //muestra cadenaCorta
document.write(queCadenaMuestro + '<br>')

//OPERADOR TYPEOF
document.write('<h5>OPERADOR TYPEOF</h5>')
booleano = true 
numerico = 22 
numerico_flotante = 13.56 
texto = "mi texto" 
fecha = new Date() 
document.write('El tipo de boleano es: ' + typeof booleano + '<br>') 
document.write('El tipo de numerico es: ' + typeof numerico + '<br>') 
document.write('El tipo de numerico_flotante es: ' + typeof numerico_flotante + '<br>') 
document.write('El tipo de texto es: ' + typeof texto + '<br>') 
document.write('El tipo de fecha es: ' + typeof fecha + '<br>')