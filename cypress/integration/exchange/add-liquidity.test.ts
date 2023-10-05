describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-select-tokenb #pair').should('contain.text', 'BUSD')
    cy.getBySel('choose-pair-next').click({ force: true })
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'BUSD')
  })

  it('loads the METAL and tokens', () => {
    cy.visit('/add/METAL/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'METAL')
    cy.get('#add-liquidity-select-tokenb #pair').should('contain.text', 'CAKE')
    cy.getBySel('choose-pair-next').click({ force: true })
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'METAL')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'CAKE')
  })

  it('loads the WMETAL and tokens', () => {
    cy.visit('/add/0x479E0638F61ab12c6D1a947CD667d522bC69910d/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'WMETAL')
    cy.get('#add-liquidity-select-tokenb #pair').should('contain.text', 'CAKE')
    cy.getBySel('choose-pair-next').click({ force: true })
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WMETAL')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'CAKE')
  })

  it('does not crash if METAL is duplicated', () => {
    cy.visit('/add/METAL/METAL')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'METAL')
    cy.get('#add-liquidity-select-tokenb #pair').should('not.contain.text', 'METAL')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-select-tokenb #pair').should('not.contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-select-tokenb #pair').should('contain.text', 'CAKE')
    cy.getBySel('choose-pair-next').click({ force: true })
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'CAKE')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'BUSD')
    cy.visit('/add/METAL')
    cy.get('#add-liquidity-select-tokena #pair').should('contain.text', 'METAL')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('redirects /add/METAL-token to /add/METAL/token', () => {
    cy.visit('/add/METAL-0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.url().should('contain', '/add/METAL/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
  })

  it('redirects /add/token-METAL to /add/token/METAL', () => {
    cy.visit('/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6-METAL')
    cy.url().should('contain', '/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/METAL')
  })

  it('redirects /add/WMETAL to /add/WMETAL/token', () => {
    cy.visit('/add/0x479E0638F61ab12c6D1a947CD667d522bC69910d-0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6')
    cy.url().should(
      'contain',
      '/add/0x479E0638F61ab12c6D1a947CD667d522bC69910d/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6',
    )
  })

  it('redirects /add/token-WMETAL to /add/token/WMETAL', () => {
    cy.visit('/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6-0x479E0638F61ab12c6D1a947CD667d522bC69910d')
    cy.url().should(
      'contain',
      '/add/0xbcBbaBd601B600E06a9f78008741Bf0Df10acfD6/0x479E0638F61ab12c6D1a947CD667d522bC69910d',
    )
  })
})
