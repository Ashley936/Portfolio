import { motion } from 'framer-motion';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { AnimatedCharacters } from '../../helpers/AnimatedCharacters';
import { AnimatedLetters } from '../../helpers/AnimateLetters';

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
export const AboutPart3 = ({ setDone }) => {
  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      transition: {
        delay: 0.8,
        staggerChildren: 0,
      },
    },
  };
  return (
    <MotionVStack
      key={3}
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
        fontSize={'13vw'}
        color={'black'}
        onAnimationComplete={() => {
          setTimeout(() => setDone('page1'), 1000);
        }}
      >
        <AnimatedLetters text="Awesome" pos="100%" />{' '}
      </MotionHeading>
    </MotionVStack>
  );
};
