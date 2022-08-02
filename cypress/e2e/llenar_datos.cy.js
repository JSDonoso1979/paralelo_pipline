///<reference types="Cypress" />

require('cypress-xpath');
require("cypress-plugin-tab");

describe("Reto 2",()=>{

    it("Pruebas de Asserts", ()=>{
        cy.viewport(1500,900)
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq","Computers database")
        cy.wait(2000)

        //ADD
        cy.get('#add').click()
        cy.get('#name').type("IMAC Sebas").tab().type("2015-06-07").tab().
        type("2020-06-09")
        cy.wait(2000)
        cy.get('#company').select("Apple Inc.").should("have.value","1")
        cy.wait(2000)
        cy.get('.primary').click()

        //SERCHING
        
        cy.get('#searchbox').should("be.enabled").type("IMAC")
        cy.wait(2000)
        cy.get('#searchsubmit').should("be.visible").click()
        cy.wait(2000)
        cy.get(':nth-child(5) > :nth-child(1) > a').should("be.visible").click()
        cy.wait(2000)
        
        //ERASING



        
    })


  })  