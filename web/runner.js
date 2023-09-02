const cypress = require("cypress");
const tesults = require("cypress-tesults-reporter");

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNjN2U5MDBlLTA2NDktNDU1MC04NTc1LTZlN2E5OGU2ODE5Mi0xNjkzNTI0ODkzNDM3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTYwZGU0ZDMtYTI5MC00N2RiLTgyNmYtMDZkY2U4ZmFjZmJmIiwidHlwZSI6InQifQ.HRM_G5D3v5oKIpIHyGYdYvAkh6kTX4zz83aBLvdnYx8";

cypress
  .run({
    // specs to run here
  })
  .then((results) => {
    const args = {
      target: TOKEN,
    };
    tesults.results(results, args);
  })
  .catch((err) => {
    console.error(err);
  });
