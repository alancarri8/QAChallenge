 class CartBuy{
     buttonCheckout(){
      return  cy.get('[data-test="checkout"]')
    }
    
    buttonRemove(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }


 }

 export default CartBuy