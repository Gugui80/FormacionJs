// Obtenemos <div id="page" class="info data dark" data-number="5"></div>
let div = document.querySelector("#pagina");
console.log(div);

document.write(div.hasAttribute("data-number") + "<br>");  // true (data-number existe)
document.write(div.hasAttributes() + "<br>");              // true (tiene 3 atributos)

document.write(div.getAttributeNames() + "<br>");          // ["id", "data-number", "class"]
document.write(div.getAttribute("id") + "<br>");           // "pagina"
document.write(div.getAttribute("value") + "<br>");        // null

div.removeAttribute("id") + "<br>";        
document.write(div.getAttributeNames() + "<br>"); // class y data-number
div.setAttribute("id", "pagina2") + "<br>";   
document.write(div.getAttribute("id") + "<br>"); ; // Añader id="pagina2"

//Propiedades innerHtml y textContent
let div_example = document.querySelector(".info");
console.log(div_example.textContent); //Muestra: Hola mundo!!
console.log(div.innerHTML); //Muestra: <b>Hola</b> mundo!!