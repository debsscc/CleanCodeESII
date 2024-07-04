const Subtracao = require('../functions/Subtracao');

test('Subtração de 5 e 3 é 2', () => {
    expect(Subtracao(5, 3)).toBe(2);
});