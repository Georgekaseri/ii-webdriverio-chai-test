class HomePage {
  get gettradingAccount() {
    return $$(".ii-1ai24k")[0];
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
    await this.gettradingAccount.click();
  }

  async getTexOfDropDownLinks(index) {
    await this.getDropDownLinks[index];
  }
}
export default new HomePage();
