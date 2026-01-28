class Checkout{
    
    inputFirstName(){
      return  cy.get('[data-test="firstName"]')
    }

    inputLastName(){
       return cy.get('[data-test="checkout"]')
    }

    inpuZipCode(){
        return cy.get('[data-test="postalCode"]')
    }

    buttonFinish(){
      return  cy.get('[data-test="postalCode"]')
    }
}

export default Checkout