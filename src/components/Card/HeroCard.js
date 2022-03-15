import React from 'react';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function HeroCard({ children, ...props }) {
  const bg = useColorModeValue('brand.white', 'brand.surface');
  return (
    <MotionBox
      bg={bg}
      position='absolute'
      width='max-content'
      padding={6}
      rounded='md'
      shadow='md'
      textAlign='center'
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export default HeroCard;
