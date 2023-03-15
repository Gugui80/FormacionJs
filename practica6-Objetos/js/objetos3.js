//Asignar nuevas propiedades/métodos a un objeto
const alumnoIgae = {
    nombre: ' division5',
    planta: 8,
    departamento: 'It'
}

console.log(alumnoIgae)

alumnoIgae.saludo = function(mensaje) {
    alert('Hola os saludo con ' + mensaje);
}

console.log(alumnoIgae)

//alumnoIgae = {};  Descomentar para observar que no se puede redeclarar una variable const

//Eliminar propiedades: Utilizamos la palabra reservada delete
delete alumnoIgae.planta;
console.log(alumnoIgae)

alumnoIgae.nombre = null
console.log(alumnoIgae)

