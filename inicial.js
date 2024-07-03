// Refatoração de código: Pedro Bilhalva
// Melhora na legibilidade do código: Diego Nachtigall
// Comentarios e documentação: Débora Carvalho

// Função que verifica se um elemento está contido no array "lista" e imprime uma mensagem de acordo com o resultado
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
  
  // Variável que verifica se o elemento está contido no array
  const verifica = contemElemento(lista, elemento);
  if (verifica == true) {
    console.log(`${elemento} foi encontrado no array`);
  } else {
    console.log(`${elemento} não foi encontrado no array`);	
  }
  
  // Função que imprime os números de 0 a 5
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  
  // Função que soma dois números com variáveis "cinco" e "dez", e imprime o resultado a partir da função "Soma"
  let cinco = 5;
  let dez = 10;
  function Soma(numero1, numero2) {
    return numero1 + numero2;
  }

  console.log(Soma(cinco, dez));
  
    // Função que imprime os números pares da array "numeros", que contém os números de 1 a 5
  var numeros = [1, 2, 3, 4, 5];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(m[i]);
    }
  } 

    // Função que subtrai dois números com variáveis de exemplo, e imprime o resultado a partir da função "Subtracao"
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
  
  // Função que multiplica um número por ele mesmo, e imprime o resultado a partir da função "Quadrado"
  function Quadrado(numero) {
    return numero * numero;
  };

  console.log(Quadrado(5));
  