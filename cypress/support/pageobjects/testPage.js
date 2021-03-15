/// <reference types="Cypress"/>

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")


class  TestPage {
    ///acessar o site

    acessarSite(){
        cy.visit(url)
        cy.wait(5000)
    }

}
export default TestPage;