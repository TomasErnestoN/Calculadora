const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Isso diz ao Cypress: "Sempre que eu der cy.visit('/'), vá para a porta 3000"
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});