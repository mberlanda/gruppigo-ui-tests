context('When not recognized user', {}, () => {
    it('can access the homepage', {}, () => {
        cy.visit("/");
    });

    it('can login with email and password', {}, () => {
        cy.visit("/");

        // OB-1: None of the nav-bar option has a unique selector
        cy.get('.fa-user-circle').click();
        // OB-2: No menu option has a unique selector
        // OB-3: Content is not localized
        cy.contains('Accedi').click();
        
        // Ensure redirection to login page
        cy.url().should('include', '/#/login');

        // OB-4: no unique selector for form inputs
        cy.contains('Email').type('toloc68277@wanbeiz.com');
        cy.contains('Password').type('BarBarBar');
        cy.contains('Accetto i termini e le condizioni').click();

        cy.contains('Accedi').click();
    })
});