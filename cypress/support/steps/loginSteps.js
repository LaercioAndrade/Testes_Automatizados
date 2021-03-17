/*global Given, Then, When*/

import LoginPage from '../pageobjects/loginPage'
const PageLogin = new LoginPage 

//login
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


//login incorretoo
And("preencho os dados invalidos", () =>{

})

Then("valido se aparece uma mensagem de erro informando que não é possível realizar login", {
    
})