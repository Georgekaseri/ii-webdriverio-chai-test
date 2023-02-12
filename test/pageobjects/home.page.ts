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

  async clickOnTradingAccount() {
    await this.getTradingAccount.click();
  }

  async clickOnPensionsTradingAccount() {
    await this.getPensionTradingAccount.click();
  }

  async clickOnDropDown(index: string | number) {
    const el = $$(".ii-1odz88f")[index];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }

  async verifyServicesLinks(index: string | number) {
    const ele = $$(".ii-1ai24k")[index];
    let clickable = await ele.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => ele.isClickable());
    return await ele.getText();
  }
  async verifyPensionsLinks(index: string | number) {
    const ele = $$("//*[@class='ii-futew4']//li[@class='ii-1ai24k']")[index];
    let clickable = await ele.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => ele.isClickable());
    return await ele.getText();
  }

  async verifyInvestmentsLinks(index: string | number) {
    const ele = $$("//*[@class='ii-futew4']//li[@class='ii-1ai24k']")[index];
    let clickable = await ele.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => ele.isClickable());
    return await ele.getText();
  }

  async clickOnInternationShare(index: string | number) {
    const ele = $$("//*[@class='ii-futew4']//li[@class='ii-1ai24k']")[index];
    let clickable = await ele.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => ele.isClickable());
    return await ele.click();
  }
}
export default new HomePage();
