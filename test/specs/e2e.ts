import chai, { expect } from "chai";
import LoginPage from "../pageobjects/login.page";

describe("Launch Interactive Investor application", () => {
  it("should launch Interactive Investor website", async () => {
    await LoginPage.open();
    await expect("a[href=https://www.ii.co.uk]");
  });
});
