import Login from "../Pages/LoginPage";

const loginPage = new Login();

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
      .and("have.text", "Epic sadface: Sorry, this user has been locked out.");
  });
});
