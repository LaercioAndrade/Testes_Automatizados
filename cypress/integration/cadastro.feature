Feature: Realizar cadastro no site PHPTravels

    Scenario: Realizar cadastro preenchendo todos os campos
        Given que eu acesso o site PHPTravels
        When  preencho todos os dados
        And   clico no botão Sign UP
        Then  valido se o cadastro é realizado com sucesso  
