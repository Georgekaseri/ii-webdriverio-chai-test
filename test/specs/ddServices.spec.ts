import chai, { expect } from "chai";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";

describe("should test Services", async () => {
  before(async function () {
    return browser.url(testdata.url);
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should click on the “Services” dropdown in the top nav bar,", async () => {
    await HomePage.clickOnServiceNavigation();
    waitForTextToAppear("//a[text()='Trading Account']", "Trading Account");
  });

  it("should verify the links under Services dropdown", async () => {
    waitForTextToAppear(
      "a[href=https://www.ii.co.uk/ii-accounts/isa]",
      "Stocks and Shares ISA"
    );

    waitForTextToAppear(
      "a[href=https://www.ii.co.uk/ii-accounts]",
      "See all accounts"
    );
  });

  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnTradingAccount();
    waitForTextToAppear("h1]", "Trading Account");
    expect("a[href=https://www.ii.co.uk/ii-accounts/trading-account]");
  });
});
