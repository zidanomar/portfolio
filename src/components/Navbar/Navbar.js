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

import { FiSun, FiMoon, FiExternalLink } from 'react-icons/fi';

function Navbar() {
  const bg = useColorModeValue('brand.light', 'brand.dark');
  const Icon = useColorModeValue(<FiMoon />, <FiSun />);
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      width='100vw'
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
          <HStack spacing={['2', '6']}>
            <Button size='md' variant='outline' onClick={toggleColorMode}>
              {Icon}
            </Button>
            <Button
              as='a'
              href='https://drive.google.com/file/d/1TP0wzuoLv82sYj-6iJRBgv01mKc6SNxt/view'
              target='_blank'
              rightIcon={<FiExternalLink />}
            >
              Resume
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
