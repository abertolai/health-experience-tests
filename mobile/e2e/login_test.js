Feature("Login");

Scenario("Deve logar com sucesso", ({ I, loginScreen }) => {
  loginScreen.submit("SXP27I");
  I.see("Minha conta");
});

Scenario("Não deve logar com matricula incorreta", ({ loginScreen }) => {
  loginScreen.submit("XXXX");

  const message =
    "Acesso não autorizado! Entre em contato com a central de atendimento.";
  loginScreen.messageHaveText(message);
});

Scenario("Não deve logar com o plano health", ({ loginScreen }) => {
  loginScreen.submit("FNVWJL");

  const message =
    "Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento.";
  loginScreen.messageHaveText(message);
});
