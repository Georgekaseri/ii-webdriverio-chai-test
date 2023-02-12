import chai, { expect } from "chai";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";
import assert from "assert";

describe("should test Help & Learning", async () => {
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
        testdata.helpLearninglnk1,
        testdata.helpLearninglnk2,
        testdata.helpLearninglnk3,
        testdata.helpLearninglnk4,
        testdata.helpLearninglnk5,
        testdata.helpLearninglnk6,
        testdata.helpLearninglnk7,
        testdata.helpLearninglnk8,
        testdata.helpLearninglnk9,
        testdata.helpLearninglnk10,
        testdata.helpLearninglnk11,
        testdata.helpLearninglnk12,
        testdata.helpLearninglnk13,
        testdata.helpLearninglnk14,
        testdata.helpLearninglnk15,
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
