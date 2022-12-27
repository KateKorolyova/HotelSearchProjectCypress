///<reference types = "Cypress"/>

describe('the sanity test suite for travel site', () => {


  it('verify elements of the hotel tabs', () => {
    cy.visit('http://localhost:3000')

    cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")

    cy.contains('check-in').should("be.visible")

    cy.contains('check-out').should("be.visible")

    cy.contains('travellers').should("be.visible")

    cy.get('[data-cy="flight_chk"]').should("be.visible")

    cy.get('[data-cy="cars_chk"]').should("be.visible")

    cy.get('[type="submit"]').should("be.visible")

  })

  it('verify text of tabs on the page', () => {
    cy.visit('http://localhost:3000')

    cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to")

    cy.contains('check-in').should("have.text", "check-in")

    cy.contains('check-out').should("have.text", "check-out")

    cy.contains('travellers').should("have.text", "travellers")

    cy.get('[data-cy="flight_chk"]').should("have.text", "")

    cy.get('[data-cy="cars_chk"]').should("have.text", "")

    cy.get('#tab1 > form > .btn-submit').should("have.text", "search")
  })

})