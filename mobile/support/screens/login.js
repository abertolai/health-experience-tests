const { I } = inject();

module.exports = {
  locators: {
    ip: { android: "#ipAddress" },
    enrollment: { android: "#enrollment_code" },
  },
  // insert your locators and methods here
  submit(enrollmentCode) {
    I.seeAppIsInstalled("com.papitorocks.healthxp");

    I.waitForElement(this.locators.ip, 5);
    I.fillField(this.locators.ip, "192.168.200.106");

    I.waitForElement(this.locators.enrollment, 5);
    I.fillField(this.locators.enrollment, enrollmentCode);

    I.tap("Entrar");
  },
};
