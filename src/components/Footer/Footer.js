import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Flex w='100%' h='16' alignItems='center' justifyContent='center'>
      <Text>Copyright &copy; {`${year} 430amdev. All Rights Reserved`}</Text>
    </Flex>
  );
}

export default Footer;
