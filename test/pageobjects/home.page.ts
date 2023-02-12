class HomePage {
  get getTradingAccount() {
    return $$(".ii-1ai24k")[0];
  }

  get getPensionTradingAccount() {
    return $$(".ii-1ai24k")[5];
  }

  get getDropDownLinks() {
    return $$("//li[@class='ii-1ai24k']");
  }

  async clickOnServiceNavigation() {
    const el = $$(".ii-1odz88f")[0];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }

  async clickOnTradingAccount() {
    await this.getTradingAccount.click();
  }

  async clickOnPensionsTradingAccount() {
    await this.getPensionTradingAccount.click();
  }

  async clickOnPensionsNavigation(index: string | number) {
    const el = $$(".ii-1odz88f")[index];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }
}
export default new HomePage();
