const {BASE_URL} = require('./constants');

const expect = require('chai').expect;
const supertest = require('supertest');
const faker = require('faker');

const request = supertest(BASE_URL);


describe('CREATE NEW USER. Status and message', (done) => {

    let newUser = {
        "email": "guzeloz12345@mail.ru",
        "password": "123123",
        "firstName": "guzel",
        "lastName": "N",
        "phone": "123456789"
    };

    it('should return success message', () => {

        request
            .post('/user')
            .send(newUser)
            .set('Accept', 'application/json')
            .then(response => {
                console.log(response)
                expect((response.body.message).equal('User created successfully. Please check your email and verify it'), done);
            })
    });


    it('should return 201 response', (done) => {

        request
            .post('/user')
            .send(newUser)
            .set('Accept', 'application/json')
            .expect(201, done)
    });

})