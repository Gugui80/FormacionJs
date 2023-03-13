//Vamos a insertar nuestra primera imagen a través del DOM.
let container = document.createElement('div');
container.setAttribute('class', 'example_container');
container.id = 'main_container';
//container.data-example = 'example'; Porque falla esta sentencia?
container.setAttribute('data-example', 'example');

document.body.appendChild(container);//Anclamos el elemento al DOM. Si inspeccionamos veremos nuestro nuevo elemento.

//Ahora vamos a crear el nodo img para insertarlo en nuestro div.
let imgExample = document.createElement('img');
console.log(imgExample); //Nos muestra que, efectivamente, hemos creado una imagen html, y el dom le ha creado todos sus métodos y atributos.
imgExample.src = 'img/logo.png'; //Ojo con la ruta de la imagen. Hay que referenciarla como si estuviéramos en el html del ejercicio, que es realmente donde se carga.
imgExample.alt = 'Primera imagen generada en el DOM';

container.appendChild(imgExample);

