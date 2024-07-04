const Soma = require('../functions/Soma');

test('Soma de 1 e 2 é 3', () => {
    expect(Soma(1, 2)).toBe(3);
});