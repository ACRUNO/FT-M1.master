'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let res = 0;
  var array = Array.from(String(num), Number);
  for (let i = 0; i<array.length; i++){
    if (array[i] === 1)
      res = res + Math.pow(2, array.length-(i+1));
  }
  return res;
  }

function DecimalABinario(num) {
  // tu codigo aca
  let res= [];
  let i=0;
  while (Math.floor(num) / 2 != 0 ){
    res[i] = Math.floor(num) % 2;
    num = num/2;
    i++;
  }
  return res.reverse().join('');
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}