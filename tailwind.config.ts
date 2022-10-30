module.exports = {
  content: [
    './src/**/*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          wine: '#782A3B',
          'red-munsell': '#F70C3F',
          'brink-pink': '#F9577A',
          'cherry-blossom-pink': '#FFE8E8',
          white: '#FFFFFF',
        },
        dark: {
          'dark-siena': {
            1: '#521D29',
            2: '#441822',
            3: '#3E161F',
          },
          wine: '#782A3B',
          'crimsom-ua': '#A6082A',
          'red-ncs': '#C40A32',
          'red-munsell': '#F70C3F',
          'brink-pink': '#F9577A',
          'cherry-blossom-pink': '#FFE8E8',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
