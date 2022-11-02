import { motion } from 'framer-motion';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { ProjectInfo } from '../components/ProjectCard/ProjectInfo';
import { container, item } from '../helpers/animation';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
export const Projects = ({ lightMode }) => {
  return (
    <MotionBox
      key={2}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }}
      exit={{ y: '-100%' }}
      color={lightMode ? 'redTheme.200' : 'white'}
      bg={'transparent'}
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
        <MotionBox display={'inline-block'} variants={item('-100%')}>
          Proj
        </MotionBox>
        <MotionBox
          display={'inline-block'}
          variants={item('100%')}
          color={lightMode ? 'blueTheme.300' : '#434141'}
        >
          ects
        </MotionBox>
      </MotionHeading>
      <VStack
        w={'80%'}
        flexBasis={'100%'}
        flexGrow={1}
        border={'1px solid #434141'}
        borderColor={'bgTheme.200'}
        borderRadius={'8px'}
        maxH={'70vh'}
        overflowY={'auto'}
        spacing={0}
      >
        <ProjectInfo lightMode={lightMode} />
        <ProjectInfo lightMode={lightMode} />
        <ProjectInfo lightMode={lightMode} />
        <ProjectInfo lightMode={lightMode} />
      </VStack>
    </MotionBox>
  );
};
