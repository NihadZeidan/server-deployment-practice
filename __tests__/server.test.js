'use strict';

const server = require('../server.js');

const supertest = require('supertest');
const fakeServer = supertest(server.app);

describe('MOCKING THE SERVER', () => {
    it('handle home route', async() => {
        let results = await fakeServer.get('/');
        expect(results.status).toEqual(200);
        expect(results.text).toEqual('HELLO WORLD !!!')
    });

    it('handle error', async() => {
        let results = await fakeServer.get('/bad-request');
        expect(results.status).toEqual(500);

    });

    it('handle not Found 404', async() => {
        let results = await fakeServer.get("/fakeRoute");
        expect(results.status).toEqual(404);
    })
});