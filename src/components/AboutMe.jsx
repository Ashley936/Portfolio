import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import { useEffect } from 'react';
import { Heading, HStack, VStack } from '@chakra-ui/react';
export const AboutMe = ({ outerBox }) => {
  return (
    <VStack
      w={'100vw'}
      h={'500vh'}
      bg={'gray.400'}
      maxW={'100%'}
      justifyContent={'center'}
      flexShrink={0}
    >
      <Heading
        onClick={() => {
          outerBox.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        Home
      </Heading>
      <Heading mx={'auto'}>Lorem ipsum dolor sit, amet consectetur</Heading>
    </VStack>
  );
};
