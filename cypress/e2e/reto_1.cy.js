/// <reference types="cypress" />

Cypress. on('uncaught:exception', (err, runnable) => { return false; });// solucion TypeError

require('cypress-plugin-tab')

describe("Reto 1", () =>{
    
    it("Reto 1", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        
        //Buscando perosna en la tabla
        cy.get("#searchBox").should("be.visible").type("Alden")
        cy.get("#searchBox").should("be.visible").clear()

        //agregando a una persona en la tabla
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Nicolas").tab().
        type("Alberto").tab().
        type("nicocai18@gmai.com").tab().
        type("21").tab().
        type("80000").tab().
        type("Testing")
        cy.wait(1000)
        cy.get("#submit").should("be.visible").click()
        cy.wait(1000)

        //Editar un campo de la tabla
        cy.get("#edit-record-3").should("be.visible").click()
        cy.wait(1000)
        cy.get("#salary").should("be.visible").clear().type("120000")
        cy.wait(1000)
        cy.get("#department").should("be.visible").clear().type("Human")
        cy.wait(1000)
        cy.get("#submit").should("be.visible").click()
        cy.wait(1000)

        //Eliminar un campo de la tabla
        cy.get("#delete-record-1").should("be.visible").click()
        cy.wait(1000)

    })


})
