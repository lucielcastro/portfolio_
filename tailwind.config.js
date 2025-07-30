/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue inspired palette
        'primary-blue': '#3B82F6',
        'primary-dark': '#0F172A',
        'primary-cyan': '#06B6D4',
        'blue-light': '#60A5FA',
        'blue-dark': '#1E40AF',
        'blue-soft': '#DBEAFE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle at center, #3B82F6, transparent)',
        'radial-blue-soft': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3), transparent)',
        'radial-cyan': 'radial-gradient(circle at center, #06B6D4, transparent)',
        'radial-cyan-soft': 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3), transparent)',
      },
      boxShadow: {
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'card-glow': '0 8px 32px rgba(59, 130, 246, 0.15)',
      },
    },
  },
  plugins: [],
}

