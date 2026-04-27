import '../src/js/ui.js';

describe('Testes de Interface (DOM)', () => {
    
    // Monta o HTML invisível no terminal antes de cada teste
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="n1" value="10">
            <input type="number" id="n2" value="5">
            <div id="resultado">Aguardando operação...</div>
        `;
    });

    test('Deve exibir o texto correto ao executar a soma', () => {
        // Simula o clique na função de soma
        window.soma();

        // Pega a div onde o resultado aparece
        const resultado = document.getElementById('resultado');

        // Verifica se a interface atualizou o texto corretamente
        expect(resultado.innerText).toBe('A soma de 10 + 5 = 15');
    });

    test('Deve mostrar mensagem de erro ao tentar dividir por zero', () => {
        document.getElementById('n2').value = "0";
        window.divisao();

        const resultado = document.getElementById('resultado');
        expect(resultado.innerText).toBe('Erro: Não é possível dividir por zero!');
    });

    test('O botão de limpar deve zerar os inputs e o resultado', () => {
        window.limpar();

        expect(document.getElementById('n1').value).toBe('');
        expect(document.getElementById('n2').value).toBe('');
        expect(document.getElementById('resultado').innerText).toBe('Aguardando operação...');
    });
});