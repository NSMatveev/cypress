describe('SB', () => {
    it('passes', () => {
      cy.visit('matveev-autotest-store.myshopify.com') //shop link
      cy.get('input[type="password"]').type('ololo123') //shop password
      cy.get('button[type="submit"]').click()
      cy.get('footer').scrollIntoView()
      cy.get('div[class="bolide-scroll-button__image"]').should('be.visible')
    })
  })