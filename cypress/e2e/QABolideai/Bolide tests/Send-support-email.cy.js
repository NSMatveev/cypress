describe('Bolide-Support-Send-Email', () => {
    it('passes', () => {
      cy.visit('https://matveev-autotest-store.myshopify.com/admin') //admin panel link
      cy.get('.marketing-nav__hamburger > .icon').click()
      cy.get('#DrawerNavSecondaryAccordion > :nth-child(2) > .drawer__item').click()
      cy.get('input[type="email"]').type('youremail@bolide.ai') //input email
      cy.get('button[type="submit"]').click()
      cy.get('.next-field__connected-wrapper').type('yourpassword') //input password
      cy.get('button[type="submit"]').click()
      cy.get('button[class="Polaris-Navigation__ItemWrapper_1kbav"]').click()
      cy.contains('Help').click()
      cy.get('textarea[id="PolarisTextField1"]').type('autotest-message')
    })
  })