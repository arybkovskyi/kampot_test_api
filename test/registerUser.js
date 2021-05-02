const {BASE_URL} = require('./constants');

//const expect = require('chai');

let chai, expect;
chai = require('chai');
expect = chai.expect;
const supertest = require('supertest');
const faker = require('faker');

const request = supertest(BASE_URL);


  describe('CREATE WITH NEW EMAIL. Status and message', () => {

    let newResponse = {};

    before(async() => {

        let newUser = {
            "email": "guzel123@mail.com",
            "password": "123123",
            "firstName": "guzel",
            "lastName": "N",
            "phone": "123456789"
        };

        await request
            .post('/user')
            .send(newUser)
            .set('Accept', 'application/json')
            .then( response => {
               newResponse = response;
            });
     });


         it('should return success message',  () => {
             expect(newResponse.body.message).equal('User created successfully. Please check your email and verify it');
         });


         it('SHOULD RETURN 201 response', () => {
            expect(newResponse.status).equal(201);
         });
  })


  describe('CREATE WITH EXISTING EMAIL. Status and message', () => {
    let newResponse = {};

    before(async() => {

        let existingUser = {
            "email": "guzel@aol.com",
            "password": "123123",
            "firstName": "Ella",
            "lastName": "N",
            "phone": "123456789"
        };

        await request
            .post('/user')
            .send(existingUser)
            .set('Accept', 'application/json')
            .then(response => {
                newResponse = response;
            });
         });


        it('should return error message',  () => {
            expect(newResponse.body.message).equal('User with this e-mail exists');
        });


        it('SHOULD RETURN 409 response', () => {
        expect(newResponse.status).equal(409);
        });

  });

