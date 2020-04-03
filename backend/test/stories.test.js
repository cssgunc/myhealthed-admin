const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../server');

// Group of tests using describe 
describe('Stories', () => {
    describe('Get stories paginated', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).get('/api/stories/get').query({ page:'0'});
            expect(response.status).to.equal(200);
        });
    });

    describe('Get all stories', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).get('/api/stories/getAll');
            expect(response.status).to.equal(200);
        });
    });

    let createdId = 0;
    describe('Create new story', () => {
        it('expect success HTTP 200 status', async () => {
            let requestBody = {
                perspective: 'male',
                age: '15',
                topic: 'bullying',
                title: 'title',
                lede: 'lede',
                'story texts': 'text',
                'link url': 'google.com'
            };
            let response = await supertest(app).post('/api/stories/create').send(requestBody);
            expect(response.status).to.equal(200);
            createdId = response.body.id;
        });
    });

    describe('Get story by ID', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).get('/api/stories/get/id/' + createdId);
            expect(response.status).to.equal(200);
        });
    });
    
    describe('Get all stories with a specific link', () => {
        it('expect success HTTP 200 status', async () => {
            // TODO: specify link url in request body once Link table is populated
            let response = await supertest(app).get('/api/stories/get/link/').query({ url:encodeURIComponent('google.com') });
            expect(response.status).to.equal(200);
        });
    });

    describe('Delete story', () => {
        it('expect success HTTP 200 status', async () => {
            let response = await supertest(app).del('/api/stories/delete/' + createdId);
            expect(response.status).to.equal(204);
        });
    });
});