const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  outputDir: 'pw-results',
  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
  },
});