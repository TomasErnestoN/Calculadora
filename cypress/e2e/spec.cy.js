describe('Robô testando a Calculadora', () => {

  // Recarrega a página antes de cada teste
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/public/index.html');
  });

  it('Deve testar a Soma', () => {
    cy.get('#n1').type('15');
    cy.get('#n2').type('5');
    cy.contains('button', 'Soma').click();
    cy.get('#resultado').should('have.text', 'A soma de 15 + 5 = 20');
  });

  it('Deve testar a Subtração', () => {
    cy.get('#n1').type('10');
    cy.get('#n2').type('4');
    cy.contains('button', 'Subtração').click(); 
    cy.get('#resultado').should('have.text', 'A subtração de 10 - 4 = 6'); 
  });

  it('Deve testar a Multiplicação', () => {
    cy.get('#n1').type('3');
    cy.get('#n2').type('4');
    cy.contains('button', 'Multiplicação').click();
    cy.get('#resultado').should('have.text', 'A multiplicação de 3 * 4 = 12'); 
  });

  it('Deve testar a Divisão', () => {
    cy.get('#n1').type('20');
    cy.get('#n2').type('2');
    cy.contains('button', 'Divisão').click();
    cy.get('#resultado').should('have.text', 'A divisão de 20 / 2 = 10');
  });

  it('Deve mostrar erro ao dividir por zero', () => {
    cy.get('#n1').type('10');
    cy.get('#n2').type('0');
    cy.contains('button', 'Divisão').click();
    cy.get('#resultado').should('have.text', 'Erro: Não é possível dividir por zero!');
  });

  it('Deve testar a Exponenciação (x²)', () => {
    // A sua exponenciação usa apenas o n1 (já que é ao quadrado)
    cy.get('#n1').type('3');
    cy.contains('button', 'x²').click();
    cy.get('#resultado').should('have.text', '3 ao quadrado = 9'); 
  });

  it('Deve testar a Raiz Quadrada', () => {
    // Adicionamos o teste da raiz que você criou!
    cy.get('#n1').type('16');
    cy.contains('button', 'Raiz').click();
    cy.get('#resultado').should('have.text', 'A raiz quadrada de 16 = 4'); 
  });

  it('Deve testar o Fatorial (x!)', () => {
    cy.get('#n1').type('5');
    cy.contains('button', 'x!').click();
    cy.get('#resultado').should('have.text', 'O fatorial de 5! = 120');
  });

  it('Deve testar o botão de Limpar Resultados', () => {
    cy.get('#n1').type('99');
    cy.get('#n2').type('99');
    // Ajustado para o nome real do botão
    cy.contains('button', 'Limpar Resultados').click();
    
    cy.get('#n1').should('have.value', '');
    cy.get('#n2').should('have.value', '');
    cy.get('#resultado').should('have.text', 'Aguardando operação...');
  });

});