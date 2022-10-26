import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{vue,ts}', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        wine: '#782A3B',
        'crimsom-ua': '#A6082A',
        'red-ncs': '#C40A32',
        'red-munsell': '#F70C3F',
        'brink-pink': '#F9577A',
        'cherry-blossom-pink': '#FFE8E8',
      },
    },
  },
  plugins: [],
};
