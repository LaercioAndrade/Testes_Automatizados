/*global Given, Then, When*/

import LoginPage from '../pageobjects/loginPage'
const PageLogin = new LoginPage 


Given("que eu acesso o site PHPT Travel", () => {
    PageLogin.acessarSite();
}),

When("acesso a tela de login", () => {
    PageLogin.botãominhaconta();
    PageLogin.botãologin();
    
}),

And("preencho os dados validos", () => {
    PageLogin.email();
    PageLogin.senha();
    PageLogin.login();
}),

Then("valido se é possível realizar login", () => {
    PageLogin.validarlogincomsucesso();
})