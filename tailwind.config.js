export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: {
        100: 'rgba(255, 255, 255, 0.1)',
        200: 'rgba(255, 255, 255, 0.2)',
        300: 'rgba(255, 255, 255, 0.3)',
        400: 'rgba(255, 255, 255, 0.4)',
        500: 'rgba(255, 255, 255, 0.5)',
        600: 'rgba(255, 255, 255, 0.6)',
        700: 'rgba(255, 255, 255, 0.7)',
        800: 'rgba(255, 255, 255, 0.8)',
        900: 'rgba(255, 255, 255, 0.9)',
        default: 'rgba(255, 255, 255, 1)',
      },
      black: 'rgba(0, 0, 0, 1)',
      grey: 'rgba(0, 0, 0, 0.6)',
      greyLight: 'rgba(0, 0, 0, 0.38)',
      purple: 'rgba(108, 81, 226, 1)',
      purpleLight: 'rgba(241, 240, 248, 1)',
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        md: '39px',
        xl: '85px',
      },
      center: true,
    },
  },
  plugins: [],
};
