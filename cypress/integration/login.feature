Feature: Realizar Login, Logout e alterar senha no Site PHP Travel

    Scenario: Realizar Login no site PHP Travel
        Given que eu acesso o site PHPT Travel
        When  acesso a tela de login
        And   preencho os dados validos
        Then  valido se é possível realizar login


    Scenario: Validar mensagem de dados incorretos
        Given que eu acesso o site PHPT Travel
        When  acesso a tela de login
        And   preencho os dados invalidos
        Then  valido se aparece uma mensagem de erro informando que não é possível realizar login

    Scenario: Realizar Logut
        Given que realizo login no site PHPT Travel
        When  acesso  a minha conta
        Then  valido se é possível realizar Logout

    Scenario: Alterar Senha
        Given que eu acesso o site PHPT Travel
        When  acesso a tela de login
        Then  valido se é possível alterar a senha