//As a customer if i search for "Stirling" at (https://sandbox-www.laybuy.com/nz/shop-here/) 
//I'd expect to see at least 2 shop directory tiles, 
//if I click on any of the tiles, 
//a new window should open with the merchant's correct website

/// <reference types="cypress" />

context('Visit Shop-here Page and Accept Cookies', () => {
  beforeEach(() => {
    cy.visit('https://sandbox-www.laybuy.com/nz/shop-here/')
  })

  it('Scroll to see Input and Enter keyword', () => {
        //Take port view for macbook - 15 as an example
        //cy.viewport('macbook-15')
        //Accept cookies
        cy.contains('Accept').click()

    cy.scrollTo('top')

    cy.wait(1000)

    cy.get('input').type('Heart of Oxford').submit()
    
  })

  it('Click on merchants website', () => {
      //click on result 
      cy.get('//*[@id="tile-img-border-928"]').click()
      cy.wait(2000)
  })

  it('Add Item to cart', () => { 
    cy.get('ProductCardImageWrapper-1612060379cd6dbbc4-214699966492').click()
    cy.wait(3000)

    cy.get('AddToCart-product-template').click()
    
  })

})  