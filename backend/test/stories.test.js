const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../server');

// Group of tests using describe 
describe('Stories', () => {
    describe('Get stories paginated', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/stories/get').query({ page:'0'}).expect(200, done);
        });
    });

    describe('Get all stories', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/stories/getAll').expect(200, done);
        });
    });

    let createdId = 0;
    describe('Create new story', () => {
        it('expect success HTTP 200 status', (done) => {
            let requestBody = {
                perspective: 'male',
                age: '15',
                topic: 'bullying',
                title: 'title',
                lede: 'lede',
                'story texts': 'text',
                'link url': 'google.com'
            };
            supertest(app).post('/api/stories/create').send(requestBody).expect(200).end((err, res) => {
                createdId = res.body.id;
                if(err) done(err);
                else done();
            });
        });
    });
    
    describe('Edit existing story', () => {
        it('expect success HTTP 200 status', async () => {
            let requestBody = {
                id: createdId,
                perspective: 'male',
                age: '15',
                topic: 'bullying',
                title: 'title',
                lede: 'lede',
                'story texts': 'text',
                'link url': 'google.com'
            };
            let response = await supertest(app).post('/api/stories/edit').send(requestBody);
            expect(response.status).to.equal(200);
        });
    });

    describe('Get story by ID', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).get('/api/stories/get/id/' + createdId).expect(200, done);
        });
    });
    
    describe('Get all stories with a specific link', () => {
        it('expect success HTTP 200 status', (done) => {
            // TODO: specify link url in request body once Link table is populated
            supertest(app).get('/api/stories/get/link/').query({ url:encodeURIComponent('google.com') }).expect(200, done);
        });
    });

    describe('Delete story', () => {
        it('expect success HTTP 200 status', (done) => {
            supertest(app).del('/api/stories/delete/' + createdId).expect(204, done);
        });
    });
});