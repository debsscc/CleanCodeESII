const SelecionaPares = require('../functions/SelecionaPares');

test('Seleciona pares de 1 a 5', () => {
    expect(SelecionaPares([1, 2, 3, 4, 5])).toStrictEqual([2, 4]);
});