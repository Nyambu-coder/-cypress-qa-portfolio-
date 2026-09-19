# Cypress QA Automation Portfolio

A hands-on QA automation practice project built with **Cypress and JavaScript**.

This repository documents my practical experience developing automated end-to-end tests for public web applications. The current tests focus on login flows, page verification, navigation, and basic assertions.

## What I'm Testing

### SauceDemo

**Spec:** `login.cy.js`

Current scenario:

* Verify successful login using valid credentials
* Verify the expected page is displayed after login

### Automation Exercise

**Spec:** `homepage.cy.js`

Current scenarios:

* Verify the homepage loads successfully
* Verify navigation to the Products page
* Verify expected page content

## Testing Skills Practiced

Through these tests, I am practicing:

* End-to-end UI testing
* Functional testing
* User-flow testing
* Navigation testing
* Assertions
* Test organization
* Working with Cypress commands
* Writing independent test scenarios

Cypress recommends that tests should be able to run independently rather than depending on the state created by another test. This is one of the practices I am applying as I continue developing this project.

## Tech Stack

* **Cypress**
* **JavaScript**
* **Node.js**
* **npm**
* **Git & GitHub**

## How to Run the Tests

### 1. Clone the repository

```bash
git clone https://github.com/Nyambu-coder/cypress-testing.git
cd cypress-testing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress

```bash
npx cypress open
```

Select the E2E test and choose the spec file you want to run.

### 4. Run tests from the command line

```bash
npx cypress run
```

## Project Structure

```text
cypress-testing/
├── cypress/
│   └── e2e/
│       ├── login.cy.js
│       └── homepage.cy.js
├── cypress.config.js
├── package.json
└── README.md
```

> Update this structure if your actual repository uses different folders or filenames.

## Current Learning Focus

I am currently using this project to strengthen my understanding of:

* Writing clear and maintainable Cypress tests
* Structuring tests around user flows
* Using reliable element selectors
* Writing meaningful assertions
* Keeping tests independent
* Expanding functional and negative test coverage

Cypress recommends resilient selectors, particularly dedicated `data-*` attributes where available, because selectors tied closely to CSS or implementation details can be more fragile.

## Project Status

**Active learning project**

I am continuing to expand the test coverage and improve the structure of the test suite as I develop my Cypress and QA automation skills.

## Planned Improvements

* Add negative login scenarios
* Add form validation scenarios
* Expand navigation coverage
* Add API testing practice
* Improve test data management
* Practice reusable Cypress commands
* Explore CI test execution
* Continue improving test reliability and organization

## About Me

I am a **Junior QA & Integration Developer** building practical skills in software testing, test automation, integrations, and workflow automation.

I use personal projects like this one to practice new tools, document my learning, and build hands-on experience with QA automation.
