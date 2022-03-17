import {
  Box,
  Container,
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { ReactComponent as Zidan } from '../../../assets/svg/zidan.svg';
import Divider from '../../Divider/Divider';

function Project() {
  return (
    <Link
      href='https://github.com/zidanomar'
      isExternal
      color='brand.primary'
      lineHeight='8'
      fontSize='md'
      fontWeight='bold'
    >
      projects
    </Link>
  );
}

function About() {
  const bg = useColorModeValue('brand.white', 'brand.surface');
  return (
    <Box bg={bg}>
      <Container maxW='container.xl' py={10}>
        <Stack spacing='6'>
          <Text as='h1' textAlign='center'>
            Zidan Omar Hamid
          </Text>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
            ]}
            alignItems='center'
            justifyContent='center'
            gap={6}
          >
            <GridItem p='4'>
              <Zidan width='100%' height='100%' />
            </GridItem>
            <GridItem p='4' colSpan={[0, 0, 0, 2]}>
              <Text lineHeight={[8, 10]} fontSize={['md', 'lg', 'xl']}>
                I am Indonesian computer engineering student at Sakarya
                University, Turkey. Currently working on some React <Project />{' '}
                and building web apps to help people around me. Besides I am
                focusing on frontend development, I build my backend using
                NodeJS, PostgreSQL, Mongo DB, and firebase for my <Project />{' '}
              </Text>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      <Divider />
    </Box>
  );
}

export default About;
