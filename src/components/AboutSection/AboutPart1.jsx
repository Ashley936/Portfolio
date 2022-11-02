import { motion } from 'framer-motion';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { AnimatedCharacters } from '../../helpers/AnimatedCharacters';

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
export const AboutPart1 = ({ setDone, lightMode }) => {
  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.025,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <MotionVStack
      key={1}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={container}
      justifyContent={'center'}
      pl={'10%'}
      gap={'30px'}
      h={'100%'}
    >
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        fontWeight={900}
        color={'transparent'}
        fontSize={'3.5rem'}
        style={{ WebkitTextStroke: lightMode ? '1px #F13C20' : '1px white' }}
        width={'80%'}
        onAnimationComplete={() => {
          setTimeout(() => setDone('page2'), 1000);
        }}
      >
        <AnimatedCharacters
          text="A MERN stack web developer and tech enthusiast"
          pos="-200%"
        />
      </MotionHeading>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        color={lightMode ? 'blueTheme.300' : ''}
        fontSize={'4vw'}
        fontWeight={700}
        width={'80%'}
      >
        <AnimatedCharacters
          text="I love working on creative and unique projects."
          pos="-100%"
        />
      </MotionHeading>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        fontSize={'4vw'}
        fontWeight={700}
        width={'80%'}
        color={lightMode ? 'redTheme.200' : '#f00'}
      >
        <AnimatedCharacters text="CONNECT WITH ME" pos="200%" />
      </MotionHeading>
    </MotionVStack>
  );
};
