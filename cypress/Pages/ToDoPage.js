import NewToDoPage from "./NewToDoPage"

class ToDoPage{
    get welcomeText(){
        return cy.get('[data-testid="welcome"]' )
    }
    get addNewBTN(){
        return cy.get('[data-testid="add"]' )
    }
    get firstToDo(){
        return  cy.get('[data-testid="todo-item"]' )
          .eq(0)
    }
    get frstTodoCheck(){
        return cy.get('[data-testid="complete-task"]').eq(0)
    }
 



    load(){
        cy.visit('/todo')
        return this
    }
    welcomeTextisVisible(){
        this.welcomeText.should('be.visible')
        return this
    }
    ClickAddBTN(){
        this.addNewBTN.click()
        return new NewToDoPage()
    }
    frstItemShouldHaveText(item){
        this.firstToDo.should("have.text", item)
    }
    marekFrstToDoCompleted(){
        this.frstTodoCheck.check()
        return this
    }
    frstTodoShouldhaveColor(color){
        this.firstToDo.should("have.css","background-color",color)
        return this
    }
}

export default ToDoPage