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
        'horizontal-tb': 'horizontal-tb', // 기본값을 horizontal-tb로 추가
      },
      fontFamily: {
        sacramento: ['"Sacramento"', 'cursive'], // Sacramento 폰트 추가
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
          'writing-mode': 'horizontal-tb', // 기본값인 가로쓰기 모드
        },
      }
      addUtilities(newUtilities)
    }
  ],
}