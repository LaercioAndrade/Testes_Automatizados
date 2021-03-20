/// <reference types="Cypress"/>

import catalogoElements from '../elements/catalogoElements'
const catalogoelements = new catalogoElements
const url = Cypress.config("baseUrl")

class CatalogoPage{

//acessarsite    
acessarSite(){
    cy.visit(url)
    cy.wait(1000)
}   

//login
minhaconta(){
    cy.get(catalogoelements.botãominhaconta()).click()
}

botãologin(){
    cy.get(catalogoelements.botãologin()).click()
}

email(){
    cy.get(catalogoelements.email()).type("laercioteste51@hotmail.com")
}

senha(){
    cy.get(catalogoelements.senha()).type('123456')
}

login(){
    cy.get(catalogoelements.clicarlogin()).click()
}

//home
acessarhome(){
    cy.wait(2000)
    cy.get(catalogoelements.acessarhome()).click()    
}

destino(){ 
    cy.get(catalogoelements.destino()).click()
}

selecionardestino(){
    cy.get(catalogoelements.selecionardestino()).click()
}

botãoprocurar(){
    cy.get(catalogoelements.botãoprocurar()).click()
    cy.wait(2000)
}

selecionarhotel(){
    cy.get(catalogoelements.selecionarhotel()).click({force:true})
}

clicarnobotãowishlist(){
    cy.wait(4000)
    cy.get(catalogoelements.whishlist()).click()
    
}

acessarcontalogada(){
    cy.get(catalogoelements.conta()).click()
}

acessarwishlist(){
    cy.get(catalogoelements.acessarwishlist()).click()
    cy.wait(2000)
    cy.screenshot()
}
}

export default CatalogoPage;