import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://gruppi-go.it',
    supportFile: false,
    video: false
  },
});
