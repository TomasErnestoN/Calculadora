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
        expect(exponenciacao(2, 3)).toBe(8);  // 2 elevado a 3
        expect(exponenciacao(5, 2)).toBe(25); // 5 ao quadrado
    });    
    
    test('Fatorial', () => {
        expect(fatorial(5)).toBe(120);
        expect(fatorial(0)).toBe(1);
        // Se você implementou a versão que aceita negativos (ex: -3! = -6):
        expect(fatorial(-3)).toBe(-6); 
    });
    

    // 🔥 Testes de comportamento (quebrando função)
    test('Divisão por zero deve retornar Infinity', () => {
        expect(divisao(5, 0)).toBe(Infinity);
    });

    test('Radiciação', () => {
        expect(raiz(81)).toBe(9);      // Raiz quadrada (padrão)
        expect(raiz(8, 3)).toBe(2);    // Raiz cúbica de 8
        expect(raiz(-4)).toBeNaN();    // Raiz de número negativo continua sendo NaN
    });
    

});