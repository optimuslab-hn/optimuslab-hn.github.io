// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  darkMode: 'class', // ⚡ Controlaremos el modo oscuro con la clase 'dark'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem"
      }
    },
    extend: {
      fontFamily: {
        // Fuente principal: Poppins
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Colores claros
        primary: {
          DEFAULT: '#0f62fe',
          light: '#3b82f6',
          dark: '#0b4bd6'
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB'
        },
        success: '#16a34a',
        warning: '#f59e0b',
        danger: '#dc2626',

        // Colores oscuros (modo dark)
        dark: {
          primary: '#3b82f6',
          neutral: {
            50: '#1F2937',
            100: '#111827',
            200: '#374151'
          },
          success: '#22c55e',
          warning: '#fbbf24',
          danger: '#ef4444',
          background: '#111827',
          text: '#f9fafb'
        },
      }
    }
  },
  safelist: [
    // 'bg-primary', 'text-primary' si generas clases dinámicas
  ],
  plugins: [
    // require('@tailwindcss/typography'), // si necesitas tipografía avanzada
  ],
};
