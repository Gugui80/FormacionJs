var arrayData = [1,2,3,4,5,6];
var arrayText = ['IGAE','División 5','MRR','COFFEE'];

document.write('<h5>Arrays de datos para demostrar las funciones:</h5>')
document.write('<h5>arrayData => [' + arrayData + ']</h5>');
document.write('<h5>arrayText => [' + arrayText + ']</h5>');

//MAP
document.write('<p>Método MAP => [' + arrayData.map(element => element + 5) + ']</p>'); //[6,7,8,9,10,11]

//FILTER
document.write('<p>Método FILTER => [' + arrayData.filter(element => element % 2 === 0) + ']</p>'); //[2,4,6]

//FOREACH
document.write('<p>Método FOREACH => [');
arrayData.forEach((element, i) => {
    document.write(element + (i < arrayData.length - 1 ? ',': ''));
});
document.write(']</p>'); //[1,2,3,4,5,6]

//FIND
document.write('<p>Método FIND => [' + arrayData.find(element => element > 5) + ']</p>'); //[6]

//SORT
document.write('<p>Método SORT => [' + arrayText.sort((elem1, elem2) => elem1 > elem2 ? -1 : 1) + ']</p>'); //[MRR, IGAE, División 5, COFFEE]

//SOME
document.write('<p>Método SOME => [' + arrayData.some(element => element > 6) + ']</p>'); //[false]

//EVERY
document.write('<p>Método EVERY => [' + arrayData.every(element => element < 7) + ']</p>'); //[true]

//CONCAT
document.write('<p>Método CONCAT => [' + arrayData.concat(arrayText) + ']</p>'); //[1,2,3,4,5,6,IGAE,División 5,MRR,COFFEE]

//INCLUDES
arrayText = ['IGAE','División 5','MRR','COFFEE']; //Reinicializamos el array, para mantener el orden inicial
document.write('<p>Método INCLUDES => [' + arrayText.includes('MRR') + ']</p>'); //[true]

//JOIN
document.write('<p>Método JOIN => [' + arrayData.join('-') + ']</p>'); //[1-2-3-4-5-6]

//REDUCE
document.write('<p>Método REDUCE => [' + arrayData.reduce((acumulador, valorActual) => acumulador + valorActual) + ']</p>'); //[21]

//INDEXOF
arrayText = ['IGAE','División 5','MRR','COFFEE']; //Reinicializamos el array, para mantener el orden inicial
document.write('<p>Método INDEXOF => [' + arrayText.indexOf('MRR') + ']</p>'); //[2]

//FINDINDEX
document.write('<p>Método FINDINDEX => [' + arrayText.findIndex(element => element === 'Hacienda') + ']</p>'); //[-1]

//FILL
document.write('<p>Método FILL => [' + arrayData.fill('siete', 3, 5) + ']</p>'); //[1,2,3,'siete','siete',6]

//PUSH
arrayData = [1,2,3,4,5,6]; //Reinicializamos el array, para mantener el orden inicial
arrayData.push(25);
document.write('<p>Método PUSH => [' + arrayData + ']</p>'); //[1,2,3,4,5,6,25]

//POP
arrayData.pop();
document.write('<p>Método POP => [' + arrayData + ']</p>'); //[1,2,3,4,5,6]

//SHIFT
arrayText.shift(); //Borra el elemento IGAE
document.write('<p>Método SHIFT => [' + arrayText + ']</p>'); //[División 5,MRR,COFFEE]

//UNSHIFT
arrayText = ['IGAE','División 5','MRR','COFFEE']; //Reinicializamos el array, para mantener el orden inicial
arrayText.unshift('INECO');
document.write('<p>Método UNSHIFT => [' + arrayText + ']</p>'); //[INECO,IGAE,División 5,MRR,COFFEE]

//SLICE
document.write('<p>Método SLICE => [' + arrayData.slice(1,3) + ']</p>'); //[2,3]

//SPLICE
arrayData.splice(2,1,'MRR')
document.write('<p>Método SPLICE => [' + arrayData + ']</p>'); //[1,2,MRR,4,5,6]

//LASTINDEXOF
arrayData = [1,2,3,4,5,6]; //Reinicializamos el array, para mantener el orden inicial
document.write('<p>Método LASTINDEXOF => [' + arrayData.lastIndexOf(5) + ']</p>'); //[4]

//FLAT
document.write('<p>Método FLAT => [' + ']</p>'); //[]

//ISARRAY
document.write('<p>Método ISARRAY => [' + Array.isArray(arrayText) + ']</p>'); //[true]

//FROM
document.write('<p>Método FROM => [' + Array.from(arrayData) + ']</p>'); //[1,2,3,4,5,6]

let people = [
    {
      name: 'Julia',
      age: 10,
    },
    {
      name: 'Miguel',
      age: 45,
    },
    {
      name: 'Juan',
      age: 24,
    },
    {
      name: 'María',
      age: 60,
    },
    {
      name: 'Alfredo',
      age: 45,
    },
    {
      name: 'Alba',
      age: 10,
    },
  ];

people.sort( (a, b) => {
  if(a.age < b.age) {
    return -1;
  }
  if(a.age > b.age) {
    return 1;
  }
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
});

console.log(people);