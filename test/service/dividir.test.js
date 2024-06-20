const ServicoExercicio = require('../../src/services/service');

describe('Testando função dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Dividir dois números positivos (2/2)', () => {
        const result = servicoExercicio.Dividir(10, 5);

        expect(result).toBe(2);
    });

    it('CT02 - Dividir uma letra e um número (a/2)', () => {
        const result = () => servicoExercicio.Dividir("a", 3);

        expect(result).toThrowError("Somente é possível realizar operações com números nos parâmetros");
    });

    it('CT03 - Dividir um número negativo e um positivo (-1/3)', () => {
        const result = servicoExercicio.Dividir(-10, 5);

        expect(result).toBe(-2);
    });

    it('CT04 - Dividir um número decimal e um positivo (1.5/2)', () => {
        const result = servicoExercicio.Dividir(1.5, 2);

        expect(result).toBe(0.75);
    });

    it('CT05 - Dividir 0 e um positivo (0/2)', () => {
        const result = servicoExercicio.Dividir(0, 2);

        expect(result).toBe(0);
    });

    it('CT06 - Dividir um valor null e um positivo (0/2)', () => {
        const result = () => servicoExercicio.Dividir(null, 2);

        expect(result).toThrowError("Você deve preencher todos os paramêtros");
    });
});