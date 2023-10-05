describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/remove/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('metal-cake remove', () => {
    cy.visit('/remove/METAL/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'METAL')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('cake-metal remove', () => {
    cy.visit('/remove/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/METAL')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'METAL')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if METAL is duplicated', () => {
    cy.visit('/remove/METAL/METAL')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'METAL')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'METAL')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })
})
