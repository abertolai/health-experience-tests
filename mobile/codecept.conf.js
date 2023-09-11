const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./e2e/*_test.js",
  output: "./output",
  plugins: {
    tesults: {
      require: "codeceptjs-tesults",
      enabled: true,
      target:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNjN2U5MDBlLTA2NDktNDU1MC04NTc1LTZlN2E5OGU2ODE5Mi0xNjk0MzkwODE1NTA1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNGIwNGZkNzktNDczZC00OTZhLTlmYWItMTA0NmZiZGQxYjI0IiwidHlwZSI6InQifQ.8RZ72w1079HYFMV1RAbiR_6ec6s4jUdU5xkF1WcN5M0",
    },
  },
  helpers: {
    Appium: {
      app: "/Users/amandabertolai/Documents/QAx/projects/healthxp-dual/mobile/app/hxp-beta2.apk",
      platform: "Android",
      device: "emulator",
    },
    REST: {
      endpoint: "http://localhost:5959",
    },
    JSONResponse: {
      requestHelper: "REST",
    },
  },
  include: {
    I: "./support/steps_file.js",
    login: "./support/screens/login.js",
    account: "./support/screens/account.js",
    helpOrder: "./support/screens/help_orders.js",
  },
  name: "mobile",
};
