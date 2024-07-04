// Função que verifica se um elemento está contido em uma array
function ContemElemento(array, elemento) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true;
        }
    }
    return false;
}; 

module.exports = ContemElemento;