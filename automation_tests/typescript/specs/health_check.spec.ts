// @ts-ignore
import chai, { expect } from 'chai';
// @ts-ignore
import mocha from 'mocha';
import axios from 'axios';


// NOTES:
//
// ENDPOINT: http://localhost:8080/v1/health
//

describe("Health Check", () => {
    it("adds two numbers", () => {
        expect(1+1).to.equal(2);
    });
});