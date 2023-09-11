const { I } = inject();

module.exports = {
  submit(question) {
    I.click("Pedir ajuda");
    I.click("#btnHelperOrder");
    I.fillField("#textQuestion", question);
    I.click("#btnSubmit");
  },
};
