'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1){
    return array;
  }
  var pivot = array[array.length-1];
  var arrRigth = [];
  var arrLeft = [];
  for (var i = 0; i < array.length-1; i++){
      if (array[i] < pivot){
        arrLeft.push(array[i]);
      } else {
        arrRigth.push(array[i]);
      }
  }
  return quickSort(arrLeft).concat(pivot).concat(quickSort(arrRigth));
};


function merge(arr1, arr2){
  var array = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length){
    array = array.concat(arr1.slice(i, arr1.length));
  } else{
    array = array.concat(arr2.slice(j, arr2.length));
  }
  return array;
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1){
    return array;
  }
  while(array.length !== 1){
    var arr1 = mergeSort(array.slice(0, array.length/2));
    var arr2 = mergeSort(array.slice(array.length/2, array.length));
    return merge(arr1, arr2);
  };
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
