import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Divider from '../../Divider/Divider';

import { projects } from './projects';
import ProjectSlide from './ProjectSlide';

function Project() {
  const bg = useColorModeValue('brand.light', 'brand.surface');
  const [activeState, setActiveState] = useState(projects[0]);

  return (
    <Box bg={bg} pt='4'>
      <Container maxW='container.xl'>
        <Heading textAlign='center' mb={16}>
          Latest Projects 🚀
        </Heading>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(3, 1fr)',
          ]}
          gap={16}
          alignItems='start'
        >
          <GridItem>
            <ProjectSlide
              data={projects}
              activeState={activeState}
              setActiveState={setActiveState}
            />
          </GridItem>
          <GridItem colSpan={2} h='100%'>
            <Flex
              height='100%'
              flexDir='column'
              justifyContent='space-between'
              gap={10}
            >
              <VStack align='start' spacing={6}>
                <Text as='h3'>{activeState.title}</Text>
                <Text>{activeState.description}</Text>
                <HStack spacing={2}>
                  {activeState.tags.map((x, i) => (
                    <Badge key={i} colorScheme='orange'>
                      {x}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
              <HStack spacing='6' alignSelf='end'>
                <Button>Button</Button>
                <Button>Button</Button>
              </HStack>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
      <Divider />
    </Box>
  );
}

export default Project;
