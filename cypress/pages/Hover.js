class hovers{

    visit(){
        return cy.visit('/hovers')
    }

    getImage(){
        return cy.get(':nth-child(3) > img')
    }

    getUserProfile(){
        //return cy.get("//a[@href='/users/1'][contains(.,'View profile')]")
        return cy.get(":nth-child(3) > div > a")
    }

    getText(){
        return cy.get(':nth-child(3) > div > h5')
    }
    
}
module.exports = hovers