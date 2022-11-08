const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;


chai.use(chaiHttp);

// NOTES:
//
// ENDPOINT: http://localhost:8080/v1/health
//
// {
//     "status": "UP",
//     "pageOk": "true",
//     "db": "UP",
//     "logging": "UP"
// }
//

async function get(url) {
    return await chai.request(`http://localhost:8080/${url}`).get('/');
}

describe("Health Check", async () => {
    let response;
    let data;
    beforeEach(async()=> {
        response = await get('v1/health');
        data = response.body;
    });

    it("Endpoint Response OK", async () => {
                expect(response).to.have.status(200);
                expect(response).to.be.json;

    });

    it("Endpoint Status returns UP", async () => {
        //let response = await chai.request('http://localhost:8080/v1/health').get('/');
       // data = response.body;
        expect(data.status).to.equals("UP");
    });

    it("Endpoint pageOk returns 'true'", async () => {
        //let response = await chai.request('http://localhost:8080/v1/health').get('/');
        //data = response.body;
        expect(data.pageOk).to.equals("true");
    });

    it("Endpoint db returns UP", async () => {
        //let response = await chai.request('http://localhost:8080/v1/health').get('/');
        //data = response.body;
        expect(data.db).to.equals("UP");
    });

    it("Endpoint logging returns UP", async () => {
        //let response = await chai.request('http://localhost:8080/v1/health').get('/');
        //data = response.body;
        expect(data.logging).to.equals("UP");
    });

});

