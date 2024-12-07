import { th } from "@faker-js/faker"
import ToDoPage from "./ToDoPage"

class LoginPage{
    // locators / elements

    get emailInput(){
        return cy.get('[data-testid="email"]' )
    }

    get passwordInput(){
        return cy.get('[data-testid="password"]' )
    }

    get submitBtn(){
        return cy.get('[data-testid="submit"]' )
    }

   
   

    //Method

    load(){
        cy.visit('/')
        return this
    }

    login(email,password){

        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
        return new ToDoPage()
    }
}

export default LoginPage