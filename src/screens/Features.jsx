import { motion } from 'framer-motion';
import {
  Box,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Globe from '../images/globe.jpg';
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
export const Features = () => {
  const [mousePos, setMousePos] = useState({});
  const handleMouseMove = e => {
    setMousePos({ x: e.pageX - 50, y: e.pageY - 50 });
  };
  return (
    <MotionBox
      key={4}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }}
      exit={{ opacity: 0 }}
      color={'white'}
      bg={'#000'}
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
      display={'flex'}
      flexDirection={'column'}
      overflow={'hidden'}
    >
      <MotionBox
        initial={{ x: 0, y: 0, opacity: 0 }}
        w={'100px'}
        h={'100px'}
        pos={'absolute'}
        bg={'white'}
        borderRadius={'50%'}
        animate={{
          x: mousePos.x || 0,
          y: mousePos.y || 0,
          opacity: mousePos.x || mousePos.y ? 1 : 0,
        }}
        transition={{ type: 'spring' }}
      ></MotionBox>
      <VStack
        ml={'20%'}
        mr={'5%'}
        alignSelf={'stretch'}
        h={'65%'}
        textTransform={'uppercase'}
        fontSize={'3rem'}
        alignItems={'left'}
        justifyContent={'space-between'}
        my={'auto'}
        pos={'relative'}
        fontWeight={600}
        onMouseMove={e => handleMouseMove(e)}
      >
        <Box
          pos={'absolute'}
          left={'28%'}
          top={'6%'}
          w={'300px'}
          h={'300px'}
          rounded={'full'}
          bgColor={'white'}
          bgImg={Globe}
          bgPos={'center'}
          bgSize={'180%'}
          bgRepeat={'no-repeat'}
          boxShadow={'0px 4px 13px rgba(255, 255, 255, 0.25)'}
        ></Box>
        <Text cursor={'default'} style={{ mixBlendMode: 'difference' }}>
          Fast
        </Text>
        <Text
          cursor={'default'}
          style={{ mixBlendMode: 'difference' }}
          textAlign={'right'}
        >
          Realiable
        </Text>
        <Text cursor={'default'} style={{ mixBlendMode: 'difference' }}>
          Creative
        </Text>
      </VStack>
    </MotionBox>
  );
};
