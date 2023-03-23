//Vamos a ver , en un pequeño resumen de funcionalidad, distintas formas de como podemos hacer la copia de un array, utilizando el método push.
//La salida en los 3 casos es la misma.
const ironMaiden = ['Steve Harris','Bruce Dickinson','Nicko McBrain','Dave Murray','Janick Gers', 'Adrian Smith'];
const copyIronMaiden = new Array();

//Primera forma: Pasamos función callback al método forEach
copyFormation = ( newMusician ) => {
    copyIronMaiden.push(newMusician);
}

ironMaiden.forEach(copyFormation);
console.log(copyIronMaiden);

//Segunda forma: En el propio método forEach, definimos callback para copiar información
const copyIronMaiden2 = new Array();

ironMaiden.forEach( newMusician => { copyIronMaiden2.push(newMusician) } );
console.log(copyIronMaiden2);

//Tercera forma: Utilizando operador de propagación
const copyIronMaiden3 = new Array();

copyIronMaiden3.push(...ironMaiden);
console.log(copyIronMaiden3);
