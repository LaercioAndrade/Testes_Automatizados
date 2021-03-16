/*global Given, Then, When*/

import TestPage from '../pageobjects/testPage'
const PageTest = new TestPage

Given ("que eu acesso o site PHPTravels", () => {
    PageTest.acessarSite();
}),

When("preencho todos os dados", () => {
    PageTest.BotãoMinhaConta();
    PageTest.Botãoinscrever();
    PageTest.FirstName();
    PageTest.LastName();
    PageTest.telefone();
    PageTest.email();
    PageTest.password();
    PageTest.confirmpassword();
}),

And("clico no botão Sign UP", () => {
    PageTest.botãosignup()

}),
Then("valido se o cadastro é realizado com sucesso", () => {
    PageTest.validarconta()
})  
