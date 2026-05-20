/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      /* ========== Color Extensions ========== */
      colors: {
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          gray: "var(--text-gray)",
          'gray-light': "var(--text-gray-light)",
          'gray-dark': "var(--text-gray-dark)",
          white: "var(--text-white)",
          'semi-transparent': "var(--text-semi-transparent)",
          dark: "var(--text-dark)",
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          light: "var(--bg-light)",
          gray: "var(--bg-gray)",
          'gray-light': "var(--bg-gray-light)",
          'purple-light': "var(--bg-purple-light)",
          'purple-lighter': "var(--bg-purple-lighter)",
          'green-light': "var(--bg-green-light)",
          'pink-light': "var(--bg-pink-light)",
          black: "var(--bg-black)",
          accent: "var(--bg-accent)",
          overlay: "var(--bg-overlay)",
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          dark: "var(--border-dark)",
          gray: "var(--border-gray)",
          'gray-dark': "var(--border-gray-dark)",
          'gray-light': "var(--border-gray-light)",
        },
        // Component-Specific Colors
        header: {
          border: "var(--header-border)",
        },
        button: {
          'bg-primary': "var(--button-bg-primary)",
          'bg-secondary': "var(--button-bg-secondary)",
          'bg-accent': "var(--button-bg-accent)",
          'text-primary': "var(--button-text-primary)",
          'text-secondary': "var(--button-text-secondary)",
          'text-muted': "var(--button-text-muted)",
          'border-primary': "var(--button-border-primary)",
          'border-secondary': "var(--button-border-secondary)",
        },
        dropdown: {
          bg: "var(--dropdown-bg)",
          text: "var(--dropdown-text)",
          border: "var(--dropdown-border)",
        },
        'icon-button': {
          'bg-primary': "var(--icon-button-bg-primary)",
          'bg-secondary': "var(--icon-button-bg-secondary)",
          border: "var(--icon-button-border)",
        },
        list: {
          bg: "var(--list-bg)",
          border: "var(--list-border)",
        },
        link: {
          'text-primary': "var(--link-text-primary)",
          'text-secondary': "var(--link-text-secondary)",
        },
      },
      
      /* ========== Typography Extensions ========== */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        '9xl': 'var(--line-height-9xl)',
        '10xl': 'var(--line-height-10xl)',
        '11xl': 'var(--line-height-11xl)',
        '12xl': 'var(--line-height-12xl)',
      },
      fontFamily: {
        'primary': 'var(--font-primary)',
        'secondary': 'var(--font-secondary)',
      },
      
      /* ========== Spacing Extensions ========== */
      spacing: {
        'xs': 'var(--margin-xs)',
        'sm': 'var(--margin-sm)',
        'md': 'var(--margin-md)',
        'lg': 'var(--margin-lg)',
        'xl': 'var(--margin-xl)',
        '2xl': 'var(--margin-2xl)',
        '3xl': 'var(--margin-3xl)',
        '4xl': 'var(--margin-4xl)',
        '5xl': 'var(--margin-5xl)',
        '6xl': 'var(--margin-6xl)',
        '7xl': 'var(--margin-7xl)',
        '8xl': 'var(--margin-8xl)',
        '9xl': 'var(--margin-9xl)',
        '10xl': 'var(--margin-10xl)',
        '11xl': 'var(--margin-11xl)',
        '12xl': 'var(--margin-12xl)',
        '13xl': 'var(--margin-13xl)',
        '14xl': 'var(--margin-14xl)',
        '15xl': 'var(--margin-15xl)',
        '16xl': 'var(--margin-16xl)',
        '17xl': 'var(--margin-17xl)',
        '18xl': 'var(--margin-18xl)',
        '19xl': 'var(--margin-19xl)',
        '20xl': 'var(--margin-20xl)',
        '21xl': 'var(--margin-21xl)',
        '22xl': 'var(--margin-22xl)',
        '23xl': 'var(--margin-23xl)',
        '24xl': 'var(--margin-24xl)',
        '25xl': 'var(--margin-25xl)',
        '26xl': 'var(--margin-26xl)',
      },
      
      /* ========== Border Radius Extensions ========== */
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
      },
      
      /* ========== Border Width Extensions ========== */
      borderWidth: {
        'none': 'var(--border-width-none)',
        'thin': 'var(--border-width-thin)',
        'medium': 'var(--border-width-medium)',
      },

      /* ========== Animation Extensions ========== */
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'slide-in-down': 'slideInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },

      /* ========== Keyframes Extensions ========== */
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          from: { opacity: '0', transform: 'translateY(-40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}