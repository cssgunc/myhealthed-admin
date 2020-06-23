const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../server');

// Group of tests using describe 
describe('Links', () => {
    describe('Get links paginated', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/links/get').expect(200, done)
        });
    });

    describe('Get all links', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/links/getAll').expect(200, done)
        });
    });

    let createdId = 0;
    describe('Create new link', () => {
        it('expect success HTTP 200 status', (done) => {
            let requestBody = {
                url: "google.com",
                topic: "bullying",
                subtopic: "1, 2, 3",
                title: "Google",
                siteName: "Google.com",
                timesUser: 0,
                notes: "notes"
            };
            supertest(app).post('/api/links/create').send(requestBody).expect(200, done)
        });
    });

    describe('Get link by ID', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/links/get/id/' + createdId).expect(200, done)
        });
    });

    describe('Get link by URL', () => {
        it('expect success HTTP 200 status', (done) => {
            // TODO: specify link url once Link table is populated
            supertest(app).get('/api/links/get/url/' + encodeURIComponent("google.com")).expect(200, done)
        });
    });

    describe('Delete link', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).delete('/api/links/delete/' + createdId).expect(204, done)
        });
    });
});