class Inventory {
  buttonAddToCart() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  iconCart() {
    return cy.get('[data-test="shopping-cart-link"]');
  }
}

export default Inventory;
