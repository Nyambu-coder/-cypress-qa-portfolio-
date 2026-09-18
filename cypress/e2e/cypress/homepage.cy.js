describe('Automation Exercise Homepage', () => {
  it('loads successfully and shows key navigation', () => {
    cy.visit('https://automationexercise.com')
    cy.screenshot('homepage-view')
    cy.get('a[href="/products"]').should('be.visible')
    cy.get('a[href="/login"]').should('be.visible')
   
  })

  it('navigates to the Products page', () => {
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/products"]').click()
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')
  })
})