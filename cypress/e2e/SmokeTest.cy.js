import dropdown from "../pages/Dropdown"
import hovers from "../pages/Hover"
import inputs from "../pages/Inputs"
import login from "../pages/Login"
import pages from "../pages/pages"

const loginObj = new login();
const input = new inputs();
const hover = new hovers();
const dd = new dropdown();

describe('Access to diferents sections',()=>{

    it('Access to dropdown section',()=>{
        dd.visit()
        cy.url().should('include', pages.enumPages.dropdown)

    })
    it('Access to hovers section',()=>{
        hover.visit()
        cy.url().should('include', pages.enumPages.hover)
    })
    it('Access to input section',()=>{
        input.visit()
        cy.url().should('include', pages.enumPages.input)
    })
    it('Access to login section',()=>{
        loginObj.visit()
        cy.url().should('include', pages.enumPages.login)
    })
    
})