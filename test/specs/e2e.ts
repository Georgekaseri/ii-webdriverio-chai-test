import chai, { expect } from "chai";

import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";
import homePage from "../pageobjects/home.page";

describe("should test Interactive Investor application", async () => {
  before(() => {
    LoginPage.open();
  });

  it("should handle the alert", async () => {
    await AlertPage.clickOnAlertButton();
  });
  it("should get the correct page titel", async () => {
    const title = await browser.getTitle();
    expect(title).to.equal(testdata.title);
  });

  it("should click on the “Services” dropdown in the top nav bar,", async () => {
    browser.pause(5000);
    await HomePage.clickOnServiceNavigation();

    const elem = await $("//a[text()='Trading Account']");
    await elem.waitForDisplayed({ timeout: 3000 });
    await (await $("//a[text()='Trading Account']")).click();
  });
});
