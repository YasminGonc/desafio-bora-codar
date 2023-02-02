/* global cy */

describe('music player', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('verify texts', () => {
    cy.contains('Galeria do tempo')
    cy.contains('AnaVitória e Jorge e Mateus')

    cy.contains('De Cada Vez')
    cy.contains('Sandy e Agnes Nunes')

    cy.contains('A Cura')
    cy.contains('Lulu Santos e Vitor Kley')
  })

  it('check default button status', () => {
    cy.get('.c-dWgUmv-iMauuW-size-full > .c-iOLLlP > :nth-child(1)').should(
      'be.disabled',
    )
    cy.get('.c-dWgUmv-iMauuW-size-full > .c-iOLLlP > :nth-child(2)').should(
      'be.disabled',
    )
    cy.get('.c-dWgUmv-iMauuW-size-full > .c-iOLLlP > :nth-child(3)').should(
      'be.enabled',
    )
    cy.get('.c-dWgUmv-iMauuW-size-full > .c-iOLLlP > :nth-child(4)').should(
      'be.disabled',
    )
  })

  // it('check player one', () => {
  //   cy.get('.c-dWgUmv-iMauuW-size-full > .c-iOLLlP > :nth-child(3)').click()
  // })
})
