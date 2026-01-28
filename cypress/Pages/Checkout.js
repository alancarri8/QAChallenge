class Checkout {
  inputFirstName() {
    return cy.get('[data-test="firstName"]');
  }

  inputLastName() {
    return cy.get('[data-test="lastName"]');
  }

  inpuZipCode() {
    return cy.get('[data-test="postalCode"]');
  }

  buttonContinue() {
    return cy.get('[data-test="continue"]');
  }

  buttonFinish() {
    return cy.get('[data-test="finish"]');
  }
}

export default Checkout;
