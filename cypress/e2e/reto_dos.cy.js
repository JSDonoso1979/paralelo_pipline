///<reference types="Cypress" />

require('cypress-xpath');

describe("Validacion Pagina de Inicio",()=>{

    it("Pruebas de Asserts", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('#txtUsername').type("Admin")   
        cy.get('#txtPassword').type("admin123")     
        cy.get('#btnLogin').click()

        cy.title().should("eq","OrangeHRM")
        cy.get('[href="http://www.orangehrm.com/"] > img').should("be.visible")
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.get('#btnAdd').should("be.enabled").click()
        cy.get('#systemUser_userType').select("1")
        cy.get('#systemUser_employeeName_empName').type("abcVirat")
        cy.get('#systemUser_userName').should("be.visible").type("jusedodi1979")
        cy.get('#systemUser_password').should("be.visible").type("Tana0816**")
        cy.get('#systemUser_confirmPassword').type("Tana0816**")
        cy.get('#btnSave').click()

        cy.get('[href="http://www.orangehrm.com/"] > img').click(10,10)
        cy.get('[href="http://www.orangehrm.com/"] > img').click(5,5)
                              
    })

    it("Selector por Atributo",()=>{

        cy.visit("https://demoqa.com/text-box")
        cy.get("[placeholder='Full Name']")// Los atributos de ponen entre corchetes y con comillas simples
    })
    
    it("Selector por Xpath",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/dashboard")
        cy.xpath("//*[@id='txtUsername']").should("be.visible").type("Admin")
    })

    
    
    it("Entrar a Gmail",()=>{

        cy.visit("https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser")
        cy.xpath("//input[contains(@type,'email')]").type("jsdonosodidonato@gmail.com")
        cy.xpath("//span[contains(text(),'Siguiente')]").click()
    })

    it.only("validar Text BOx",()=>{

        cy.visit("https://www.google.com.ec/")
        cy.xpath("//img[@alt='Google']").should("be.visible")
    })


  })  