describe('Automation Exercise Homepage', () => {
  it('loads successfully and shows key navigation', () => {
    cy.visit('https://automationexercise.com')
    cy.screenshot('homepage-loaded')
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    cy.get('a[href="/products"]').should('be.visible')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/cart"]').should('be.visible')
  })
})