class login{

    visit(){
        return cy.visit("/login")
    }

    getUsarname(){
        return cy.get('#username')
    }

    getPassword(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('.radius')
    }

    getMessage(){
        return cy.get('#flash')
    }
}
module.exports = login