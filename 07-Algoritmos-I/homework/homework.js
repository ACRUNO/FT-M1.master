'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [];
  // var aux = num
  for (var i=1; i <= num; i++){
    if (num%i===0){
      num = num/i;
      array.push(i);
      i=1;
    }
   }
  return  array;
/* SOLUCION PROFE

var arr = [1];
var divisor = 2;
while(num!==1){
  if(num % divisor === 0){
    arr.push(divisor);
    num = num/divisor;
  }else{
    divisor++;
  }
}
return arr;

*/
};

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = 0;
  for (var i = 0; i < array.length - 1; i++){
    for (var j = 0; j < array.length; j++ )
      if(array[j] > array[j+1]){
        aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
    }
  }
  return array;
/*   SOLUCION PROFE
  var flag = true

  while(flag){
    flag = false;
    for(var i = 0; i< array.length - 1; i++){
      if(array[i] > array[i+1]){
        var aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        flag = true;
      }
    }
  }
  return array;
*/
};

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i=1; i < array.length; i++){
    var j = i - 1;
    var aux = array[i];
    while (j >= 0 && array[j] > aux){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length-1; i++){
    var min = i;
    for (var j = i + 1; j < array.length; j++){
      if (array[j] < array[min]){
        min = j;
      } 
    }
    var aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

