const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../server');

// Group of tests using describe 
describe('Links', () => {
    describe('Get links paginated', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).get('/api/links/get');
            expect(response.status).to.equal(200);
        });
    });

    describe('Get all links', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).get('/api/links/getAll');
            expect(response.status).to.equal(200);
        });
    });

    let createdId = 0;
    describe('Create new link', () => {
        it('expect success HTTP 200 status', async () => {
            let requestBody = {
                url: "google.com",
                topic: "bullying",
                subtopic: "1, 2, 3",
                title: "Google",
                siteName: "Google.com",
                notes: "notes"
            };
            let response = await supertest(app).post('/api/links/create').send(requestBody);
            // console.log(response);
            expect(response.status).to.equal(200);
            createdId = response.body.id;
        });
    });

    describe('Get link by ID', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).get('/api/links/get/id/' + createdId);
            expect(response.status).to.equal(200);
        });
    });

    describe('Get link by URL', () => {
        it('expect success HTTP 200 status', async () => {
            // TODO: specify link url once Link table is populated
            let response = await supertest(app).get('/api/links/get/url/' + encodeURIComponent("google.com"));
            expect(response.status).to.equal(200);
        });
    });

    describe('Delete link', () => {
        it('expect success HTTP 200 status', async () => {
            // console.log(createdId);
            let response = await supertest(app).delete('/api/links/delete/' + createdId);
            // console.log(response);
            expect(response.status).to.equal(204);
        });
    });
});