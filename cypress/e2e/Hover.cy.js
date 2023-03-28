import hovers from "../pages/Hover"
import pages from "../pages/pages"

const hover = new hovers()

describe('Hover test', () =>{

    beforeEach(()=>{
        hover.visit()
    })

    it('View user info', ()=>{
        hover.getImage().realHover('mouse')
        hover.getText().should('be.visible')
       

    })

    it('View user profile', ()=>{

        hover.getImage().realHover('mouse')
        hover.getText().should('be.visible').then(()=>{
             hover.getUserProfile().click()
             cy.url().should('contains', pages.enumPages.userProfile)
         })
    })

})