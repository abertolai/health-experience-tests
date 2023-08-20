Feature("Login");

Scenario("Deve logar com sucesso", ({ I, loginScreen }) => {
  loginScreen.submit("FAAQ4D");
  I.see("Minha conta");
});

Scenario("Não deve logar com matricula incorreta", ({ loginScreen }) => {
  loginScreen.submit("XXXX");

  const message =
    "Acesso não autorizado! Entre em contato com a central de atendimento.";
  loginScreen.messageHaveText(message);
});
