const students = require("../fixtures/students.json");
Feature("Login");

Scenario("Deve logar com sucesso", async ({ I, login, account }) => {
  const dataTest = students.success_login;
  I.resetStudent(dataTest.student);
  const enrollment_code = await I.createEnroll(dataTest);
  login.submit(enrollment_code);
  account.userLoggedIn();
});

Scenario("Não deve logar com matricula incorreta", ({ I, login }) => {
  login.submit("XXXX");

  const message =
    "Acesso não autorizado! Entre em contato com a central de atendimento.";
  I.popHaveText(message);
});

Scenario("Não deve logar com o plano health", async ({ I, login }) => {
  const dataTest = students.not_login;
  I.resetStudent(dataTest.student);
  const enrollment_code = await I.createEnroll(dataTest);
  login.submit(enrollment_code);

  const message =
    "Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento.";
  I.popHaveText(message);
});
