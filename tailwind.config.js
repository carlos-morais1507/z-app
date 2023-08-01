/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': "url('/main-bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        zDark: {
          "primary": "#a855f7",          
          "secondary": "#60a5fa",          
          "accent": "#f9bbcb",          
          "neutral": "#292730",          
          "base-100": "#111827",          
          "info": "#91dff3",          
          "success": "#2ee072",          
          "warning": "#edcc3b",          
          "error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
