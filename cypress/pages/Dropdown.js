class dropdown{

    visit(){
        return cy.visit('/dropdown')
    }

    getDreopdownOp(){
        return cy.get('#dropdown')
    }
    

}
module.exports = dropdown