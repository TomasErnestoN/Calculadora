describe('Robô testando a Calculadora Completa', () => {
  
  beforeEach(() => {
    // IMPORTANTE: Verifique se a porta do seu Live Server é a 5500
    cy.visit('http://127.0.0.1:5500/public/index.html'); 
  });

  // --- OPERAÇÕES BÁSICAS ---

  it('Deve testar a Soma', () => {
    cy.get('#n1').type('15');
    cy.get('#n2').type('5');
    cy.contains('button', 'Soma').click();
    cy.get('#resultado').should('include.text', 'A soma de 15 + 5 = 20');
  });

  it('Deve testar a Subtração', () => {
    cy.get('#n1').type('10');
    cy.get('#n2').type('4');
    cy.contains('button', 'Subtração').click(); 
    cy.get('#resultado').should('include.text', 'A subtração de 10 - 4 = 6'); 
  });

  it('Deve testar a Multiplicação', () => {
    cy.get('#n1').type('3');
    cy.get('#n2').type('4');
    cy.contains('button', 'Multiplicação').click();
    cy.get('#resultado').should('include.text', 'A multiplicação de 3 * 4 = 12'); 
  });

  it('Deve testar a Divisão', () => {
    cy.get('#n1').type('20');
    cy.get('#n2').type('2');
    cy.contains('button', 'Divisão').click();
    cy.get('#resultado').should('include.text', 'A divisão de 20 / 2 = 10');
  });

  it('Deve mostrar erro ao dividir por zero', () => {
    cy.get('#n1').type('10');
    cy.get('#n2').type('0');
    cy.contains('button', 'Divisão').click();
    cy.get('#resultado').should('include.text', 'Erro: Não é possível dividir por zero!');
  });

  // --- OPERAÇÕES AVANÇADAS (LÓGICA AMPLA) ---

  it('Deve testar a Exponenciação', () => {
    cy.get('#n1').type('2');
    cy.get('#n2').type('3');
    cy.contains('button', 'x').click(); // Ajustado para o texto do seu botão
    cy.get('#resultado').should('include.text', '2 elevado a 3 = 8');
  });

  it('Deve testar Fatorial Positivo (5! = 120)', () => {
    cy.get('#n1').type('5');
    cy.contains('button', 'x!').click(); 
    cy.get('#resultado').should('include.text', 'O fatorial de 5! = 120');
  });

  it('Deve testar Fatorial Negativo (-3! = -6)', () => {
    cy.get('#n1').type('-3');
    cy.contains('button', 'x!').click();
    cy.get('#resultado').should('include.text', 'O fatorial de -3! = -6');
  });

  it('Deve testar Raiz Quadrada (n2 vazio assume índice 2)', () => {
    cy.get('#n1').type('81');
    cy.get('#n2').clear(); 
    cy.contains('button', '√').click();
    cy.get('#resultado').should('include.text', 'A raiz quadrada de 81 = 9');
  });

  it('Deve testar Raiz com índice personalizado (Índice 3 de 8 = 2)', () => {
    cy.get('#n1').type('8');
    cy.get('#n2').type('3');
    cy.contains('button', '√').click();
    cy.get('#resultado').should('include.text', 'A raiz de índice 3 de 8 = 2');
  });

  // --- UTILITÁRIOS ---

  it('Deve limpar os campos corretamente', () => {
    cy.get('#n1').type('99');
    cy.get('#n2').type('99');
    cy.contains('button', 'Limpar').click();
    cy.get('#n1').should('have.value', '');
    cy.get('#n2').should('have.value', '');
    cy.get('#resultado').should('include.text', 'Aguardando operação...');
  });

});