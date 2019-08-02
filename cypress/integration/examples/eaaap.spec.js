context('Testing EA App', () => {
  before(() => {
    cy.visit('http://eaapp.somee.com/');
    cy.fixture('eauser').as('user');
  });

  it('Login application', () => {
    cy.get('#loginLink').invoke('text').as('text_login');

    cy.get('#loginLink').click();

    cy.get('@text_login').then((text_login) => {
      expect(text_login).is.eql('Login');
    });

    cy.url().should('include', 'Account/Login');

    cy.get('@user').then(($user) => {
      cy.get('#UserName').type($user.username);
      cy.get('#Password').type($user.password);
      cy.get('.btn').click();
    });

    cy.contains('Employee List').click();
    cy.get('.table').find('tr').click({multiple: true});
    //cy.get('.table').find('tr').as('rows');
    //cy.get('@rows').then(($rows) => {
    //  cy.wrap($rows).click({multiple: true});
    //});
  });
});
