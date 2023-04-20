/// <reference types="cypress" />

describe('Teste para a home', () => {
    it('Deve remover por nome gian Souza', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[type="text"]').type('gian Souza{enter}')
    })

    it('Deve alterar por email gian.souza@ebac.com.br', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[type="email"]').type('gian@ebac.com.br{enter}')
    })

    it('Deve incluir tel 113424242', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[type="tel"]').type('11912345678{enter}')
    })
})
