import login from "../pages/Login"
import pages from "../pages/pages"

const loginObj = new login();

describe('Login Test', () => {

    beforeEach(function(){
        loginObj.visit()
        cy.fixture('credentials').then((credentials)=>{
            globalThis.Username = credentials[0].Username
            globalThis.Password = credentials[0].Password
            globalThis.WrongUser = credentials[1].WrongUser
            globalThis.WrongPass = credentials[1].WrongPass
        })
    })
        

    it('Login | succesful', () => {

        loginObj.getUsarname().type(Username)
        loginObj.getPassword().type(Password)
        loginObj.getLoginButton().click()

        cy.url().should('include', pages.enumPages.secureArea)
       
    })

    it('Login | incorrect username', () => {
        loginObj.getUsarname().type(WrongUser)
        loginObj.getPassword().type(Password)
        loginObj.getLoginButton().click()

        loginObj.getMessage().should('have.text', pages.errorMessage.invalidUser)
     
    })

    it('Login | incorrect password', () => {
        loginObj.getUsarname().type(Username)
        loginObj.getPassword().type(WrongPass)
        loginObj.getLoginButton().click()

        loginObj.getMessage().should('have.text', pages.errorMessage.invalidPass)
     
    })

    it('Login | incorrect username and password', () => {
        loginObj.getUsarname().type(WrongUser)
        loginObj.getPassword().type(WrongPass)
        loginObj.getLoginButton().click()

        loginObj.getMessage().should('have.text', pages.errorMessage.invalidUser)
     
    })

    it('Login | emprty fields', () => {
      
        loginObj.getLoginButton().click()
        loginObj.getMessage().should('have.text', pages.errorMessage.invalidUser)
     
    })

  })