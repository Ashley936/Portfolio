import { motion } from 'framer-motion';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { AnimatedCharacters } from '../../helpers/AnimatedCharacters';

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
export const AboutPart2 = ({ setDone }) => {
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
    exit: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <MotionVStack
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={container}
      key={2}
      justifyContent={'center'}
      pl={'10%'}
      h={'100%'}
      textTransform={'uppercase'}
    >
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        fontStyle={'bold'}
        fontSize={'9.2vw'}
        color={'black'}
        style={{ WebkitTextStroke: '1px white' }}
      >
        <AnimatedCharacters text="Let's" pos="-200%" />
      </MotionHeading>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        fontSize={'9.8vw'}
        color={'gray.500'}
      >
        <AnimatedCharacters text="Create" pos="-200%" />
      </MotionHeading>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        fontWeight={600}
        fontSize={'9.2vw'}
        onAnimationComplete={() => {
          setTimeout(() => setDone('page3'), 1000);
        }}
      >
        <AnimatedCharacters text="Something" pos="200%" />
      </MotionHeading>
    </MotionVStack>
  );
};
