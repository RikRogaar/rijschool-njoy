/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': {
          'DEFAULT': '#0057a5',
          '50': '#f0f7ff',
          '100': '#dfeeff',
          '200': '#b9defe',
          '300': '#7bc5fe',
          '400': '#34a6fc',
          '500': '#0a8ced',
          '600': '#006dcb',
          '700': '#0057a5',
          '800': '#054b87',
          '900': '#0a3e70',
          '950': '#07274a',
        },
        'theme-secondary-blue': {
          'DEFAULT': '#020f55',
          '50': '#e5f3ff',
          '100': '#d0e8ff',
          '200': '#abd3ff',
          '300': '#78b5ff',
          '400': '#4483ff',
          '500': '#1a52ff',
          '600': '#0031ff',
          '700': '#0035ff',
          '800': '#002ede',
          '900': '#0322ac',
          '950': '#020f55',
        }
      },
      backgroundColor: {
        'muted': '#f4f4f5',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
