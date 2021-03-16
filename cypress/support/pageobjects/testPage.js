/// <reference types="Cypress"/>

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")


class  TestPage {
    ///acessar o site

    acessarSite(){
        cy.visit(url)
        cy.wait(2000)
    }

    BotãoMinhaConta(){
         cy.get(testelements.botãominhaconta()).click()
    }

    Botãoinscrever(){
        cy.get(testelements.botãoinscrever()).first().click()
    }

    FirstName(){
        cy.get(testelements.firstname()).type('Laércio')
    }

    LastName(){
        cy.get(testelements.lastname()).type('Gonçalves de Andrade')
    }

    telefone(){
        cy.get(testelements.telefone()).type('(11)1111-1111')
    }

    email(){
        cy.get(testelements.email()).type('testelaercio200@hotmail.com')
    }

    password(){
        cy.get(testelements.password()).type('123456')
    }

    confirmpassword(){
        cy.get(testelements.confirmpassword()).type('123456')
    }

    botãosignup(){
        cy.get(testelements.botãosignup()).click()
    }

    validarconta(){
        cy.get(testelements.validarconta()).contains('Hi, Laércio Gonçalves de Andrade')
        cy.screenshot()
    }
}
export default TestPage;