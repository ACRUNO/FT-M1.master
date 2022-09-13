'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let res = 0;
  num = num.reverse();
  for (let i = 0; i<num.length; i++){
    if (num[i] === 1)
      res += 2**i;
  }
  return res;
  }

function DecimalABinario(num) {
  // tu codigo aca
  let res= [];
  
  while (num !== 0 ){
    res.unshift(num % 2);
    num = Math.floor(num/2);
  }
  return res.join('');
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}