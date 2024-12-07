class ToDpApi {

    static add(token) {
        return cy.request({
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
    }
}

export default ToDpApi