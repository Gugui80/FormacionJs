/** 
 * Vamos a aprender a manejar eventos con el método .addEventListener del DOM, el cuál recibe el nombre del evento a manejar, y la función callback que lo maneja.
 * El nombre del evento a controlar viene sin el prefijo on, dado que ese prefijo se utiliza cuando sobreescribimos el evento directamente, o lo utilizamos como atributo en el HTML.
*/
const contenedorResultados = document.querySelector('.contenedorResultados');

document.querySelector('#boton1').addEventListener('click',
    event => {
        let buttonId = event.target.id;
        let idButtonParagraph = document.createElement('p');
        idButtonParagraph.innerText = buttonId;

        contenedorResultados.appendChild(idButtonParagraph);
    });

document.querySelector('#cars').addEventListener('change', 
    event => {
        console.log(event)
    });