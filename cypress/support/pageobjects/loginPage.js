/// <reference types="Cypress"/>

import loginElements from '../elements/loginElements'
const loginelements = new loginElements
const url = Cypress.config("baseUrl")

class LoginPage {

//acessarSite

acessarSite(){
    cy.visit(url)
    cy.wait(1000)
}

botãominhaconta(){
    cy.get(loginelements.botãominhaconta()).click()
}
botãologin(){
    cy.get(loginelements.botãologin()).click()
}
email(){
    cy.get(loginelements.email()).type("testelaercio03@hotmail.com")
}
senha(){
    cy.get(loginelements.senha()).type('123456')
}
login(){
    cy.get(loginelements.clicarlogin()).click()
}
validarlogincomsucesso(){
    cy.get(loginelements.validarlogin()).contains('Hi, Laércio Gonçalves de Andrade')
}

}

export default LoginPage;