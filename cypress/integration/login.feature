Feature: Realizar Login, Logout e alterar senha no Site PHP Travel

    Scenario: Realizar Login no site PHP Travel
        Given que eu acesso o site PHPT Travel
        When  acesso a tela de login
        And   preencho os dados validos
        Then  valido se é possível realizar login