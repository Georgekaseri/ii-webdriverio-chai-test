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
        testdata.investmentslnk1,
        testdata.investmentslnk2,
        testdata.investmentslnk3,
        testdata.investmentslnk4,
        testdata.investmentslnk5,
        testdata.investmentslnk6,
        testdata.investmentslnk7,
        testdata.investmentslnk8,
        testdata.investmentslnk9,
        testdata.investmentslnk10,
        testdata.investmentslnk11,
        testdata.investmentslnk12,
        testdata.investmentslnk13,
        testdata.investmentslnk14,
        testdata.investmentslnk15,
        testdata.investmentslnk16,
        testdata.investmentslnk17,
        testdata.investmentslnk18,
        testdata.investmentslnk19,
        testdata.investmentslnk20,
        testdata.investmentslnk21,
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
