import chai, { expect } from "chai";

import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import AlertPage from "../pageobjects/alert.page";
import testdata from "../data/testData.json";

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
    await HomePage.clickOnServiceNavigation();

    await (await $$("//i[@class='ii-1odz88f']")[0]).click();
    const elem = await $("//a[text()='SIPP']");
    await elem.waitForDisplayed({ timeout: 3000 });
    await (await $("//a[text()='SIPP']")).click();
  });
});
