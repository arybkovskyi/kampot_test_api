const {BASE_URL} = require('./constants');

const expect = require('chai').expect;
const supertest = require('supertest');
const faker = require('faker');

const request = supertest(BASE_URL);


describe('CREATE USER WITH EXISTING EMAIL. Status and message', (done) => {

    let existingUser = {
        "email": "guzel@aol.com",
        "password": "123123",
        "firstName": "Ella",
        "lastName": "N",
        "phone": "123456789"
    };

    it('should return error message', () => {

         request
            .post('/user')
            .send(existingUser)
            .then(response => {
                console.log(response)
                expect((response.body.message).equal('User with this e-mail exists'), done);
            })
    });


    it('should return 409 response', (done) => {

        request
            .post('/user')
            .send(existingUser)

            .expect(409, done)
    });

})