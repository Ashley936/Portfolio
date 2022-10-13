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
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
export const Projects = () => {
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
      key={2}
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
          Proj
        </MotionBox>
        <MotionBox display={'inline-block'} variants={item('100%')}>
          ects
        </MotionBox>
      </MotionHeading>
      <VStack
        w={'80%'}
        flexBasis={'100%'}
        flexGrow={1}
        border={'1px solid white'}
        borderRadius={'8px'}
        maxH={'70vh'}
        overflowY={'auto'}
      >
        <HStack
          w={'100%'}
          flexShrink={0}
          h={'350px'}
          borderBottom={'1px solid white'}
        >
          <HStack
            w={'50%'}
            h={'100%'}
            borderRight={'1px solid white'}
            gap={'30px'}
          >
            <Flex h={'100%'} alignItems={'flex-end'} color={'#444'}>
              <Heading fontSize={'7rem'} py={0}>
                1.
              </Heading>
            </Flex>
            <VStack
              justifyContent={'space-between'}
              py={'20px'}
              h={'100%'}
              textAlign={'left'}
              alignItems={'left'}
            >
              <Heading>IPRESS</Heading>
              <List px={'5px'}>
                <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
                <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
              </List>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    </MotionBox>
  );
};
