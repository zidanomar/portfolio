import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Divider from '../../Divider/Divider';

import curious from '../../../assets/svg/curious.svg';
import itguy from '../../../assets/svg/itguy.svg';
import { SkillCard } from '../../Card';

import { frontend, backend } from '../../Card/skills';

function Proficiency() {
  return (
    <Box pt='4'>
      <Container maxW='container.xl'>
        <Stack spacing={16}>
          <Heading textAlign='center'>✨ My Main Skills ✨</Heading>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
            ]}
            gap={16}
            justifyContent='center'
            alignItems='center'
          >
            <GridItem order={[2, 2, 2, 1]}>
              <SkillCard data={frontend} />
            </GridItem>
            <GridItem order={[1, 1, 1, 2]}>
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                gap='6'
              >
                <Text as='h2'>Frontend</Text>
                <Box>
                  <Image src={curious} alt='frontend' />
                </Box>
              </Flex>
            </GridItem>
          </Grid>

          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
            ]}
            gap={16}
            justifyContent='center'
            alignItems='center'
          >
            <GridItem>
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                gap='6'
              >
                <Text as='h2'>Backend</Text>
                <Box>
                  <Image src={itguy} alt='Backend' />
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <SkillCard data={backend} />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      <Divider sectionBg='light' />
    </Box>
  );
}

export default Proficiency;
