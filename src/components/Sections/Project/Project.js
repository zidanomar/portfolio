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
import { FiExternalLink } from 'react-icons/fi';

import { projects } from './projects';
import Divider from '../../Divider/Divider';
import ProjectSlide from './ProjectSlide';

function Project() {
  const bg = useColorModeValue('brand.white', 'brand.surface');
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
                <Flex width='100%' wrap='wrap' gap='2'>
                  {activeState.tags.map((x, i) => (
                    <Badge key={i} colorScheme='orange'>
                      {x}
                    </Badge>
                  ))}
                </Flex>
              </VStack>
              <HStack spacing='6' alignSelf='end'>
                {activeState.sc && (
                  <Button
                    as='a'
                    href={activeState.sc}
                    target='_blank'
                    rightIcon={<FiExternalLink />}
                  >
                    Source Code
                  </Button>
                )}

                <Button
                  as='a'
                  href={activeState.url}
                  target='_blank'
                  rightIcon={<FiExternalLink />}
                >
                  Preview Site
                </Button>
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
