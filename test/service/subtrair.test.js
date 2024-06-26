const ServicoExercicio = require('../../src/services/service');

describe('Testando função subtrair', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('CT01 - Subtrair dois números positivos (2-2)', () => {
        const result = servicoExercicio.Subtrair(2, 2);

        expect(result).toBe(0);
    });

    it('CT02 - Subtrair uma letra e um número (a-2)', () => {
        const result = () => servicoExercicio.Subtrair("a", 2);

        expect(result).toThrowError("Somente é possível realizar operações com números nos parâmetros");
    });

    it('CT03 - Subtrair um número negativo e um positivo (-1-3)', () => {
        const result = servicoExercicio.Subtrair(-1, 3);

        expect(result).toBe(-4);
    });

    it('CT04 - Subtrair um valor null e um positivo (null-3)', () => {
        const result = () => servicoExercicio.Subtrair(null, 3);

        expect(result).toThrowError("Você deve preencher todos os paramêtros");
    });
});