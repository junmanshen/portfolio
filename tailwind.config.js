/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F',
          800: '#112240',
          700: '#1B3055',
          600: '#233E6B',
        },
        paper: '#F7F9FC',
        mist: '#E6EEF5',
        amber: {
          DEFAULT: '#C9A96E',
          soft: '#DFC79A',
        },
        tangerine: '#FF6B35',
        glow: '#64D2FF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Songti SC"', '"Times New Roman"', 'serif'],
        sans: [
          'Inter',
          '-apple-system',
          '"SF Pro Display"',
          '"PingFang SC"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      letterSpacing: {
        breathe: '0.05em',
        wideish: '0.12em',
        widest2: '0.28em',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        lift: '0 24px 60px -24px rgba(10, 25, 47, 0.35)',
        liftDark: '0 24px 70px -20px rgba(0, 0, 0, 0.75)',
        glow: '0 0 0 1px rgba(201,169,110,0.4), 0 0 28px rgba(201,169,110,0.35)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) rotate(6deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
};
