

describe('all-features', () => {
    it('passes', () => {
      cy.visit('matveev-autotest-store.myshopify.com') // enter to shop link
      cy.get('input[type="password"]').type('ololo123') // input shop password
      cy.get('button[type="submit"]').click() // enter to shop with password
//HOME PAGE     
      cy.wait(1500) //wait 1.5 sec
      cy.get('div[class="bolide-announcement-bar__text-block_flex"]').should('be.visible') // check visible of announcement bar on home page
      cy.get('div[class="bolide-timer-bar__text-block_flex"]').should('be.visible') // check visible of countdown timer bar on home page
      cy.get('div[class="bolide-subscribe-bar"]').should('be.visible') // check visible of subscribe bar on home page
      cy.get('span[id="shipping-bar__initial"]').should('be.visible') // check visible of shipping bar on home page
      cy.get('footer').scrollIntoView() // scroll page
      cy.get('div[class="bolide-scroll-button__image"]').should('be.visible') // check visible of scroll button on home page
      cy.get('div[id="sxyhlugvieyytsv"]').should('be.visible') //check visible upsell new products widget on home page
      cy.get('div[id="aujmagueiauayzz"]').should('be.visible') //check visible upsell featured products widget on home page
      cy.get('div[id="jaolsrycjrgfnbo"]').should('be.visible') //check visible upsell products by attribute widget on home page
      cy.get('svg[class="icon icon-cart-empty"]').click() // move to cart
//CART PAGE
      cy.wait(1500) //wait 1.5 sec
      cy.get('div[class="bolide-announcement-bar__text-block_flex"]').should('be.visible') // check visible of announcement bar on cart page
      cy.get('div[class="bolide-timer-bar__text-block_flex"]').should('be.visible') // check visible of countdown timer bar on cart page
      cy.get('div[class="bolide-subscribe-bar__text-block_flex"]').should('not.exist') // check unvisible of subscribe bar on cart page
      cy.get('span[id="shipping-bar__initial"]').should('not.exist') // check unvisible of shipping bar on cart page
      cy.get('footer').scrollIntoView() // scroll page
      cy.get('div[class="bolide-scroll-button__image"]').should('be.visible') // check visible of scroll button on home page
      cy.get('div[id="dhlewcdqcrtombo"]').should('be.visible') //check visible upsell recently viewed widget on home page
      cy.get('div[id="aujmagueiauayzz"]').should('be.visible') //check visible upsell featured products widget on home page
      cy.get('div[id="jaolsrycjrgfnbo"]').should('be.visible') //check visible upsell products by attribute widget on home page
//COLLECTION PAGE
      cy.visit('https://matveev-autotest-store.myshopify.com/collections/all') // move to collections page
      cy.wait(1500) //wait 1.5 sec
      cy.get('div[class="bolide-announcement-bar__text-block_flex"]').should('not.exist') // check unvisible of announcement bar on cart page
      cy.get('div[class="bolide-timer-bar__text-block_flex"]').should('not.exist') // check unvisible of countdown timer bar on cart page
      cy.get('div[class="bolide-subscribe-bar__text-block_flex"]').should('be.visible') // check visible of subscribe bar on cart page
      cy.get('span[id="shipping-bar__initial"]').should('be.visible') // check visible of shipping bar on cart page
      cy.get('footer').scrollIntoView() // scroll page
      cy.get('div[class="bolide-scroll-button__image"]').should('be.visible') // check visible of scroll button on home page
      cy.get('div[id="dhlewcdqcrtombo"]').should('be.visible') //check visible upsell recently viewed widget on home page
      cy.get('div[id="sxyhlugvieyytsv"]').should('be.visible') //check visible upsell new products widget on home page
      cy.get('div[id="rhqiuehtkuzyofj"]').should('be.visible') //check visible upsell most popular products widget on home page

//PRODUCT PAGE
      cy.visit('https://matveev-autotest-store.myshopify.com/products/test-item-10') // move to product page
      cy.wait(1500) //wait 1.5 se
      cy.get('div[class="bolide-announcement-bar__text-block_flex"]').should('not.exist') // check visible of announcement bar on cart page
      cy.get('div[class="bolide-timer-bar__text-block_flex"]').should('be.visible') // check visible of countdown timer bar on cart page
      cy.get('div[class="bolide-subscribe-bar"]').should('not.exist') // check unvisible of subscribe bar on cart page
      cy.get('span[id="shipping-bar__initial"]').should('be.visible') // check unvisible of shipping bar on cart page
      cy.get('footer').scrollIntoView() // scroll page
      cy.get('div[class="bolide-scroll-button__image"]').should('be.visible') // check visible of scroll button on home page
      cy.get('div[id="aujmagueiauayzz"]').should('be.visible') //check visible upsell featured products widget on home page
      cy.get('div[id="jaolsrycjrgfnbo"]').should('be.visible') //check visible upsell products by attribute widget on home page
      cy.get('div[id="rikhhqojudoubxi"]').should('be.visible') //check visible upsell also bought products widget on home page
      cy.get('div[id="aslqeymhiwpkkqz"]').should('be.visible') //check visible upsell similar products widget on home page
    })
  })