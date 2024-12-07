import ToDoPage from "./ToDoPage"

class NewToDoPage{

        get newToDoInput(){
           return cy.get('[data-testid="new-todo"]' )
        }
        get submitNewToDoBTN(){
            return cy.get('[data-testid="submit-newTask"]' )
        }
    
    addNewToDo(input){
        this.newToDoInput.type(input)
        this.submitNewToDoBTN.click()
        return new ToDoPage()
    }

}
export default NewToDoPage