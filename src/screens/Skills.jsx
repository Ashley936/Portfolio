import { motion } from 'framer-motion';
import {
  Box,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  VStack,
} from '@chakra-ui/react';
import { SkillPage } from '../components/SkillPage';
import { AnimatedCharacters } from '../helpers/AnimatedCharacters';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
export const Skills = () => {
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
        staggerChildren: 0.05,
      },
    },
  };
  const item = pos => ({
    hidden: {
      x: pos,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
    exit: {
      x: pos,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
  });
  return (
    <MotionBox
      key={3}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }}
      exit={{ y: '-100%' }}
      color={'white'}
      bg={'#000'}
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
      textAlign={'center'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      pl={'10%'}
      pr={'5%'}
      pb={'20px'}
    >
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={container}
        fontSize={'4rem'}
        w={'40%'}
        minW={'250px'}
        mx={'auto'}
        my={'30px'}
        textTransform="uppercase"
      >
        <MotionBox
          display={'inline-block'}
          variants={item('-100%')}
          color={'gray.500'}
        >
          Ski
        </MotionBox>
        <MotionBox display={'inline-block'} variants={item('100%')}>
          lls
        </MotionBox>
      </MotionHeading>
      <Box>
        <SkillPage />
      </Box>
    </MotionBox>
  );
};
