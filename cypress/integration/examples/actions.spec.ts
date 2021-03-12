/// <reference types="cypress" />

describe('Cypress test', (): void => {
  it('can access cypress', (): void => {
    cy.visit('https://www.cypress.io/');
  });
});
