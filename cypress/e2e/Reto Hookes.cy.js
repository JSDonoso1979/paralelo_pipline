///<reference types="Cypress" />

require('cypress-xpath');
require("cypress-plugin-tab");

describe("Reto Hooks",()=>{
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title("eq","OrangeHRM")
        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get('#btnLogin').click()
    })

    after(()=>{
        cy.get('#welcome').click({force:true})
        cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click({force:true})
    })

    it("Seleccionar elemento 1",()=>{
        cy.get('#menu_admin_viewAdminModule > b').click({force:true})
        cy.get('#menu_admin_UserManagement').click({force:true})
        cy.get('#btnAdd').click({force:true})       
    })

    it("Seleccionar elemento 2",()=>{
        cy.get('#menu_admin_Job').click({force:true})  
    })   

})  