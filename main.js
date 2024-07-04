// Refatoração de código: Pedro Bilhalva
// Melhora na legibilidade do código e separação de funções: Diego Nachtigall
// Comentarios e documentação: Débora Carvalho

// Função que verifica se um elemento está contido na array "lista" e imprime uma mensagem de acordo com o resultado
const ContemElemento = require('./functions/ContemElemento.js');

  let lista = [1, 2, 3, 4, 5];
  let elemento = 3;
  
  // Variável que verifica se o elemento está contido no array
  const verifica = ContemElemento(lista, elemento);
  if (verifica == true) {
    console.log(`${elemento} foi encontrado no array`);
  } else {
    console.log(`${elemento} não foi encontrado no array`);	
  }
  
  // Função que imprime os números de 0 a 5
  const ContagemProgressiva = require('./functions/ContagemProgressiva.js');

  console.log(ContagemProgressiva(0, 5));
  
  // Função que soma dois números com variáveis "cinco" e "dez", e imprime o resultado a partir da função "Soma"
  const Soma = require('./functions/Soma.js');

  let cinco = 5;
  let dez = 10;


  console.log(Soma(cinco, dez));
  
    // Função que imprime os números pares da array "numeros", que contém os números de 1 a 5
    const SelecionaPares = require('./functions/SelecionaPares.js');
    
    var numeros = [1, 2, 3, 4, 5];

    console.log(SelecionaPares(numeros));

    // Função que subtrai dois números com variáveis de exemplo, e imprime o resultado a partir da função "Subtracao"
  const Subtracao = require('./functions/Subtracao.js');

  var cem = 100;
  var cinquenta = 50;

  console.log(Subtracao(cem, cinquenta));
  
  // Função que multiplica um número por ele mesmo, e imprime o resultado a partir da função "Quadrado"
  const Quadrado = require('./functions/Quadrado.js');
  
  console.log(Quadrado(5));
  