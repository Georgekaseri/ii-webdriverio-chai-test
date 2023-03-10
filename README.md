# webdriverio

## What is this?

WebdriverIO is a test automation framework, for e2e as well as unit and component testing in the browser, that allows you to run tests based on the WebDriver, WebDriver BiDi as well as Chrome DevTools protocol and Appium automation technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack, TestingBot or LambdaTest.

## Why do we need this?

WebDriverIO, It is easier to set up a project, with flexible configuration in only one configuration file (wdio.conf).

### Install Node 16.x and npm

There are many ways to install Node, so it's not worth covering them all here. Google is your friend.

## Installation

npm init -- to create pacakge.json file
npm init wdio . -- select typescript/javascript , reporting allure, mocha, junit, select selenium-standalon to run the test.
npm install will install all of your selection

## Configuration

Following wdio.conf.ts code shows the default wdio test runner configuration.


the framework is created using page object model and test driven.

To run the test your local
**`git clone https://github.com/Georgekaseri/ii-webdriverio-chai-test.git`**

**`cd webdriverio-chai-test`**

**`npm install --force`**

**`npm audit fix --force`**

### Run tests:

**`npm run test`**

### Generate Allure report:

**`npm run generate:report`**

### Run test in firefox:

**`npm run test:firefox`**

### Run test in crossbrowser:

**`npm run test:crossbrowser`**

### Run test in Jenkins:
### Execute shell for Mac
### Execute command in Window

**`npm run test:jenkins`**


**IMPORTANT**

### Branching Strategy

This project uses a trunk-based strategy.

- `main` is protected and should never be directly pushed to
- All never features and fixes should be created in a branch off main
- Branches should be named in one of the following formats:
  - Ticket Number: Description (e.g. BRP-1234: Make betterer)
  - chore: Description
- When ready, a PR is raised
- PRs require at least one approval to merge to `main`
- Commits must follow the conventional commit pattern https://www.conventionalcommits.org/
- e.g. feat(TEST-1234): Make betterer

## Useful links

https://webdriver.io/

https://www.chaijs.com/

https://github.com/webdriverio/webdriverio


**`Allure Result Chrome ::`**

<img width="1467" alt="Screenshot 2023-02-13 at 13 58 33" src="https://user-images.githubusercontent.com/117205566/218575217-79842bd1-f91a-43c0-8a6c-30bb97c85c74.png">

**`Allure Result Firefox ::`**

<img width="835" alt="Screenshot 2023-02-13 at 21 20 25" src="https://user-images.githubusercontent.com/117205566/218577308-f25ccf17-2250-4aeb-a3ac-cace950d89d0.png">

<img width="1482" alt="Screenshot 2023-02-13 at 21 20 46" src="https://user-images.githubusercontent.com/117205566/218577371-41f4b96b-57cf-45ba-8b80-04e8da7a0f65.png">


**`Happy Testing :)`**


