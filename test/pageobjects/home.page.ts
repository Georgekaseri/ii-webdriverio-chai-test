class HomePage {
  get gettradingAccount() {
    return $$(".ii-1ai24k")[0];
  }

  async clickOnServiceNavigation() {
    const el = $$(".ii-1odz88f")[0];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }

  async clickOnTradingAccount() {
    await this.gettradingAccount.click();
  }
}
export default new HomePage();
