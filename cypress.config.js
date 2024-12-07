const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {


    
    /// <reference types="cypress" />
    baseUrl: 'https://todo.qacart.com/',
    viewportHeight:900,
    viewportWidth:1440,
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
  
});
Cypress.config('defaultCommandTimeout', 100000)

Cypress.config('pageLoadTimeout', 100000)

Cypress.config('pageLoadTimeout') // => 100000
