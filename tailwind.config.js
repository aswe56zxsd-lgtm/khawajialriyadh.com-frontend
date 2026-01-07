/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#D4A574",
        "secondary": "#2D1B0B",
        "accent": "#4A7C6E",
        "neutral-light": "#F5EFE7",
        "neutral-dark": "#3C3C3C",
        "background-light": "#ffffff",
        "background-dark": "#1e1914",
      },
      fontFamily: {
        "sans": ["Almarai", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
