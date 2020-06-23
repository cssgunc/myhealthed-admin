const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../server');

// Group of tests using describe 
describe('Links', () => {
    describe('Get links paginated', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/links/get').then((response) => {
                expect(response.status).to.equal(200);
            }).then(done, done);
        });
    });

    describe('Get all links', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/links/getAll').then((response) => {
                expect(response.status).to.equal(200);
            }).then(done, done);
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
            supertest(app).post('/api/links/create').send(requestBody).then((response) => {
                expect(response.status).to.equal(200);
                createdId = response.body.id;
            }).then(done, done);
        });
    });

    describe('Get link by ID', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/links/get/id/' + createdId).then((response) => {
                expect(response.status).to.equal(200);
            }).then(done, done);
        });
    });

    describe('Get link by URL', () => {
        it('expect success HTTP 200 status', (done) => {
            // TODO: specify link url once Link table is populated
            supertest(app).get('/api/links/get/url/' + encodeURIComponent("google.com")).then((response) => {
                expect(response.status).to.equal(200);
            }).then(done, done);
        });
    });

    describe('Delete link', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).delete('/api/links/delete/' + createdId).then((response) => {
                expect(response.status).to.equal(204);
            }).then(done, done);
        });
    });
});