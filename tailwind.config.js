/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        syne: ['Poppins', 'sans-serif'],
        mono: ['Poppins', 'monospace'],
      },
      colors: {
        accent: '#e8ff47',
        accent2: '#ff6b35',
        surface: '#111111',
        border: '#1e1e1e',
        muted: '#666666',
        subtle: '#222222',
      },
    },
  },
  plugins: [],
}
