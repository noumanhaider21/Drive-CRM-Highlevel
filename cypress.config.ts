import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 15000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true
  },
});
