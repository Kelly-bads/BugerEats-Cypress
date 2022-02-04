

describe('home page', ()=>{
    // => significa uma função em javascript
    it ('app deve estar online', ()=>{ // Valida se o aplicativo esta on-line atravez do texto.
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        
    })
})