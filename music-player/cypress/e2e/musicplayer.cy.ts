/* global cy */

describe('music player', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('verify player one', () => {
    cy.get('.c-dWgUmv-iMauuW-size-full').should(
      'contain.text',
      'Galeria do tempo',
    )
  })
})
