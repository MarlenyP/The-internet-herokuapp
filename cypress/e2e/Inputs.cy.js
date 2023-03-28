import inputs from "../pages/Inputs"

const input = new inputs();

describe('inputs', () =>{
    beforeEach(()=>{
        input.visit()
        cy.fixture('credentials').then((credentials)=>{
            globalThis.phoneNumber = credentials[2].phoneNumber
            globalThis.letters = credentials[2].letters
            globalThis.specialChar = credentials[2].specialChar
            
        })
    })

    it('Numeric Characters',()=>{
        input.getInput().type(phoneNumber)
        input.getInput().should('have.value', phoneNumber)

    })

    it('Letters',()=>{
        input.getInput().type(letters)
        input.getInput().should('be.empty')

    })
    it('Special Characters',()=>{
        input.getInput().type(specialChar)
        input.getInput().should('be.empty')

    })

})