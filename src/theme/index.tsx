import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const brand = {
  '10': '#2C5282',
  '50': '#EDF2F7',
  '100': '#11a8ff',
  '200': '#daf8a5',
  '300': '#baeC75',
  '400': '#99d950',
  '500': '#6dc11f',
  '600': '#54a516',
  '700': '#3e8a0f',
  '800': '#2b6f09',
  '900': '#1d5c05',
};

export const theme = extendTheme(
  {
    colors: {
      brand,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Button', 'Divider'],
  })
);
