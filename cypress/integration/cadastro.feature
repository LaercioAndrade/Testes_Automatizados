Feature: Realizar cadastro no site PHPTravels

    Scenario: Realizar cadastro preenchendo todos os campos
        Given que eu acesso o site PHPTravels
        When  preencho todos os dados
        And   clico no botão Sign UP
        Then  valido se o cadastro é realizado com sucesso  

    Scenario: Validar e-mail já existente
        Given que eu acesso o site PHPTravels
        When  preencho todos os dados com um e-mail já cadastro
        And   clico no botão Sign UP
        Then  valido se aparece uma mensagem de E-mail já existente