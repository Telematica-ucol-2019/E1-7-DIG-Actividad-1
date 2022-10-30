import Theme from '~~/src/typescript/types/theme';
export const setColor = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
