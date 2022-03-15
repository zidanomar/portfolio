import { Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Wave } from '../../assets/svg/wave.svg';

function Divider({ sectionBg, ...props }) {
  const lightBg = useColorModeValue('brand.white', 'brand.surface');
  const darkerBg = useColorModeValue('brand.light', 'brand.dark');
  return (
    <Icon
      as={Wave}
      width='100%'
      height='100%'
      mb='-2'
      sx={{ path: { fill: sectionBg === 'light' ? lightBg : darkerBg } }}
      {...props}
    />
  );
}

export default Divider;
