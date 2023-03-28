class inputs{

    visit(){
        return cy.visit('/inputs')
    }
    
    getInput(){
        return cy.get('input')
    }
}
module.exports = inputs