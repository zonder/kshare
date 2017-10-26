module.exports = {
  root: true,
  parser:  'babel-eslint',
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