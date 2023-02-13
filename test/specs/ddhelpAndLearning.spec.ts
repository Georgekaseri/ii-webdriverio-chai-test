import chai, { expect } from "chai";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";
import assert from "assert";

describe("should test Help & Learning dropdown", async () => {
  before(async function () {
    return browser.url(testdata.url);
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should click on the “Help & Learning” dropdown in the top nav bar,", async () => {
    await HomePage.clickOnDropDown(3);
    waitForTextToAppear("//a[text()='Trading Account']", "Trading Account");
  });

  it("should verify all the links under Help & Learning dropdown", async () => {
    for (let i = 0; i < 15; i++) {
      let helpLearningLinks = [
        testdata.helpLearningLinks.lnk1,
        testdata.helpLearningLinks.lnk2,
        testdata.helpLearningLinks.lnk3,
        testdata.helpLearningLinks.lnk4,
        testdata.helpLearningLinks.lnk5,
        testdata.helpLearningLinks.lnk6,
        testdata.helpLearningLinks.lnk7,
        testdata.helpLearningLinks.lnk8,
        testdata.helpLearningLinks.lnk9,
        testdata.helpLearningLinks.lnk10,
        testdata.helpLearningLinks.lnk11,
        testdata.helpLearningLinks.lnk12,
        testdata.helpLearningLinks.lnk13,
        testdata.helpLearningLinks.lnk14,
        testdata.helpLearningLinks.lnk15,
      ];
      assert.equal(
        await HomePage.verifyhelpLearningLinks(i),
        helpLearningLinks[i]
      );
    }
  });
  it("should verify that user landed on the expected URL", async () => {
    await HomePage.clickOnSustainableInvesting(4);
    waitForTextToAppear("h1]", "Sustainable investing");
    const url = await browser.getUrl();
    assert(url, testdata.verifyUrl.ethicalLearningUrl);
  });
});
