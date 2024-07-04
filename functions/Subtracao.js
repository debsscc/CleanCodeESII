// Função que subtrai dois números
function Subtracao(PrimeiroN, SegundoN) {
    if (PrimeiroN > SegundoN) {
        return PrimeiroN - SegundoN;
    } else {
        return SegundoN - PrimeiroN;
    }
}

module.exports = Subtracao;