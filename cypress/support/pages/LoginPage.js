import popup from "./components/Popup";

class LoginPage {
  constructor() {
    this.popup = popup;
  }
  go() {
    cy.visit("http://localhost:3000");
  }

  fill(user) {
    cy.get("#email").clear({ force: true }).as("email");
    cy.get("#password").clear({ force: true }).as("password");

    user.email ? cy.get("@email").type(user.email) : cy.log("empty email");
    user.password
      ? cy.get("@password").type(user.password)
      : cy.log("empty password");
  }

  submit() {
    cy.contains("button", "Entrar").click();
  }

  doLogin(user) {
    this.go();
    this.fill(user);
    this.submit();
  }
}

export default new LoginPage();
