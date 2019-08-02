context('Testing EA App', () => {
  before(() => {
    cy.visit('/');
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
      cy.login($user.username, $user.password);
    });

    cy.contains('Employee List').click();
    cy.get('.table').find('tr').click({multiple: true});
    //cy.get('.table').find('tr').as('rows');
    //cy.get('@rows').then(($rows) => {
    //  cy.wrap($rows).click({multiple: true});
    //});
  });
});
