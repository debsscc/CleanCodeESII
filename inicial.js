// Refatoração de código: Pedro Bilhalva
// Melhora na legibilidade do código: Diego Nachtigall

function ContemElemento(array, elemento) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return true;
      }
    }
    return false;
  };
  
  let lista = [1, 2, 3, 4, 5];
  let elemento = 3;
  
  const verifica = contemElemento(lista, elemento);
  if (verifica == true) {
    console.log(`${elemento} foi encontrado no array`);
  } else {
    console.log(`${elemento} não foi encontrado no array`);	
  }
  
  
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  
  
  let cinco = 5;
  let dez = 10;
  function Soma(numero1, numero2) {
    return numero1 + numero2;
  }
  
  console.log(Soma(cinco, dez));
  
  
  var numeros = [1, 2, 3, 4, 5];
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(m[i]);
    }
  }
  function Subtracao(PrimeiroN, SegundoN) {
    if ( PrimeiroN > SegundoN) {
      return PrimeiroN - SegundoN;
    } else {
      return SegundoN - PrimeiroN;
    }
  }
  
  var cem = 100;
  var cinquenta = 50;
  console.log(Subtracao(cem, cinquenta));
  
  
  function Quadrado(numero) {
    return numero * numero;
  };
  
  console.log(Quadrado(5));
  