/// <reference types="Cypress"/>

import loginElements from '../elements/loginElements'
const loginelements = new loginElements
const url = Cypress.config("baseUrl")

class LoginPage {

//Login   
//acessarSite
acessarSite(){
    cy.visit(url)
    cy.wait(5000)
}

botãominhaconta(){
    cy.get(loginelements.botãominhaconta()).click()
}
botãologin(){
    cy.get(loginelements.botãologin()).click()
}
email(){
    cy.get(loginelements.email()).type("laercioteste2021@hotmail.com")
}
senha(){
    cy.get(loginelements.senha()).type('123456')
}
login(){
    cy.get(loginelements.clicarlogin()).click()
}
validarlogincomsucesso(){
    cy.get(loginelements.validarlogin()).contains('Hi, Laércio Gonçalves de Andrade')
    cy.screenshot()
}

//login dados inválidos
senhaincorreta(){
    cy.get(loginelements.senha()).type('445678')
}

mensagemdeerrologin(){
    cy.get(loginelements.mensagemdeerrologin()).contains('Invalid Email or Password')
}


}

export default LoginPage;