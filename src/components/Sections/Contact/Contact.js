import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import callme from '../../../assets/svg/callme.svg';

import { ReactComponent as Github } from '../../../assets/svg/github.svg';
import { ReactComponent as LinkedIn } from '../../../assets/svg/linkedin.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/instagram.svg';
import { ReactComponent as Mail } from '../../../assets/svg/mail.svg';
import IconLink from '../../Link/IconLink';

function Contact() {
  const bg = useColorModeValue('brand.light', 'brand.dark');
  return (
    <Box bg={bg} py={16}>
      <Container maxW={'container.xl'}>
        <VStack spacing={10}>
          <Heading fontSize={['xl', '2xl']}>
            😸 Keep In Touch With Me 😸
          </Heading>
          <HStack spacing={6} align='center'>
            <IconLink
              icon={Mail}
              href='mailto:zidanomar@430am.dev'
              isExternal
            />
            <IconLink
              icon={Github}
              href='https://github.com/zidanomar'
              isExternal
            />
            <IconLink
              icon={LinkedIn}
              href='https://www.linkedin.com/in/zidan-omar-hamid-611b8221b/'
              isExternal
            />
            <IconLink
              icon={Instagram}
              href='https://www.instagram.com/430am.dev/'
              isExternal
            />
          </HStack>
          <Box w='300px'>
            <Image src={callme} alt='callme' />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Contact;
