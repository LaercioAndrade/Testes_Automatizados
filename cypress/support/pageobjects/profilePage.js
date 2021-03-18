/// <reference types="Cypress"/>

import profileElements from '../elements/profilelElements'
const profileelements = new profileElements
const url = Cypress.config("baseUrl")


class ProfilePage {

//acessarsite

acessarSite(){
    cy.visit(url)
    cy.wait(5000)
}

botãominhaconta(){
    cy.get(profileelements.botãominhaconta()).click()
}

botãologin(){
    cy.get(profileelements.botãologin()).click()
}

email(){
    cy.get(profileelements.email()).type("laercioteste50@hotmail.com")
}

senha(){
    cy.get(profileelements.senha()).type("123456")
}

login(){
    cy.get(profileelements.clicarlogin()).click()
}

perfil(){
    cy.get(profileelements.myprofile()).click()
}

address(){
    cy.get(profileelements.address()).type('Rua do Teste')
}

confirmaddress(){
    cy.get(profileelements.confirmaddress()).type('Rua do Teste')
}

city(){
    cy.get(profileelements.city()).type("Nova York City")
}

estado(){
    cy.get(profileelements.estado()).type("Nova York")
}

cep(){
    cy.get(profileelements.cep()).type("Madame Toussauds 234 West 42nd Street New York NY 10036")
}

}
export default ProfilePage;