const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c9zj6j',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
