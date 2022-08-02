describe('Shopify-Partners-log-in', () => {
    it('passes', () => {
      cy.visit('https://partners.shopify.com/')
      cy.get('.marketing-nav__hamburger > .icon').click()
      cy.get('#DrawerNavSecondaryAccordion > :nth-child(2) > .drawer__item').click()
      cy.get('input[type="email"]').type('yourmail@bolide.ai') //input mail
      cy.get('button[type="submit"]').click()
      cy.get('.next-field__connected-wrapper').type('yourpassword') //input password
      cy.get('button[type="submit"]').click()
    })
  })