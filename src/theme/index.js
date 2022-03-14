import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { color } from './color';
import { typography } from './typography';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    '*, *::before, &::after': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },
    body: {
      color: mode('brand.dark', 'brand.light')(props),
      bg: mode('brand.light', 'brand.dark')(props),
      boxSizing: 'border-box',
    },
    a: {
      _hover: {
        textDecoration: 'none !important',
      },
    },
    ...typography,
  }),
};

const theme = extendTheme({
  styles,
  config,
  colors: {
    brand: {
      ...color,
    },
  },
  fonts: {
    heading: `'Nunito', ${base.fonts.heading}`,
    body: `'Nunito', ${base.fonts.body}`,
  },
});

export default theme;
