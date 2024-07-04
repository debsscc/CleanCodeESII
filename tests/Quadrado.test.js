const Quadrado = require('../functions/Quadrado.js');

test('Quadrado de 5 é 25', () => {
    expect(Quadrado(5)).toBe(25);
});