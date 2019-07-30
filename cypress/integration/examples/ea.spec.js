/// <reference types="Cypress" />
context('Testing EA App', () => {
  it('Login application', () => {
    cy.visit('http://eaapp.somee.com/');
    cy.contains('Login').click();
    cy.url().should('include', 'Account/Login');
    cy.get('#UserName').type('Admin');
    cy.get('#Password').type('password');
    cy.get('.btn').click();
  });
});
