//Selectores del DOM
actualizarValor = () => {
    let nombreUsuario = document.getElementById('nombreUsuario');
    console.log(nombreUsuario); //Muestra el elemento html.

    let nombreUsuario2 = document.querySelector('#nombreUsuario');
    console.log(nombreUsuario2) //Muestra el elemento html.

    //Vamos a utilizar esos selectores para crear elementtos en la página.
    let respuesta = document.querySelectorAll('.respuesta');
    console.log(respuesta);//Muestra el div que tiene esa clase, en un array de resultados de tipo NodeList.
    console.log(respuesta[0]);//Muestra el div que tiene esa clase.
    
    //Crearemos un párrafo con el texto recibido en la caja de texto, y lo mostraremos en el div respuesta.
    let parrafoRespuesta = document.createElement('p');
    parrafoRespuesta.innerHTML = nombreUsuario.value;

    respuesta[0].appendChild(parrafoRespuesta);//De esta forma, hemos creado rápidamente un binding entre la caja de texto y la página, como veremos que hace Angular automáticamente.
}