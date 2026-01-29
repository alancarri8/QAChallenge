class Login {
  navegarASauce() {
    cy.visit("https://www.saucedemo.com/");
  }

  inputUsername() {
    return cy.get('[data-test="username"]');
  }

  inputPassword() {
    return cy.get('[data-test="password"]');
  }

  buttonLogin() {
    return cy.get('[data-test="login-button"]');
  }

  login(username, password) {
    this.inputUsername().type(username);
    this.inputPassword().type(password);
    this.buttonLogin().click();
  }
}

export default Login;
