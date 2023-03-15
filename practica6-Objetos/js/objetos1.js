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

console.log(vehiculo); //Muestra: {tipo: 'Gasolina', fechaFabricacion: 2017, arrancar: ƒ}
console.log(vehiculo.tipo); //Muestra: Gasolina
console.log(vehiculo.fechaFabricacion); //Muestra: 2017
vehiculo.arrancar('TURBO'); //Muestra: Arranque sin inyectores
console.log(typeof(vehiculo)); //Muestra: object
//var vehiculo2 = new vehiculo(); QUE LE OCURRE A ESTA SENTENCIA?

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
console.log(vehiculo1); //Muestra: VehiculoPersonalizado {marca: 'Renault Megane', anoFabricacion: 2017, tipo: 'Diesel', arranque: undefined}
vehiculo1.arranque; //Muestra: Inyección de aceite en los cilindros