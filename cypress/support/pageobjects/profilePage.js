/// <reference types="Cypress"/>

import profileElements from '../elements/profilelElements'
const profileelements = new profileElements
const url = Cypress.config("baseUrl")


class ProfilePage {

//acessarsite

acessarSite(){
    cy.visit(url)
    cy.wait(1000)
}

botãominhaconta(){
    cy.get(profileelements.botãominhaconta()).click()
}

botãologin(){
    cy.get(profileelements.botãologin()).click()
}

email(){
    cy.get(profileelements.email()).type("testelaercio10@hotmail.com")
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


}
export default ProfilePage;