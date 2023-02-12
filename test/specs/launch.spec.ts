import chai, { expect } from "chai";
import LoginPage from "../pageobjects/login.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import { waitForVisible } from "../helper/helpers";

describe("should test Interactive Investor application", async () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it("should handle the alert", async () => {
    waitForVisible(".chakra-modal__content-container ii-v9b9hc");
    await AlertPage.clickOnAlertButton();
  });

  it("should verify the current url and page", async () => {
    expect("a[href=https://www.ii.co.uk/]");
  });

  it("should get the correct page title", async () => {
    waitForVisible(".text-display");
    const title = await browser.getTitle();
    expect(title).to.equal(testdata.title);
  });
});
