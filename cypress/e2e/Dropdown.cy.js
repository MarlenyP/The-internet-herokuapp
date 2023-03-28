import dropdown from "../pages/Dropdown"

const dd = new dropdown();

describe('Dropdown test',() =>{
    
    beforeEach(()=>{
        dd.visit()
    })

    it('Select 1st Option', ()=>{
     dd.getDreopdownOp().select('1')
     dd.getDreopdownOp().invoke('val').should('eq','1')

    })

    it('Select 2nd Option', ()=>{
        dd.getDreopdownOp().select('2')
        dd.getDreopdownOp().invoke('val').should('eq','2')
        

    })

})