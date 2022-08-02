describe('all-features', () => {
    it('passes', () => {
      cy.visit('matveev-autotest-store.myshopify.com') // shop link
      cy.get('input[type="password"]').type('ololo123') //shop password
      cy.get('button[type="submit"]').click()
      cy.get('div[class="bolide-announcement-bar__text-block_flex"]').should('be.visible')
      cy.get('div[class="bolide-timer-bar__text-block_flex"]').should('be.visible')
      cy.get('div[class="bolide-subscribe-bar"]').should('be.visible')
      cy.get('span[id="shipping-bar__initial"]').should('be.visible')
      cy.get('footer').scrollIntoView()
      cy.get('div[class="bolide-scroll-button__image"]').should('be.visible')
      cy.get('div[class="bolide-recommendation"]').should('be.visible')
    })
  })