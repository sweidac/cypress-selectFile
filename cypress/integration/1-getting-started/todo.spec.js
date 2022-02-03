/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('selectFile()', () => {

  it('can selectFile() off cy.document()', () => {
    cy.visit('https://example.cypress.io/todo')

    cy.document().selectFile({
      fileName : 'cypress/fixtures/example.json',
      action : 'drag-drop'
    });
  })

  it('can selectFile() off input[type=file]', () => {
    cy.visit('https://www.freeconvert.com/csv-converter');

    cy.get('input[type=file]')
      .selectFile('cypress/fixtures/example.json', { force : true })
  })

})
