import LoginPage from "../Pages/LoginPage";
import ToDoPage from "../Pages/ToDoPage";



it("Chaining be able to login", () => {
     
    new LoginPage()
    .load()
    .login('abdelrhman88magdy+11@gmail.com','12345678') // add env in cypress config file/// it's better to create Cypress.env.json file and add data to it
    .welcomeTextisVisible()
    });

it("should be able to login", () => {
    cy.visit("/");
    cy.get('[data-testid="email"]' ). type("abdelrhman88magdy+11@gmail.com")
    cy.get('[data-testid="password"]').type("12345678");
    cy.get('[data-testid="submit"]' ).click( );
    cy.get('[data-testid="welcome"]').should("be.visible");
    
    });


    it("FrameWork be able to login", () => {
     
        const loginPage = new LoginPage()
        const toDoPage = new ToDoPage()
        loginPage.load()
        loginPage.login('abdelrhman88magdy+11@gmail.com','12345678')
        toDoPage.welcomeTextisVisible()

    // cy.get('[data-testid="welcome"]').should("be.visible");

        });