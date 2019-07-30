/// <reference types="Cypress" />
context('Testing EA App', () => {
  it('Login application', () => {
    cy.visit('http://eaapp.somee.com/');
    cy.get('#loginLink').invoke('text').as('text_login');

    cy.get('#loginLink').click();

    cy.get('@text_login').then(($text_login) => {
      expect($text_login).is.eql('Login');
    });

    cy.url().should('include', 'Account/Login');
    cy.get('#UserName').type('Admin');
    cy.get('#Password').type('password');
    cy.get('.btn').click();

    cy.contains('Employee List').click();
    cy.get('.table').find('tr').contains('Anuja').parent().contains('Benefits').click();
  });
});
