
const { defineConfig } = require("cypress");
const preprocessor = ("@badeball/cypress-cucumber-preprocessor");
const browserify = ("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// // import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://pordi.infradigital.net/',
      specPattern:"**/*.feature",
      setupNodeEvents(on, config) {
        const cucumber = require('cypress-cucumber-preprocessor').default
        const browserify = require('@cypress/browserify-preprocessor');
        const options = {
          ...browserify.defaultOptions,
        
        };
        on('file:preprocessor', cucumber(options));
      },
      // async setupNodeEvents(
      //   on: Cypress.PluginEvents,
      //   config: Cypress.PluginConfigOptions
      // ): Promise<Cypress.PluginConfigOptions> {
      //   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      //   await addCucumberPreprocessorPlugin(on, config);
  
      //   on(
      //     "file:preprocessor",
      //     createBundler({
      //       plugins: [createEsbuildPlugin(config)],
      //     })
      //   );
  
      //   // Make sure to return the config object as it might have been modified by the plugin.
      //   return config;
      // }, 
  }
});
