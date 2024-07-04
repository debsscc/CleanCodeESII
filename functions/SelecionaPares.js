// Função que imprime os números pares de uma array
function SelecionaPares(array) {
    lista = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            lista.push(array[i]);
        }
    }
    return lista;
}

module.exports = SelecionaPares;