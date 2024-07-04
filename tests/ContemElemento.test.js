const ContemElemento = require('../functions/ContemElemento');

test('Elemento 3 está contido no array', () => {
    let lista = [1, 2, 3, 4, 5];
    expect(ContemElemento(lista, 3)).toBe(true);
    expect(ContemElemento(lista, 6)).toBe(false);
});