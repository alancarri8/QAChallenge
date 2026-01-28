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

  beforeEach(() => {
    cy.fixture("usuarios").then((data) => {
      usuarios = data;
    });
    loginPage.navegarASauce();
  });

  it("Validar que el usuario se logue correctamente", () => {
    loginPage.inputUsername().type(usuarios.usuarioValido.username);
    loginPage.inputPassword().type(usuarios.usuarioValido.password);
    loginPage.buttonLogin().click();

    cy.url().should("include", "/inventory.html");
  });

  it("Validar que el usuario no se pueda loguear", () => {
    loginPage.inputUsername().type(usuarios.usuarioBloqueado.username);
    loginPage.inputPassword().type(usuarios.usuarioBloqueado.password);
    loginPage.buttonLogin().click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("have.text", "Epic sadface: Sorry, this user has been locked.");
  });

  it("Validar que el usuario pueda realizar una compra correctamente", () => {
    loginPage.inputUsername().type(usuarios.usuarioValido.username);
    loginPage.inputPassword().type(usuarios.usuarioValido.password);
    loginPage.buttonLogin().click();
    inventory.buttonAddToCart().click();
    inventory.iconCart().click();
    cartBuy.buttonContinue().click();
    checkout.inputFirstName().type(usuarios.dataConfirmation.firstName);
    checkout.inputLastName().type(usuarios.dataConfirmation.lastName);
    checkout.inpuZipCode().type(usuarios.dataConfirmation.zipCode);
    checkout.buttonContinue().click();
    checkout.buttonFinish().click();
    cy.get('[data-test="complete-header"]').should(
      "have.text",
      "Thank you for your order!",
    );
  });

  it("Validar que el usuario pueda eliminar un producto del carro de compras", () => {
    loginPage.inputUsername().type(usuarios.usuarioValido.username);
    loginPage.inputPassword().type(usuarios.usuarioValido.password);
    loginPage.buttonLogin().click();
    inventory.buttonAddToCart().click();
    inventory.iconCart().click();
    cartBuy.buttonRemove().click();
    cy.get('[data-test="inventory-item"]').should("not.exist");
  });
});
