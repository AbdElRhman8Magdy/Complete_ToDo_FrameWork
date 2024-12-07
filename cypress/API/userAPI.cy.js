import { faker } from "@faker-js/faker";

class UserApi{
    static register(){
    
        return cy.request ({
        url: "/api/v1/users/register",
        method: "POST",
        _body: {
            firstName: faker.person.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        get body() {
            return this._body;
        },
        set body(value) {
            this._body = value;
        },
        })
}
}

export default UserApi;