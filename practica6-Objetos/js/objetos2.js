//OBJETOS 2
var nbaChampions = {
    celtics: 17,
    lakers: 17,
    warrios: 7,
    bulls: 6,
    spurs: 5,
    heat: 3,
    pistons: 3,
    seventySixers: 3,
    knicks: 2,
    rockets: 2,
    bucks: 2,
    raptors: 1,
    cavaliers: 1,
    mavericks: 1,
    supersonics: 1,
    wizards: 1,
    trailBlazers: 1,
    hawks: 1,
    kings: 1
}

/**
 * Manejo de la sentencia for ... in para recorrer las propiedades de un objeto
 */
document.write('<table>');
document.write('<tr><th>Equipo</th><th>Número de títulos</th></tr>')
for(teamChampion in nbaChampions) {
    document.write('<tr>');
    document.write('<td>' + teamChampion + '</td>'); //Accedemos a la clave de cada una de las propiedades del objeto.
    document.write('<td>' + nbaChampions[teamChampion] + '</td>'); //Con sintaxis array accedemos al valor de cada una de las propiedades del objeto.
    document.write('</tr>');
}
document.write('</table>');

/**
 * Manejo del objeto THIS
 */
function thisGlobal() {
    console.log(this); 
}

thisGlobal(); //Muestra: [object Window]

let miObjeto = {
    prop: 'valor',
    metodo: function() {
      console.log(this);
    }
  }
miObjeto.metodo(); //Muestra {prop: 'valor', metodo: ƒ}

/**
*   Precaución con THIS
*/
var objIgae = {
    compania: 'IGAE',
    division: 'V',
    completo: this.compania + " " + this.division
}
console.log(objIgae); //Muestra:Object { compania='IGAE', division='V', completo='undefined undefined'}
//Esto es porque en ese lugar, "this" es el objeto global, ya que no se ha ejecutado dentro de una función como método de un objeto.

//Solución del problema anterior:
var objIgaeCorrect = {
    compania: 'IGAE',
    division: 'V',
    completo: function() {
        return this.compania + " " + this.division
    }
}
console.log(objIgaeCorrect.completo()); //Muestra:'IGAE V'
