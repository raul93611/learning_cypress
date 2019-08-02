/// <reference types="Cypress" />
context('Testing EA App', () => {
  beforeEach(() => {
    cy.visit('http://www.executeautomation.com/site/');
  });


  it('testing EA app', () => {
    cy.get('[aria-label="jump to slide 2"]', {timeout: 60000}).should('have.class', 'ls-nav-active');
  });

  it('testing EA app', () => {
    cy.get('[aria-label="jump to slide 2"]', {timeout: 60000}).should('have.class', 'ls-nav-active');
  });


  // it('Login application', () => {
  //   cy.visit('http://eaapp.somee.com/');
  //   cy.get('#loginLink').invoke('text').as('text_login');
  //
  //   cy.get('#loginLink').click();
  //
  //   cy.get('@text_login').then(($text_login) => {
  //     expect($text_login).is.eql('Login');
  //   });
  //
  //   cy.url().should('include', 'Account/Login');
  //   cy.get('#UserName').type('Admin');
  //   cy.get('#Password').type('password');
  //   cy.get('.btn').click();
  //
  //   cy.contains('Employee List').click();
  //   cy.get('.table').find('tr').click({multiple: true});
  //   //cy.get('.table').find('tr').as('rows');
  //   //cy.get('@rows').then(($rows) => {
  //   //  cy.wrap($rows).click({multiple: true});
  //   //});
  // });
});
