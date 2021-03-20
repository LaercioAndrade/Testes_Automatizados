Feature: Acessar os catalogos do site PHP Travel

    Scenario: Adicionar um catalogo de viagem na whitelist
        Given que realizo login no site
        And   acesso a home do site
        When  acesso um catalogo de viagem
        Then  valido se é possível adicionar na whishlist