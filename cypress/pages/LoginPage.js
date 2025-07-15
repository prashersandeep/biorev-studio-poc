// Page Object Model class to handle login page interactions
class LoginPage {

  // Open the login page using Cypress visit
  visit() {
    cy.visit('/login');
  }

  // Fill in the username input field
  fillUsername(username) {
    cy.get('#username').clear().type(username);
  }

  // Fill in the password input field
  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  // Click the Login button
  submit() {
    cy.get('button[type="submit"]').click();
  }

  // Get the success alert element for assertion
  getSuccessMessage() {
    return cy.get('.flash.success');
  }

  // Get the error alert element for assertion
  getErrorMessage() {
    return cy.get('.flash.error');
  }
}

// Export an instance of the LoginPage
module.exports = new LoginPage();
