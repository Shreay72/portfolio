/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8', // Sky Blue for accents
        secondary: '#1E293B', // Slate 800 for cards/surfaces
        background: '#0F172A', // Slate 900 for main background
        textPrimary: '#F8FAFC', // Slate 50 for main text
        textSecondary: '#94A3B8', // Slate 400 for subtext
        accent: '#6366F1', // Indigo for gradients
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
