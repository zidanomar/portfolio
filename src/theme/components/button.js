import { darken, mode, whiten } from '@chakra-ui/theme-tools';

const buttonStyle = {
  baseStyle: {
    color: 'brand.white',
  },
  variants: {
    primary: (props) => ({
      bg: 'brand.primary',
      _hover: {
        bg: mode(
          darken('brand.primary', 10),
          whiten('brand.primary', 10)
        )(props),
      },
    }),
    mono: (props) => ({
      bg: 'brand.gray',
      _hover: {
        bg: mode(
          darken('brand.primary', 10),
          whiten('brand.primary', 10)
        )(props),
      },
    }),
    outline: {
      border: '2px solid',
      borderColor: 'brand.primary',
      color: 'brand.primary',
      _hover: {
        backgroundColor: 'brand.primary',
        color: 'white',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};

export { buttonStyle };
