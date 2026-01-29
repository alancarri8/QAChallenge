import Login from "../Pages/LoginPage";
import CartBuy from "../Pages/CartBuy";
import Checkout from "../Pages/Checkout";
import Inventory from "../Pages/InventoryPage";

const loginPage = new Login();
const cartBuy = new CartBuy();
const checkout = new Checkout();
const inventory = new Inventory();

describe("Pruebas sobre login", () => {
  let usuarios;

  beforeEach(function () {
    cy.fixture("usuarios").as("usuarios");
    loginPage.navegarASauce();
  });

  it("Validar que el usuario se logue correctamente", function () {
    loginPage.login(
      this.usuarios.usuarioValido.username,
      this.usuarios.usuarioValido.password,
    );

    cy.url().should("include", "/inventory.html");
  });

  it("Validar que el usuario no se pueda loguear", function () {
    loginPage.login(
      this.usuarios.usuarioBloqueado.username,
      this.usuarios.usuarioBloqueado.password,
    );
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("have.text", "Epic sadface: Sorry, this user has been locked.");
  });

  it("Validar que el usuario pueda realizar una compra correctamente", function () {
    loginPage.login(
      this.usuarios.usuarioValido.username,
      this.usuarios.usuarioValido.password,
    );
    inventory.buttonAddToCart().click();
    inventory.iconCart().click();
    cartBuy.buttonContinue().click();
    checkout.inputFirstName().type(this.usuarios.dataConfirmation.firstName);
    checkout.inputLastName().type(this.usuarios.dataConfirmation.lastName);
    checkout.inpuZipCode().type(this.usuarios.dataConfirmation.zipCode);
    checkout.buttonContinue().click();
    checkout.buttonFinish().click();
    cy.get('[data-test="complete-header"]').should(
      "have.text",
      "Thank you for your order!",
    );
  });

  it("Validar que el usuario pueda eliminar un producto del carro de compras", function () {
    loginPage.login(
      this.usuarios.usuarioValido.username,
      this.usuarios.usuarioValido.password,
    );
    inventory.buttonAddToCart().click();
    inventory.iconCart().click();
    cartBuy.buttonRemove().click();
    cy.get('[data-test="inventory-item"]').should("not.exist");
  });
});
