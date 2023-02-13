import chai, { assert, expect } from "chai";
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
    await HomePage.clickOnDropDown(0);
    waitForTextToAppear("//a[text()='Trading Account']", "Trading Account");
  });

  it("should verify all the links under Services dropdown", async () => {
    for (let i = 0; i < 18; i++) {
      let servicesLinks = [
        testdata.servicesLinks.lnk1,
        testdata.servicesLinks.lnk2,
        testdata.servicesLinks.lnk3,
        testdata.servicesLinks.lnk4,
        testdata.servicesLinks.lnk5,
        testdata.servicesLinks.lnk6,
        testdata.servicesLinks.lnk7,
        testdata.servicesLinks.lnk8,
        testdata.servicesLinks.lnk9,
        testdata.servicesLinks.lnk10,
        testdata.servicesLinks.lnk11,
        testdata.servicesLinks.lnk12,
        testdata.servicesLinks.lnk13,
        testdata.servicesLinks.lnk14,
        testdata.servicesLinks.lnk15,
        testdata.servicesLinks.lnk16,
        testdata.servicesLinks.lnk17,
        testdata.servicesLinks.lnk18,
      ];
      assert.equal(await HomePage.verifyServicesLinks(i), servicesLinks[i]);
    }
  });
  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnTradingAccount(1);
    waitForTextToAppear("h1]", "Trading Account");
    const url = await browser.getUrl();
    assert(url, testdata.verifyUrl.tradingAccountUrl);
  });
});
