// Importamos as funções lá da pasta src/js/ (note o ../ para voltar uma pasta)
import { soma, subtracao, multiplicacao, divisao, exponenciacao, raiz, fatorial } from '../src/js/calculos.js';

describe('Testes Matemáticos', () => {

    // 🔹 Testes normais
    test('Soma', () => {
        expect(soma(2, 3)).toBe(5);
    });

    test('Subtração', () => {
        expect(subtracao(5, 3)).toBe(2);
    });

    test('Multiplicação', () => {
        expect(multiplicacao(2, 3)).toBe(6);
    });

    test('Divisão', () => {
        expect(divisao(6, 2)).toBe(3);
    });

    test('Exponenciação', () => {
        expect(exponenciacao(2)).toBe(4);
    });

    test('Fatorial', () => {
        expect(fatorial(5)).toBe(120);
    });

    // 🔥 Testes de comportamento (quebrando função)
    test('Divisão por zero deve retornar Infinity', () => {
        expect(divisao(5, 0)).toBe(Infinity);
    });

    test('Raiz negativa deve retornar NaN', () => {
        expect(raiz(-4)).toBeNaN();
    });

});