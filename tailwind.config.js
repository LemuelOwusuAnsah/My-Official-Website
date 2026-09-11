/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#fafafa',
          dark: '#0a0a0a',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#141414',
          muted: '#f4f4f5',
          'muted-dark': '#1c1c1c',
        },
        line: {
          DEFAULT: '#e5e7eb',
          dark: '#262626',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          muted: '#525252',
          faint: '#a3a3a3',
          dark: '#fafafa',
          'muted-dark': '#a3a3a3',
          'faint-dark': '#525252',
        },
        lemon: {
          DEFAULT: '#65a30d',
          dark: '#a3e635',
        },
        orange: {
          DEFAULT: '#ea580c',
          dark: '#fb923c',
        },
        gold: {
          DEFAULT: '#a16207',
          dark: '#e0b84a',
        },
        violet: {
          DEFAULT: '#7c3aed',
          dark: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        script: ['"Alex Brush"', 'cursive'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        button: '12px',
        surface: '16px',
      },
      maxWidth: {
        content: '80rem',
        prose: '68ch',
        wide: '90rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
