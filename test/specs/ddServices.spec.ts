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
        testdata.serviceslnk1,
        testdata.serviceslnk2,
        testdata.serviceslnk3,
        testdata.serviceslnk4,
        testdata.serviceslnk5,
        testdata.serviceslnk6,
        testdata.serviceslnk7,
        testdata.serviceslnk8,
        testdata.serviceslnk9,
        testdata.serviceslnk10,
        testdata.serviceslnk11,
        testdata.serviceslnk12,
        testdata.serviceslnk13,
        testdata.serviceslnk14,
        testdata.serviceslnk15,
        testdata.serviceslnk16,
        testdata.serviceslnk17,
        testdata.serviceslnk18,
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
