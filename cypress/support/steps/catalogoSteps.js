/*global Given, Then, When*/

import CatalogoPage from '../pageobjects/catalogoPage'
const PageCatalogo = new CatalogoPage


Given("que realizo login no site", () => {
    PageCatalogo.acessarSite();
    PageCatalogo.minhaconta();
    PageCatalogo.botãologin();
    PageCatalogo.email();
    PageCatalogo.senha();
    PageCatalogo.login();
})
 
And("acesso a home do site", () => {
    PageCatalogo.acessarhome();
})

When("acesso um catalogo de viagem", () => {
    PageCatalogo.destino();
    PageCatalogo.selecionardestino();
    PageCatalogo.botãoprocurar();
    PageCatalogo.selecionarhotel();
})

Then("valido se é possível adicionar na whishlist", () => {
    PageCatalogo.clicarnobotãowishlist();
    PageCatalogo.minhaconta();
    PageCatalogo.acessarcontalogada();
    PageCatalogo.acessarwishlist();
})