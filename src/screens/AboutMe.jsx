import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import { useEffect } from 'react';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { AnimatedCharacters } from '../components/AboutSection/AnimatedCharacters';

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
export const AboutMe = () => {
  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.025,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <VStack
      color={'white'}
      bg={'#000'}
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
      textAlign={'center'}
    >
      <MotionVStack
        initial="hidden"
        whileInView="visible"
        variants={container}
        justifyContent={'center'}
        pl={'10%'}
        gap={'30px'}
        h={'100%'}
      >
        <MotionHeading
          initial="hidden"
          whileInView="visible"
          variants={container}
          fontWeight={900}
          color={'black'}
          fontSize={'3.5rem'}
          style={{ WebkitTextStroke: '1px white' }}
          width={'80%'}
          viewport={{ amount: 1 }}
        >
          <AnimatedCharacters
            text="A MERN stack web developer and tech enthusiast"
            pos="-200%"
          />
        </MotionHeading>
        <MotionHeading
          initial="hidden"
          whileInView="visible"
          variants={container}
          fontSize={'4vw'}
          fontWeight={700}
          width={'80%'}
          viewport={{ amount: 1 }}
        >
          <AnimatedCharacters
            text="I love working on creative and unique projects."
            pos="-100%"
          />
        </MotionHeading>
        <MotionHeading
          initial="hidden"
          whileInView="visible"
          variants={container}
          fontSize={'4vw'}
          fontWeight={700}
          width={'80%'}
          color={'#ff0000'}
          viewport={{ amount: 1 }}
        >
          <AnimatedCharacters text="CONNECT WITH ME" pos="200%" />
        </MotionHeading>
      </MotionVStack>
      {/*  <VStack
        justifyContent={'center'}
        pl={'10%'}
        h={'100%'}
        textTransform={'uppercase'}
      >
        <Heading
          fontStyle={'bold'}
          fontSize={'9.2vw'}
          color={'black'}
          style={{ WebkitTextStroke: '1px white' }}
        >
          Let's
        </Heading>
        <Heading fontWeight={700} fontSize={'9.8vw'} color={'gray.500'}>
          Create
        </Heading>
        <Heading fontWeight={600} fontSize={'9.2vw'}>
          Something
        </Heading>
      </VStack> 
      <VStack
        justifyContent={'center'}
        pl={'10%'}
        h={'100%'}
        textTransform={'uppercase'}
      >
        <Heading
          fontStyle={'bold'}
          fontSize={'13vw'}
          color={'black'}
          pos={'relative'}
          _before={{
            content: `'AWESOME'`,
            position: 'absolute',
            top: '10px',
            left: '10px',
            color: 'white',
          }}
        >
          <Text style={{ WebkitTextStroke: '2px #f00' }}>Awesome </Text>
        </Heading>
      </VStack>*/}
    </VStack>
  );
};
