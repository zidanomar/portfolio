import { chakra, useColorModeValue } from '@chakra-ui/react';

const CardComponent = chakra('div', {
  // attach style props
  baseStyle: {
    padding: 6,
    rounded: 'md',
    shadow: 'lg',
  },
});

function Card({ children, ...props }) {
  const bg = useColorModeValue('brand.white', 'brand.surface');
  return (
    <CardComponent bg={bg} {...props}>
      {children}
    </CardComponent>
  );
}

export default Card;
