// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username) => {
    cy.get('h1').contains('Welcome to CodeLeap network!').should('be.visible')
    cy.get('label').contains('Please enter your username').should('be.visible')
    cy.get('input').should('be.visible').type(username)
    cy.get('.sc-bczRLJ').contains('ENTER').should('be.visible').click()
})

Cypress.Commands.add('createPost', (title, content) => {
    cy.get('input').should('be.visible').type(title)
    cy.get('textarea').should('be.visible').type(content)
    cy.get('.sc-bczRLJ').should('be.visible').click()
})