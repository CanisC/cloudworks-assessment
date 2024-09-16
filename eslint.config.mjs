import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: {
      regexp: false,
      eslint: true,
      allowJS: true, // Allow JS files in porject
      checkJs: false,  // Set to `true` if you want TypeScript to also type-check JavaScript
      // prettier: true,
      
    }
  },
  rules: {
    'no-console': 'warn', // Warn when `console` is used
    'vue/no-unused-vars': 'error', // Error on unused variables in Vue templates
    'semi': ['error', 'always'], // Require semicolons at the end of statements
  },
  extends: [
    'eslint:recommended', // Use standard ESLint recommendations
    'plugin:vue/vue3-essential', // Enable linting for Vue.js 3
    // 'plugin:prettier/recommended', // Integrate Prettier 
  ],
})
