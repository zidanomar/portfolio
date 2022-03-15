import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
  const bg = useColorModeValue('brand.light', 'brand.dark');
  const Icon = useColorModeValue(<FiMoon />, <FiSun />);
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      width='100%'
      bg={bg}
      shadow='md'
      position='fixed'
      top='0'
      left='0'
      zIndex='tooltip'
    >
      <Container maxW='container.xl'>
        <Flex h='16' alignItems='center' justifyContent='space-between'>
          <Text as='h3'>430am.dev</Text>
          <HStack spacing='6'>
            <Button>Resume</Button>
            <Button onClick={toggleColorMode}>{Icon}</Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;