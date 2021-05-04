const {BASE_URL} = require('./constants');

//const expect = require('chai');

let chai, expect;
chai = require('chai');
expect = chai.expect;
const supertest = require('supertest');
const faker = require('faker');

const request = supertest(BASE_URL);

  describe('LOGIN SUCCESS. Status and message', () => {

    let newResponse = {};

    before(async() => {

        let loginCred = {
            "email": "alex.rybkovsky@gmail.com",
            "password": "123123",
        };

        await request
            .post('/user/login')
            .send(loginCred)
            .set('Accept', 'application/json')
            .then( response => {
                newResponse = response;
            });
    });


    it('should return success message',  () => {
        expect(newResponse.body.message).equal('Auth success');
    });


    it('SHOULD RETURN 200 response', () => {
        expect(newResponse.status).equal(200);
    });
})


// describe('CREATE WITH EXISTING EMAIL. Status and message', () => {
//     let newResponse = {};
//
//     before(async() => {
//
//         let existingUser = {
//             "email": "guzel@aol.com",
//             "password": "123123",
//             "firstName": "Ella",
//             "lastName": "N",
//             "phone": "123456789"
//         };
//
//         await request
//             .post('/user')
//             .send(existingUser)
//             .set('Accept', 'application/json')
//             .then(response => {
//                 newResponse = response;
//             });
//     });
//
//
//     it('should return error message',  () => {
//         expect(newResponse.body.message).equal('User with this e-mail exists');
//     });
//
//
//     it('SHOULD RETURN 409 response', () => {
//         expect(newResponse.status).equal(409);
//     });
//
// });


