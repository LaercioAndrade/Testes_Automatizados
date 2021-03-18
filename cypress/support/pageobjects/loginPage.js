/// <reference types="Cypress"/>

import loginElements from '../elements/loginElements'
const loginelements = new loginElements
const url = Cypress.config("baseUrl")

class LoginPage {

//Login   
//acessarSite
acessarSite(){
    cy.visit(url)
    cy.wait(2000)
}

botãominhaconta(){
    cy.get(loginelements.botãominhaconta()).click()
}
botãologin(){
    cy.get(loginelements.botãologin()).click()
}
email(){
    cy.get(loginelements.email()).type("testelaercio10@hotmail.com")
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
    cy.screenshot()
}

//logout
botãominhaconta(){
    cy.wait(2000)
    cy.get(loginelements.botãominhaconta()).click()
}
botãologout(){
    cy.get(loginelements.logout()).click()
}

validarlogout(){
    cy.get(loginelements.validarlogout()).contains('Login')
    cy.screenshot()
}

//resetar senha
botãoforgetpassword(){
    cy.get(loginelements.botãoforgetpassword()).click()
}

campoemailreset(){
    cy.get(loginelements.emailreset()).type("testelaercio20@hotmail.com")
}

botãoreset(){
    cy.get(loginelements.botãoreset()).click()
}

mensagemreset(){
    cy.get(loginelements.validarmensagemreset()).contains("New Password sent to testelaercio20@hotmail.com, Kindly check email")
    cy.screenshot()
}
}
export default LoginPage;