import chai, { assert, expect } from "chai";
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
    await HomePage.clickOnDropDown(1);
    waitForTextToAppear(
      "//a[text()='Pension Trading Account']",
      "Pension Trading Account"
    );
  });

  it("should verify all the links under Pensions dropdown", async () => {
    for (let i = 0; i < 12; i++) {
      let pensionsLinks = [
        testdata.pensionsLinks.lnk1,
        testdata.pensionsLinks.lnk2,
        testdata.pensionsLinks.lnk3,
        testdata.pensionsLinks.lnk4,
        testdata.pensionsLinks.lnk5,
        testdata.pensionsLinks.lnk6,
        testdata.pensionsLinks.lnk7,
        testdata.pensionsLinks.lnk8,
        testdata.pensionsLinks.lnk9,
        testdata.pensionsLinks.lnk10,
        testdata.pensionsLinks.lnk11,
        testdata.pensionsLinks.lnk12,
      ];
      assert.equal(await HomePage.verifyPensionsLinks(i), pensionsLinks[i]);
    }
  });

  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnPensionsTradingAccount(5);
    waitForTextToAppear("h1]", "Pension Trading Account");
    const url = await browser.getUrl();
    assert(url, testdata.verifyUrl.pensionTradingUrl);
  });
});
