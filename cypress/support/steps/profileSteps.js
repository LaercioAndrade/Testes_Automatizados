/*global Given, Then, When*/

import ProfilePage from '../pageobjects/profilePage'
const PageProfile = new  ProfilePage

//profile
Given("que eu realizo login no site PHPTravel", () => {
    PageProfile.acessarSite();
    PageProfile.botãominhaconta();
    PageProfile.botãologin();
    PageProfile.email();
    PageProfile.senha();
    PageProfile.login();
})

When("acesso o Meu Perfil", () =>  {
    PageProfile.perfil();
})

Then("valido se é possível completar oo cadastro", () => {
    PageProfile.address();
    PageProfile.confirmaddress();
    PageProfile.city();
    PageProfile.estado();
    PageProfile.cep();
})