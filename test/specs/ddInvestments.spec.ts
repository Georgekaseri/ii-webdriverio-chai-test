import chai, { assert, expect } from "chai";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";

describe("should test Investments dropdown", async () => {
  before(async function () {
    return browser.url(testdata.url);
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should click on the Investments dropdown in the top nav bar,", async () => {
    await HomePage.clickOnDropDown(2);
    waitForTextToAppear(
      "//a[text()='Sustainable investing']",
      "Sustainable investing"
    );
  });

  it("should verify the all links under Investments dropdown", async () => {
    for (let i = 0; i < 21; i++) {
      let investmentsLinks = [
        testdata.investmentsLinks.lnk1,
        testdata.investmentsLinks.lnk2,
        testdata.investmentsLinks.lnk3,
        testdata.investmentsLinks.lnk4,
        testdata.investmentsLinks.lnk5,
        testdata.investmentsLinks.lnk6,
        testdata.investmentsLinks.lnk7,
        testdata.investmentsLinks.lnk8,
        testdata.investmentsLinks.lnk9,
        testdata.investmentsLinks.lnk10,
        testdata.investmentsLinks.lnk11,
        testdata.investmentsLinks.lnk12,
        testdata.investmentsLinks.lnk13,
        testdata.investmentsLinks.lnk14,
        testdata.investmentsLinks.lnk15,
        testdata.investmentsLinks.lnk16,
        testdata.investmentsLinks.lnk17,
        testdata.investmentsLinks.lnk18,
        testdata.investmentsLinks.lnk19,
        testdata.investmentsLinks.lnk20,
        testdata.investmentsLinks.lnk21,
      ];
      assert.equal(
        await HomePage.verifyInvestmentsLinks(i),
        investmentsLinks[i]
      );
    }
  });

  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnInternationShare(4);
    waitForTextToAppear("h1]", "International investing & share dealing");
    const url = await browser.getUrl();
    assert(url, testdata.verifyUrl.internationInvestingUrl);
  });
});
