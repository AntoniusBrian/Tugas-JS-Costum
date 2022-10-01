/// <reference types="cypress" />

describe('working with inputs' , () => {

    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
      });
    
      it('Should Fill Username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
      });
    
      it('should Fill Password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
      });

      it('Should try to login', () => {
        cy.fixture("user1").then(user => {
        const username = user.username
        const password = user.password
        cy.login(username, password)
      })
    });
    it('Should Try to Pay Bills', () => {
        cy.get('a').contains('Pay Bills').click()
        cy.get('.span1').type('500')
        cy.get('input[id="sp_date"]').type('2022-09-29')
        cy.get('input[id="sp_date"]').type('{enter}')
        cy.get('input[id="sp_description"]').type('Gaji Karyawan')
        cy.get('input[id="pay_saved_payees"]').click()


        
    });
});
    