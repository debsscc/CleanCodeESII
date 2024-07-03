const Subtracao = require('./inicial.js');

test('Verifica se o elemento está presente no array', () => {
    const lista = [1, 2, 3, 4, 5];
    expect(ContemElemento(lista, 3)).toBe(true);
    expect(ContemElemento(lista, 6)).toBe(false);
});

test('Subtrai numeros', () => {
    expect(Subtracao(100, 50)).toBe(50);
});