const ServicoExercicio = require('../../src/services/service');

describe('Testando função multiplicar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Multiplicar dois números positivos (2*2)', () => {
        const result = servicoExercicio.Multiplicar(2, 3);

        expect(result).toBe(6);
    });

    it('CT02 - Multiplicar uma letra e um número (a*2)', () => {
        const result = () => servicoExercicio.Multiplicar("a", 3);

        expect(result).toThrowError("Somente é possível realizar operações com números nos parâmetros");
    });

    it('CT03 - Multiplicar um número negativo e um positivo (-1*3)', () => {
        const result = servicoExercicio.Multiplicar(-1, 3);

        expect(result).toBe(-3);
    });

    it('CT04 - Multiplicar um valor null e um positivo (null*3)', () => {
        const result = () => servicoExercicio.Multiplicar(null, 3);

        expect(result).toThrowError("Você deve preencher todos os paramêtros");
    });
});