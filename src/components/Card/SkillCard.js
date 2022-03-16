import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Card from './Card';

function SkillCard({ data }) {
  const [activeState, setActiveState] = useState(data[0]);
  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center' gap='6'>
      <Card borderRadius='2xl'>
        <Flex w='300px' h='300px' flexDir='column' alignItems='center' gap='6'>
          <Text as='h3' textAlign='center'>
            {activeState.title}
          </Text>
          <Box h='100%'>
            <Image h='100%' src={activeState.src} alt={activeState.title} />
          </Box>
        </Flex>
      </Card>
      <Flex
        width='calc(300px + 2.5rem)'
        alignItems='center'
        justifyContent='space-between'
      >
        {data.map((x, i) => (
          <Card
            w='60px'
            h='60px'
            padding='2'
            border={x.title === activeState.title && '2px solid'}
            borderColor={x.title === activeState.title && 'brand.primary'}
            transition={'all 100ms ease'}
            _hover={{
              cursor: 'pointer',
              border: '2px solid',
              borderColor: 'brand.primary',
            }}
            onClick={() => setActiveState(x)}
          >
            <Image
              w='100%'
              h='100%'
              objectFit='contain'
              objectPosition='center'
              src={x.src}
              alt={x.title}
            />
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

export default SkillCard;
