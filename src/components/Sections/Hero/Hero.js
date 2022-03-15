import {
  Box,
  chakra,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

import hero from '../../../assets/svg/hero.svg';
import IconLink from '../../Link/IconLink';
import { ReactComponent as Github } from '../../../assets/svg/github.svg';
import { ReactComponent as LinkedIn } from '../../../assets/svg/linkedin.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/instagram.svg';
import { ReactComponent as Mail } from '../../../assets/svg/mail.svg';
import HeroCard from '../../Card/HeroCard';

function Hero() {
  const [isLargerThan576] = useMediaQuery('(min-width: 576px)');
  return (
    <Flex
      w='100%'
      h='100vh'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      gap={['4', '6']}
    >
      {!isLargerThan576 && <Text as='h3'>Zidan Omar Hamid</Text>}
      <Box
        width={['80%', '80%', '100%']}
        height={['80%', '80%', '100%']}
        maxW='300px'
        maxH='300px'
        position='relative'
      >
        {isLargerThan576 && (
          <React.Fragment>
            <HeroCard
              top='-5%'
              left='-5%'
              initial={{ y: -20, x: -100 }}
              animate={{ y: -40 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.6,
              }}
            >
              <Text as='h4'>
                Hi, I'm <chakra.span color='brand.primary'>Zidan</chakra.span>
              </Text>
            </HeroCard>
            <HeroCard
              left={'103%'}
              top='50%'
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.4,
              }}
            >
              <React.Fragment>
                <Text as='h4'>CE Student</Text>
                <Text as='h4' color='brand.primary'>
                  Sakarya University
                </Text>
              </React.Fragment>
            </HeroCard>
            <HeroCard
              right={'105%'}
              bottom='0'
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.8,
              }}
            >
              <React.Fragment>
                <Text as='h4'>Based in</Text>
                <Text as='h4' color='brand.primary'>
                  Sakarya, Turkey
                </Text>
              </React.Fragment>
            </HeroCard>
          </React.Fragment>
        )}
        <Image
          width='100%'
          height='100%'
          objectFit='fill'
          objectPosition='center'
          src={hero}
          alt='hero image'
        />
      </Box>
      <Flex flexDir='column' alignItems='center'>
        <Text
          as='h1'
          textAlign='center'
          fontSize={['4xl', '4xl', '5xl', '6xl']}
        >
          React Developer
        </Text>
        <HStack spacing={3} color='brand.gray'>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            Chakra UI
          </Text>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            |
          </Text>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            Next.js
          </Text>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            |
          </Text>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            Typescript
          </Text>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            |
          </Text>
          <Text as='h3' fontSize={['sm', 'md', 'lg', 'xl']}>
            GraphQl
          </Text>
        </HStack>
      </Flex>
      <HStack spacing={6}>
        <IconLink icon={Github} href='https://github.com/zidanomar' />
        <IconLink
          icon={LinkedIn}
          href='https://www.linkedin.com/in/zidan-omar-hamid-611b8221b/'
        />
        <IconLink
          icon={Instagram}
          href='https://www.instagram.com/430am.dev/'
        />
        <IconLink icon={Mail} href='mailto:hzidanomar@gmail.com' />
      </HStack>
    </Flex>
  );
}

export default Hero;
