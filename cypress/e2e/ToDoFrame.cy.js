import ToDpApi from "../API/ToDoAPI.cy"
import UserApi from "../API/userAPI.cy"
import LoginPage from "../Pages/LoginPage"
import ToDoPage from "../Pages/ToDoPage"

describe('ToDo TestCases',()=>{

    let token
    beforeEach(()=>{
        UserApi.register().then(response =>{
            token = response.body.access_token
          })
  })
it("should be able to add a todo", () => {
    new ToDoPage()
    .load()
    .ClickAddBTN()
    .addNewToDo('Cyprzz')
    .frstItemShouldHaveText('Cyprzz')
  })
  it("API to add a todo", () => {
    ToDpApi.add(token)
    new ToDoPage()
    .load()
    .marekFrstToDoCompleted()
    .frstTodoShouldhaveColor("rgb(33, 76, 97)")
      
    
  })
})
