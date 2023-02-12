import chai, { expect } from "chai";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";

describe("should test Pensions dropdown", async () => {
  before(async function () {
    return browser.url(testdata.url);
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should click on the Pensions dropdown in the top nav bar,", async () => {
    await HomePage.clickOnPensionsNavigation(1);
    waitForTextToAppear(
      "//a[text()='Pension Trading Account']",
      "Pension Trading Account"
    );
  });

  it("should verify the links under Pensions dropdown", async () => {
    waitForTextToAppear(
      "a[href=const url = https://www.ii.co.uk/ii-accounts/sipp]",
      "SIPP (Self-Invested Personal Pension)"
    );

    waitForTextToAppear(
      "a[href=const url = https://www.ii.co.uk/ii-accounts/sipp/transfer-my-pension]",
      "Transfer my pension"
    );
  });

  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnPensionsTradingAccount();
    waitForTextToAppear("h1]", "Pension Trading Account");
    expect(
      "a[href=const url = https://www.ii.co.uk/ii-accounts/pension-trading-account]"
    );
  });
});
