const ContagemProgressiva = require('../functions/ContagemProgressiva');

test('Contagem progressiva de 1 a 5', () => {
    expect(ContagemProgressiva(1, 5)).toStrictEqual([ 1, 2, 3, 4, 5 ]);
});

