const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'brn8mb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
