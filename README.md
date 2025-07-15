# Cypress Login Automation Test Suite

This project is a Cypress-based automated test suite for login functionality using the Page Object Model (POM). It tests the login page of the site:

https://the-internet.herokuapp.com/login

## Features

- Test for successful login with valid credentials
- Test for login failure with invalid username
- Test for login failure with invalid password
- Verification of error messages for failed login
- HTML reporting using Mochawesome

## Prerequisites

Before running the project, ensure the following tools are installed:

- Node.js (https://nodejs.org)
- Visual Studio Code (or any code editor)
- Install cypress (npx cypress install)

To verify installations(in your cmd):

node -v  
npm -v

## Folder Structure

cypress/
├── e2e/                  -> Test cases
│   └── login.spec.js
├── pages/                -> Page Object for login page
│   └── LoginPage.js
├── utils/                -> Test data and constants
│   └── credentials.js
├── support/              -> Custom Cypress commands and support files
│   ├── commands.js
│   └── e2e.js

cypress.config.js         -> Cypress configuration  
package.json              -> Project metadata and scripts  
README.md                 -> Project overview and instructions

## Setup and Run

1. Clone or extract the project and navigate to the folder:

cd directoryname

2. Install dependencies:

npm install

3. Run tests in headed mode (visible browser):

npx cypress run --headed --browser chrome

4. To open Cypress Test Runner UI:

npx cypress open

## HTML Report

To generate and view the test report:

npm run test

After execution, open the HTML report located at:

cypress/reports/mochawesome.html

## Why Cypress with POM

- Cypress is modern, developer-friendly, and has powerful built-in features like auto-waiting and time-travel debugging.
- The Page Object Model (POM) helps separate test logic from page structure, improving code readability and maintainability.
- HTML reporting (via Mochawesome) provides clear visibility into test results for developers and stakeholders.
