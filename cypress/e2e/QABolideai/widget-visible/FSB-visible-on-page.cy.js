describe('FSB', () => {
  it('passes', () => {
    cy.visit('matveev-autotest-store.myshopify.com') //shop link
    cy.get('input[type="password"]').type('ololo123') //shop password
    cy.get('button[type="submit"]').click()
    cy.get('span[id="shipping-bar__initial"]').should('be.visible')
  })
})