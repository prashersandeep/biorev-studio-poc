// Importing the login page object
const loginPage = require('../pages/LoginPage');

// Importing test credentials from utility file
const credentials = require('../utils/credentials');

// Test suite for login functionality
describe('Login Tests', () => {

  // This block runs before each test to open the login page
  beforeEach(() => {
    loginPage.visit();
  });

  // Test: Valid login using correct credentials
  it('should login successfully with valid credentials', () => {
    loginPage.fillUsername(credentials.validUsername);
    loginPage.fillPassword(credentials.validPassword);
    loginPage.submit();
    loginPage.getSuccessMessage().should('contain', 'You logged into a secure area!');
  });

  // Test: Login should fail with an incorrect username
  it('should fail login with invalid username', () => {
    loginPage.fillUsername(credentials.invalidUsername);
    loginPage.fillPassword(credentials.validPassword);
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your username is invalid!');
  });

  // Test: Login should fail with an incorrect password
  it('should fail login with invalid password', () => {
    loginPage.fillUsername(credentials.validUsername);
    loginPage.fillPassword(credentials.invalidPassword);
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your password is invalid!');
  });

  // Test: Login should fail when both username and password are incorrect
  it('should display error message when both fields are wrong', () => {
    loginPage.fillUsername(credentials.invalidUsername);
    loginPage.fillPassword(credentials.invalidPassword);
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your username is invalid!');
  });
});
