const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Define a URL base para que no teste você use apenas cy.visit('/')
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Garante que o robô não desista rápido se o site demorar a carregar
    defaultCommandTimeout: 10000, 
  },
});