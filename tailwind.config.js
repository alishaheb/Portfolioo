/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f8fafc",
        accent: "#10b981",
        "accent-secondary": "#8b5cf6",
        "card-bg": "rgba(255, 255, 255, 0.03)",
        "card-border": "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        'mesh-gradient': "radial-gradient(at 0% 0%, hsla(161, 84%, 39%, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(263, 89%, 66%, 0.1) 0px, transparent 50%)",
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
