const {BASE_URL} = require('./constants');

//const expect = require('chai');

let chai, expect;
chai = require('chai');
expect = chai.expect;
const supertest = require('supertest');
const faker = require('faker');

const request = supertest(BASE_URL);



