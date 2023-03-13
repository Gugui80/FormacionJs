//OBJETOS 1
/**
 * Definición de objetos.
 */
var vehiculo = {
    tipo: 'Gasolina',
    fechaFabricacion: 2017,
    arrancar: function(tipoArranque) {
        if(tipoArranque === 'TURBO') {
            console.log('Arranque sin inyectores')
        } else {
            console.log('Inyección de aceite en los cilindros')
        }
    } 
};

console.log(vehiculo); //Pinta: {tipo: 'Gsolina', fechaFabricacion: 2017, arrancar: ƒ}
console.log(vehiculo.tipo); //Pinta: Gasolina
console.log(vehiculo.fechaFabricacion); //Pinta: 2017
vehiculo.arrancar('TURBO'); //Pinta: Arranque sin inyectores
console.log(typeof(vehiculo)); //Pinta: object

/**
 * Instancia de objetos personalizados y constructores.
 */
function VehiculoPersonalizado(marca, fechaFabricacion, tipoVehiculo, tipoArranque) { //Constructor
    this.marca = marca;
    this.anoFabricacion = fechaFabricacion;
    this.tipo = tipoVehiculo;
    this.arranque = arrancarVehiculo(tipoArranque);
} 

function arrancarVehiculo(tipoArranque) { //Función que inyectamos en uno de los métodos de nuestro objeto.
    if(tipoArranque === 'TURBO') {
        console.log('Arranque sin inyectores');
        return 'TURBO';
    } else {
        console.log('Inyección de aceite en los cilindros');
        return 'Inyection';
    }
}

var vehiculo1 = new VehiculoPersonalizado('Renault Megane', 2017, 'Diesel', 'GTI'); //Instanciamos un objeto de tipo VehiculoPersonalizado
console.log(vehiculo1); //Pinta: VehiculoPersonalizado {marca: 'Renault Megane', anoFabricacion: 2017, tipo: 'Diesel', arranque: undefined}
vehiculo1.arranque; //Pinta: Inyección de aceite en los cilindros