import { faker } from "@faker-js/faker";
describe('ToDo TestCases',()=>{

  let token

  beforeEach(()=>{
  cy.request ({
    url: "/api/v1/users/register",
    method: "POST",
    body: {
    firstName: faker.person.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    },
    }).then(response =>{
      token = response.body.access_token
    })
})
  it("should be able to add a todo", () => {
      cy.visit("/");
    
      // cy.get('[data-testid="email"]').type("abdelrhman88magdy+11@gmail.com");
      // cy.get('[data-testid="password"]').type("12345678");
      // cy.get('[data-testid="submit"]' ) .click();
     
      cy.get('[data-testid="add"]').click();
      cy.get('[data-testid="new-todo"]').type("Learn Cypress");
      cy.get('[data-testid="submit-newTask"]' ). click();
      cy.get('[data-testid="todo-item"]' )
      .eq(0)
      .should("have.text", "Learn Cypress");
    })
    
    it("should be able to mark a todo as completed", () => {
    
        cy.request ({
        url: "/api/v1/users/login",
        method: "POST",
        body: {
        email: "abdelrhman88magdy+11@gmail.com",
        password: "12345678",
        }
      }).then((response)=> {
        cy.request ({
        url: "/api/v1/tasks",
        method: "POST",
        auth: {
        bearer: response.body. access_token
        },
        body: {
        isCompleted: false,
        item: "Learn Cypress"
        }
        });
        
     
      cy.visit("/");
    
      // cy.get('[data-testid="add"]').click();
      // cy.get('[data-testid="new-todo" ]' ) . type("Learn Cypress");
      // cy.get('[data-testid="submit-newTask"]' ) . click( );

      cy.request ({
        url: "/api/v1/tasks",
        method: "POST",
        auth: {
        bearer: token
        },
        body: {
        isCompleted: false,
        item: "Learn From API Cypress"
        }
        })
        cy.visit('/')
      cy.get('[data-testid="complete-task"]').eq(0).click();
      cy.get('[data-testid="todo-item" ]' )
      .eq(0)
      .should("have.css", "background-color", "rgb(33, 76, 97)");
      })
    })
})