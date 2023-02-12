import chai, { expect } from "chai";
import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";

describe("should test Interactive Investor application", async () => {
  before(() => {
    LoginPage.open();
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should verify the current url", async () => {
    expect("a[href=https://www.ii.co.uk/]");
  });

  it("should get the correct page title", async () => {
    waitForVisible(".text-display");
    const title = await browser.getTitle();
    expect(title).to.equal(testdata.title);
  });
});

describe("should test Service dropdown in the top nav bar", async () => {
  it("should click on the “Services” dropdown in the top nav bar,", async () => {
    await HomePage.clickOnServiceNavigation();
    waitForTextToAppear("//a[text()='Trading Account']", "Trading Account");
  });

  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnTradingAccount();
    waitForTextToAppear("h1]", "Trading Account");
    expect("a[href=https://www.ii.co.uk/ii-accounts/trading-account]");
  });
});
