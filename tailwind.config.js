// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-lr': 'vertical-lr',
        'horizontal-tb': 'horizontal-tb',
      },
      fontFamily: {
        sacramento: ['"Sacramento"', 'cursive'], 
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // 세로쓰기
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        // 기본 가로쓰기
        '.writing-normal': {
          'writing-mode': 'horizontal-tb', 
        },
      }
      addUtilities(newUtilities)
    }
  ],
}