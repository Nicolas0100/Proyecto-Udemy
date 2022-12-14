/// <reference types="cypress" />

describe('Primer Test con Cypress', () =>{
    it("Esto es un hla mundo desde Cypress", () =>{
        cy.log("Este es mi primer test con Cypress")
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Nicolas")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Alberto")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("nico@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("457934902")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("Alsinas 500")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").click()
        cy.wait(3000)

        cy.wait(3000)
    })
})