// @ts-ignore
import chai, { expect, should } from 'chai';
import mocha from 'mocha';
import axios from 'axios';


// NOTES:
//
// ENDPOINT: http://localhost:8080/v1/health
//

describe("Health Check", () => {

    let response: any;

    before(async () => {
        response = await axios.get('http://localhost:8080/v1/health')
    });

    beforeEach(async () => {
        response = await axios.get('http://localhost:8080/v1/health')
    });

    it("should return a status 200", async () => {
        expect(response.status).to.equal(200);
    });

    it("should have the correct properties",async () => {
        expect (response.data).to.have.property("status")
        expect (response.data).to.have.property("pageOk")
        expect (response.data).to.have.property("db")
        expect (response.data).to.have.property("logging")
    });

    it("should have the correct values", async () => {
        expect(response.data.db).to.be.equal("UP")
    })
});