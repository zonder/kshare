module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double", { "avoidEscape": true }],
    "space-before-function-paren": ["error", "never"],

  }
}