/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  tabWidth: 4,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/styles/tailwind.css',
}
