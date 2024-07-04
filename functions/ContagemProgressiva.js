// Função que imprime numeros em sequência de acordo com os parâmetros de entrada
function ContagemProgressiva(inicio, fim) {
    lista = [];
    for (var i = inicio; i <= fim; i++) {
        lista.push(i);
    }
    return lista;
}

module.exports = ContagemProgressiva;