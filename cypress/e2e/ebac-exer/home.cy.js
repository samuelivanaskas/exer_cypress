describe('testes pagina', () => {
    beforeEach(() => {  -- //importante para cada teste ele bater nessa url primeiro
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('testando inclusao', () => {
        cy.get('[type="text"]').type('francisco berti da cruz');
        cy.get('[type="email"]').type('fbc9911@gmail.com');
        cy.get('[type="tel"]').type('55.9.8142.6277');
        cy.get('.adicionar').click();
        cy.get('.contato').should('have.length', 4);
    });

    it('testando remocao', () => {
        cy.get('.contato').first().within(() => {
        cy.get('.remover').click();
        });
        cy.get('.contato').should('have.length', 2);
    });

    it('testando alteracao', () => {
        cy.get('.contato').eq(1).within(() => {
        cy.get('.editar').click();
        cy.get('[type="text"]').clear().type('jose silva');
        cy.get('[type="email"]').clear().type('jose@gmail.com');
        cy.get('[type="tel"]').clear().type('55.9.9999.9999');
        cy.get('.salvar').click();
        });
        cy.get('.contato').eq(1).should('contain', 'jose silva');
        cy.get('.contato').eq(1).should('contain', 'jose@gmail.com');
        cy.get('.contato').eq(1).should('contain', '55.9.9999.9999');
    });   
});
