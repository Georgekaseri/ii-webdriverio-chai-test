class HomePage {
  get serviceNavigation() {
    return $("//span[@title='Services']");
  }

  async clickOnServiceNavigation() {
    await this.serviceNavigation.click();
  }
}
export default new HomePage();
