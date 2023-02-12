import chai, { expect } from "chai";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForTextToAppear, waitForVisible } from "../helper/helpers";
import assert from "assert";

describe("should test News Dropdown", async () => {
  before(async function () {
    return browser.url(testdata.url);
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should click on the News dropdown in the top nav bar,", async () => {
    await HomePage.clickOnNewsDropDown();
    waitForTextToAppear("//title", "Latest Stock Market News & Analysis");
    const url = await browser.getUrl();
    assert(url, testdata.verifyUrl.newsUrl);
  });
});
