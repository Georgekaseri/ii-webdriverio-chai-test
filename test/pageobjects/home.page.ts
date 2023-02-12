class HomePage {
  get serviceNavigation() {
    return $$("//i[@class='ii-1odz88f']")[0];
  }

  async clickOnServiceNavigation() {
    const el = $$("//i[@class='ii-1odz88f']")[0];
    let clickable = await el.isClickable();

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable());
    return await el.click();
  }
}
export default new HomePage();
