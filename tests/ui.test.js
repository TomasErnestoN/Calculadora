import '../src/js/ui.js';

describe('Testes de Interface (DOM)', () => {
    
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="n1" value="10">
            <input type="number" id="n2" value="5">
            <div id="resultado">Aguardando operação...</div>
        `;
    });

    test('Deve exibir a soma corretamente', () => {
        window.soma();
        expect(document.getElementById('resultado').innerText).toBe('A soma de 10 + 5 = 15');
    });

    test('Deve exibir erro de divisão por zero', () => {
        document.getElementById('n2').value = "0";
        window.divisao();
        expect(document.getElementById('resultado').innerText).toBe('Erro: Não é possível dividir por zero!');
    });

    test('Deve exibir exponenciação corretamente', () => {
        document.getElementById('n1').value = "2";
        document.getElementById('n2').value = "3";
        window.exponenciacao();
        expect(document.getElementById('resultado').innerText).toBe('2 elevado a 3 = 8');
    });

    test('Deve exibir raiz quadrada quando n2 é vazio', () => {
        document.getElementById('n1').value = "81";
        document.getElementById('n2').value = "";
        window.raiz();
        expect(document.getElementById('resultado').innerText).toBe('A raiz quadrada de 81 = 9');
    });

    test('Deve exibir raiz com índice corretamente', () => {
        document.getElementById('n1').value = "8";
        document.getElementById('n2').value = "3";
        window.raiz();
        expect(document.getElementById('resultado').innerText).toBe('A raiz de índice 3 de 8 = 2');
    });

    test('Deve exibir fatorial corretamente', () => {
        document.getElementById('n1').value = "5";
        window.fatorial();
        expect(document.getElementById('resultado').innerText).toBe('O fatorial de 5! = 120');
    });

    test('Deve limpar os campos corretamente', () => {
        window.limpar();
        expect(document.getElementById('n1').value).toBe('');
        expect(document.getElementById('n2').value).toBe('');
        expect(document.getElementById('resultado').innerText).toBe('Aguardando operação...');
    });
});
