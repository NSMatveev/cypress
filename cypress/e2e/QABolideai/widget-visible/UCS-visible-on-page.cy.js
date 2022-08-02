describe('UCS', () => {
    it('passes', () => {
      cy.visit('matveev-autotest-store.myshopify.com') //shop link
      cy.get('input[type="password"]').type('ololo123') //shop password
      cy.get('button[type="submit"]').click()
      cy.get('div[class="bolide-recommendation"]').should('be.visible')
    })
  })