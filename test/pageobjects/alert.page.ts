class AlertPage {
  get getAlertButton() {
    return $("//button[contains(text(),'Accept')]");
  }

  async clickOnAlertButton() {
    await this.getAlertButton.waitForDisplayed();
    await this.getAlertButton.click();
  }
}

export default new AlertPage();
