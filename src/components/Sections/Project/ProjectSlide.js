import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function ProjectSlide({ data, activeState, setActiveState }) {
  const bg = useColorModeValue('brand.white', 'brand.dark');
  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center' gap='6'>
      <Box
        w='300px'
        h='300px'
        bg={bg}
        borderRadius='2xl'
        shadow='lg'
        overflow='hidden'
      >
        <Image
          width='100%'
          height='100%'
          objectFit='contain'
          objectPosition='center'
          src={activeState.img}
          alt={activeState.title}
        />
      </Box>
      <Flex width='300px' overflow='hidden'>
        <Flex gap={6} py='2'>
          {data.map((x, i) => (
            <Box
              key={i}
              w='60px'
              h='60px'
              border={x.title === activeState.title && '2px solid'}
              borderColor={x.title === activeState.title && 'brand.primary'}
              borderRadius='md'
              shadow='sm'
              overflow='hidden'
              transition={'all 100ms ease'}
              _hover={{
                cursor: 'pointer',
                border: '2px solid',
                borderColor: 'brand.primary',
                paddingBottom: '0',
              }}
              onClick={() => setActiveState(x)}
            >
              <Image
                w='100%'
                h='100%'
                objectFit='cover'
                objectPosition='center center'
                src={x.img}
                alt={x.title}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectSlide;
