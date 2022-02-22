module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    fontFamily: {
    'sans': ['acumin-pro-1', 'acumin-pro-2'],
    'display': ['ivypresto-display-1', 'ivypresto-display-2'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        change: 'black',
      },
    },
  },
  plugins: [ require("@tailwindcss/typography"), require("daisyui")],
}
