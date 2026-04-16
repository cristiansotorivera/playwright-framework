const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  outputDir: 'pw-results',
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.spec\.js/,
    },
    {
      name: 'auth-tests',
      testMatch: /tests\/auth\/.*\.spec\.js/,
      use: {
        storageState: undefined,
      },
    },
    {
      name: 'logged-in-tests',
      testIgnore: [/tests\/auth\/.*\.spec\.js/, /.*\.setup\.spec\.js/],
      dependencies: ['setup'],
      use: {
        storageState: 'playwright/.auth/user.json',
      },
    },
  ],
});